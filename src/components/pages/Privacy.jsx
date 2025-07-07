import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/atoms/Card';

const Privacy = () => {
  const lastUpdated = 'December 15, 2024';

  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'When you visit our website, we may collect certain information about your device and browsing activity, including your IP address, browser type, operating system, and the pages you visit.',
        'If you contact us through our contact form, we collect the information you provide, such as your name, email address, and message content.',
        'We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.',
        'We do not collect sensitive personal information unless you voluntarily provide it to us.'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'We use the information we collect to provide and improve our services, including responding to your inquiries and providing customer support.',
        'We may use your information to send you updates about our services, new features, or important announcements.',
        'We analyze website usage data to improve our content and user experience.',
        'We may use your information to prevent fraud, spam, or other harmful activities.',
        'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.'
      ]
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not share your personal information with third parties except as described in this privacy policy.',
        'We may share information with service providers who assist us in operating our website and providing our services.',
        'We may disclose information if required by law or in response to valid legal requests.',
        'In the event of a business transfer, your information may be transferred to the new owner.',
        'We may share aggregated, non-personally identifiable information for analytics and marketing purposes.'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        'We use industry-standard encryption protocols to protect data transmission.',
        'We regularly review and update our security practices to ensure the protection of your information.',
        'However, no method of transmission over the internet or electronic storage is 100% secure.',
        'We cannot guarantee the absolute security of your information.'
      ]
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'We use cookies to enhance your browsing experience and analyze website traffic.',
        'Cookies are small text files stored on your device that help us remember your preferences and improve our services.',
        'You can control cookie settings through your browser, but disabling cookies may affect website functionality.',
        'We may use third-party analytics services that collect information about your use of our website.',
        'We do not use cookies to collect personally identifiable information without your consent.'
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'You have the right to access, update, or delete your personal information.',
        'You can unsubscribe from our communications at any time by following the unsubscribe link in our emails.',
        'You can request a copy of the personal information we have about you.',
        'You can request that we correct any inaccurate information we have about you.',
        'You can request that we delete your personal information, subject to certain legal requirements.'
      ]
    },
    {
      title: 'Third-Party Links',
      content: [
        'Our website may contain links to third-party websites that are not operated by us.',
        'We are not responsible for the privacy practices of third-party websites.',
        'We encourage you to review the privacy policies of any third-party websites you visit.',
        'This privacy policy applies only to our website and services.',
        'We do not control the content or privacy practices of external websites.'
      ]
    },
    {
      title: 'Children\'s Privacy',
      content: [
        'Our services are not intended for children under the age of 13.',
        'We do not knowingly collect personal information from children under 13.',
        'If we become aware that we have collected personal information from a child under 13, we will delete it immediately.',
        'If you are a parent or guardian and believe your child has provided us with personal information, please contact us.',
        'We encourage parents to monitor their children\'s online activities.'
      ]
    },
    {
      title: 'Changes to This Policy',
      content: [
        'We may update this privacy policy from time to time to reflect changes in our practices or applicable laws.',
        'We will notify you of any material changes by posting the updated policy on our website.',
        'The "Last Updated" date at the top of this policy indicates when it was last revised.',
        'Your continued use of our services after any changes constitutes acceptance of the updated policy.',
        'We encourage you to review this policy periodically to stay informed about our privacy practices.'
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
              Privacy Policy
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your information when you use our services.
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
              At KineMaster Hub, we are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how we 
              collect, use, disclose, and safeguard your information when you visit our website 
              or use our services. Please read this privacy policy carefully to understand our 
              practices regarding your personal information.
            </p>
          </Card>
        </motion.div>

        {/* Policy Sections */}
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
              Contact Us
            </h2>
            <p className="text-lg opacity-90 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, 
              please contact us:
            </p>
            <div className="space-y-2 text-sm">
              <p>Email: privacy@kinemasterhub.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Privacy Street, Digital City, DC 12345</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;