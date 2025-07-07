import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/atoms/Card';

const Terms = () => {
  const lastUpdated = 'December 15, 2024';

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using KineMaster Hub, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'These terms apply to all visitors, users, and others who access or use the service.',
        'We reserve the right to update these terms at any time without prior notice.',
        'Your continued use of the service after any changes constitutes acceptance of the new terms.'
      ]
    },
    {
      title: 'Use License',
      content: [
        'Permission is granted to temporarily download one copy of the materials on KineMaster Hub for personal, non-commercial transitory viewing only.',
        'This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials.',
        'You may not use the materials for any commercial purpose or for any public display.',
        'You may not attempt to reverse engineer any software contained on the website.',
        'This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.'
      ]
    },
    {
      title: 'Disclaimer',
      content: [
        'The materials on KineMaster Hub are provided on an "as is" basis. We make no warranties, expressed or implied.',
        'We do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials.',
        'We disclaim all warranties, including but not limited to, warranties of merchantability and fitness for a particular purpose.',
        'We do not guarantee that the service will be uninterrupted or error-free.',
        'You acknowledge that any reliance on the materials is at your own risk.'
      ]
    },
    {
      title: 'Limitations',
      content: [
        'In no event shall KineMaster Hub or its suppliers be liable for any damages arising out of the use or inability to use the materials.',
        'This includes but is not limited to damages for loss of data or profit, or due to business interruption.',
        'Because some jurisdictions do not allow limitations on implied warranties, these limitations may not apply to you.',
        'We shall not be liable for any indirect, incidental, special, consequential, or punitive damages.',
        'Our total liability for any claim arising out of or relating to these terms shall not exceed $100.'
      ]
    },
    {
      title: 'Accuracy of Materials',
      content: [
        'The materials appearing on KineMaster Hub could include technical, typographical, or photographic errors.',
        'We do not warrant that any of the materials are accurate, complete, or current.',
        'We may make changes to the materials at any time without notice.',
        'We do not commit to updating the materials regularly.',
        'You should verify any information before relying on it.'
      ]
    },
    {
      title: 'Links',
      content: [
        'We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site.',
        'The inclusion of any link does not imply endorsement by us of the site.',
        'Use of any such linked website is at the user\'s own risk.',
        'We reserve the right to remove any link at any time.',
        'External links are provided for convenience and informational purposes only.'
      ]
    },
    {
      title: 'Modifications',
      content: [
        'We may revise these terms of service at any time without notice.',
        'By using this website, you agree to be bound by the then current version of these terms of service.',
        'Changes will be effective immediately upon posting to the website.',
        'It is your responsibility to review these terms periodically.',
        'Continued use of the service after changes constitutes acceptance of the new terms.'
      ]
    },
    {
      title: 'Governing Law',
      content: [
        'These terms and conditions are governed by and construed in accordance with the laws of the United States.',
        'You irrevocably submit to the exclusive jurisdiction of the courts in that State or location.',
        'Any disputes arising from these terms shall be resolved through binding arbitration.',
        'The prevailing party in any dispute shall be entitled to recover reasonable attorney fees.',
        'If any provision of these terms is found to be invalid, the remaining provisions shall remain in full force and effect.'
      ]
    },
    {
      title: 'User Conduct',
      content: [
        'You agree to use the service only for lawful purposes and in accordance with these terms.',
        'You agree not to use the service to transmit any material that is defamatory, offensive, or otherwise objectionable.',
        'You may not attempt to gain unauthorized access to any portion of the service.',
        'You agree not to interfere with or disrupt the service or servers connected to the service.',
        'Violation of any of these terms may result in immediate termination of your access to the service.'
      ]
    },
    {
      title: 'Intellectual Property',
      content: [
        'The service and its original content, features, and functionality are and will remain the exclusive property of KineMaster Hub.',
        'The service is protected by copyright, trademark, and other laws.',
        'You may not reproduce, distribute, modify, or create derivative works of our content without express written permission.',
        'All trademarks, service marks, and trade names used in the service are the property of their respective owners.',
        'We respect the intellectual property rights of others and expect users to do the same.'
      ]
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
              Terms of Service
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. 
              By using KineMaster Hub, you agree to be bound by these terms.
            </p>
            <p className="text-sm opacity-75 mt-4">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to KineMaster Hub. These Terms of Service ("Terms") govern your use of our 
              website and services. By accessing or using our service, you agree to be bound by 
              these Terms. If you disagree with any part of these terms, then you may not access 
              the service. These Terms apply to all visitors, users, and others who access or use 
              the service.
            </p>
          </Card>
        </motion.div>

        {/* Terms Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * (index + 2) }}
            className="mb-8"
          >
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-br from-primary to-secondary text-white">
            <h2 className="text-2xl font-bold mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-lg opacity-90 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-sm">
              <p>Email: legal@kinemasterhub.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Legal Street, Digital City, DC 12345</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;