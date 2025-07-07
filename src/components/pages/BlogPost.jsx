import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import blogService from '@/services/api/blogService';
import CommentSection from '@/components/organisms/CommentSection';
import Button from '@/components/atoms/Button';
import Badge from '@/components/atoms/Badge';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import ApperIcon from '@/components/ApperIcon';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    loadPost();
  }, [id]);

  const loadPost = async () => {
    try {
      setLoading(true);
      setError(null);
      const postData = await blogService.getById(parseInt(id));
      setPost(postData);
      
      // Load related posts
      const allPosts = await blogService.getAll();
      const related = allPosts
        .filter(p => p.Id !== postData.Id && p.category === postData.category)
        .slice(0, 3);
      setRelatedPosts(related);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadPost} />;
  if (!post) return <Error message="Post not found" />;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-sm text-gray-600 mb-8"
        >
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ApperIcon name="ChevronRight" size={16} />
          <Link to="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <ApperIcon name="ChevronRight" size={16} />
          <span className="text-gray-900 font-medium">
            {post.title}
          </span>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
        >
          {/* Featured Image */}
          <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <ApperIcon name="Video" size={64} className="text-white" />
          </div>

          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="outline">{post.category}</Badge>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ApperIcon name="User" size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ApperIcon name="Calendar" size={16} />
                <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Content */}
            <div className="prose max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-700">Tags:</span>
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.Id}
                  to={`/blog/${relatedPost.Id}`}
                  className="block group"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden group-hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <ApperIcon name="Video" size={32} className="text-white" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* Comments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CommentSection postId={post.Id} />
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;