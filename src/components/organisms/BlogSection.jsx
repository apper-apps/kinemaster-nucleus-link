import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import blogService from '@/services/api/blogService';
import BlogCard from '@/components/molecules/BlogCard';
import Button from '@/components/atoms/Button';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import ApperIcon from '@/components/ApperIcon';

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await blogService.getAll();
      setPosts(data.slice(0, 3)); // Show only 3 latest posts
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading type="card" />;
  if (error) return <Error message={error} onRetry={loadPosts} />;

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Tips &
              <span className="gradient-text"> Tutorials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest KineMaster features, editing techniques, and 
              creative inspiration from our expert community.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <BlogCard key={post.Id} post={post} />
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/blog">
            <Button variant="outline" size="lg" className="gap-2">
              <ApperIcon name="ArrowRight" size={20} />
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;