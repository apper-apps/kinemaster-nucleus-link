import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Card from '@/components/atoms/Card';
import Badge from '@/components/atoms/Badge';
import ApperIcon from '@/components/ApperIcon';

const BlogCard = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/blog/${post.Id}`}>
        <Card className="h-full overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-lg mb-4 flex items-center justify-center">
            <ApperIcon name="Video" size={48} className="text-white" />
          </div>
          
          <div className="mb-3">
            <Badge variant="outline" className="text-xs">
              {post.category}
            </Badge>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <ApperIcon name="User" size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <ApperIcon name="Calendar" size={16} />
              <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default BlogCard;