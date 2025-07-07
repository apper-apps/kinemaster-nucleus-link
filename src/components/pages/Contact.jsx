import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';
import ApperIcon from '@/components/ApperIcon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email Us',
      description: 'Get in touch with our support team',
      contact: 'support@kinemasterhub.com'
    },
    {
      icon: 'MessageCircle',
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      contact: 'Available 24/7'
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      description: 'Speak directly with our team',
      contact: '+1 (555) 123-4567'
    }
  ];

  const socialLinks = [
    { icon: 'Facebook', name: 'Facebook', url: '#' },
    { icon: 'Twitter', name: 'Twitter', url: '#' },
    { icon: 'Youtube', name: 'YouTube', url: '#' },
    { icon: 'Instagram', name: 'Instagram', url: '#' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Have questions about KineMaster? Need technical support? We're here to help! 
              Reach out to our friendly team.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your question or concern..."
                    rows={6}
                    required
                    className="flex w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <ApperIcon name="Loader2" size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <ApperIcon name="Send" size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <ApperIcon name={info.icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 mb-1">
                        {info.description}
                      </p>
                      <p className="text-primary font-medium">
                        {info.contact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Media */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Follow Us
              </h2>
              <p className="text-gray-600 mb-6">
                Stay connected with us on social media for the latest updates, 
                tips, and community highlights.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <ApperIcon name={social.icon} size={20} />
                  </a>
                ))}
              </div>
            </Card>

            {/* FAQ Link */}
            <Card className="bg-gradient-to-br from-primary to-secondary text-white">
              <h3 className="text-xl font-bold mb-4">
                Frequently Asked Questions
              </h3>
              <p className="mb-4 opacity-90">
                Before reaching out, check our FAQ section for quick answers 
                to common questions.
              </p>
              <Button
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 gap-2"
              >
                <ApperIcon name="HelpCircle" size={16} />
                View FAQ
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;