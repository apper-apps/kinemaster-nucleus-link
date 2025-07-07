import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/atoms/Card';
import ApperIcon from '@/components/ApperIcon';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Video Editor & Content Creator',
      bio: 'Professional video editor with 8+ years of experience in mobile video editing and KineMaster expertise.',
      icon: 'User'
    },
    {
      name: 'Mike Chen',
      role: 'Technical Writer',
      bio: 'Specializes in creating comprehensive guides and tutorials for video editing software and mobile apps.',
      icon: 'User'
    },
    {
      name: 'Emma Davis',
      role: 'Community Manager',
      bio: 'Manages our community of video editors and ensures everyone gets the support they need.',
      icon: 'User'
    }
  ];

  const values = [
    {
      title: 'Quality Content',
      description: 'We provide accurate, up-to-date information and thoroughly tested downloads.',
      icon: 'Award'
    },
    {
      title: 'User Safety',
      description: 'Your security is our priority. All downloads are scanned and verified.',
      icon: 'Shield'
    },
    {
      title: 'Community First',
      description: 'We listen to our community and continuously improve based on your feedback.',
      icon: 'Users'
    },
    {
      title: 'Innovation',
      description: 'We stay ahead of the curve with the latest video editing trends and techniques.',
      icon: 'Lightbulb'
    }
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
              About KineMaster Hub
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Your trusted source for KineMaster MOD APK downloads, comprehensive guides, and video editing expertise.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <Card className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At KineMaster Hub, we're passionate about democratizing professional video editing. 
              We believe that everyone should have access to powerful video editing tools and the knowledge 
              to use them effectively. Our mission is to provide safe, reliable downloads of KineMaster MOD APK 
              along with comprehensive guides, tutorials, and support to help creators bring their vision to life.
            </p>
          </Card>
        </motion.section>

        {/* Our Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={value.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={member.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                KineMaster Hub was founded in 2021 by a group of passionate video creators who recognized 
                the need for a reliable, comprehensive resource for KineMaster users. As mobile video editing 
                became increasingly popular, we saw creators struggling to find trustworthy downloads and 
                clear guidance on how to maximize their editing potential.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small blog sharing tips and tricks has evolved into a comprehensive platform 
                serving millions of creators worldwide. We've maintained our commitment to quality and safety 
                while expanding our offerings to include detailed installation guides, version archives, and 
                an active community forum.
              </p>
              <p className="text-gray-700">
                Today, KineMaster Hub is recognized as the go-to resource for KineMaster MOD APK downloads 
                and video editing education. We're proud to have helped countless creators tell their stories 
                and bring their creative visions to life.
              </p>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default About;