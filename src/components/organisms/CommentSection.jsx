import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import commentService from '@/services/api/commentService';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';
import Card from '@/components/atoms/Card';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import Empty from '@/components/ui/Empty';
import ApperIcon from '@/components/ApperIcon';

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    author: '',
    email: '',
    content: ''
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadComments();
  }, [postId]);

  const loadComments = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await commentService.getByPostId(postId);
      setComments(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.author || !formData.email || !formData.content) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      setSubmitting(true);
      const newComment = {
        postId,
        ...formData,
        date: new Date().toISOString()
      };
      
      const createdComment = await commentService.create(newComment);
      setComments([...comments, createdComment]);
      setFormData({ author: '', email: '', content: '' });
      toast.success('Comment posted successfully!');
    } catch (err) {
      toast.error('Failed to post comment');
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (loading) return <Loading type="list" />;
  if (error) return <Error message={error} onRetry={loadComments} />;

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Comments ({comments.length})
        </h3>
        
        {/* Comment Form */}
        <Card className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Leave a Comment
          </h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="author">Name</Label>
                <Input
                  id="author"
                  name="author"
                  type="text"
                  value={formData.author}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="content">Comment</Label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Write your comment..."
                rows={4}
                required
                className="flex w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
              />
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="gap-2"
            >
              {submitting ? (
                <>
                  <ApperIcon name="Loader2" size={16} className="animate-spin" />
                  Posting...
                </>
              ) : (
                <>
                  <ApperIcon name="Send" size={16} />
                  Post Comment
                </>
              )}
            </Button>
          </form>
        </Card>
        
        {/* Comments List */}
        <div className="space-y-4">
          {comments.length === 0 ? (
            <Empty
              title="No comments yet"
              description="Be the first to share your thoughts about this post!"
              icon="MessageCircle"
            />
          ) : (
            comments.map((comment) => (
              <motion.div
                key={comment.Id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <ApperIcon name="User" size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h5 className="font-semibold text-gray-900">
                          {comment.author}
                        </h5>
                        <span className="text-sm text-gray-500">
                          {format(new Date(comment.date), 'MMM dd, yyyy')}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;