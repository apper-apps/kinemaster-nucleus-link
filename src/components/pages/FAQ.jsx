import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '@/components/atoms/Card';
import ApperIcon from '@/components/ApperIcon';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqCategories = [
    {
      title: 'General Questions',
      items: [
        {
          question: 'What is KineMaster MOD APK?',
          answer: 'KineMaster MOD APK is a modified version of the popular KineMaster video editing app that provides all premium features for free, including unlimited layers, no watermark, and access to all editing tools.'
        },
        {
          question: 'Is KineMaster MOD APK safe to use?',
          answer: 'Yes, when downloaded from our trusted sources, KineMaster MOD APK is safe to use. We thoroughly scan all files for malware and viruses before making them available for download.'
        },
        {
          question: 'What\'s the difference between KineMaster and KineMaster MOD APK?',
          answer: 'The main differences are that MOD APK version removes watermarks, unlocks all premium features, provides unlimited layers, and removes time limitations that exist in the free version of KineMaster.'
        },
        {
          question: 'Do I need to root my Android device?',
          answer: 'No, you don\'t need to root your Android device to install KineMaster MOD APK. The app can be installed as a regular APK file without requiring root access.'
        }
      ]
    },
    {
      title: 'Installation & Setup',
      items: [
        {
          question: 'How do I install KineMaster MOD APK on Android?',
          answer: 'Download the APK file from our website, enable "Unknown Sources" in your device settings, locate the downloaded file, and tap to install. The process takes just a few minutes.'
        },
        {
          question: 'Can I install KineMaster MOD APK on iPhone?',
          answer: 'Yes, but it requires sideloading using tools like AltStore or Sideloadly. Check our detailed iOS installation guide for step-by-step instructions.'
        },
        {
          question: 'Why won\'t the app install on my device?',
          answer: 'Common issues include insufficient storage space, incompatible device version, or security settings blocking installation. Ensure you have enough space and "Unknown Sources" enabled.'
        },
        {
          question: 'Do I need to uninstall the original KineMaster app?',
          answer: 'It\'s recommended to uninstall the original KineMaster app before installing the MOD version to avoid conflicts and ensure proper functionality.'
        }
      ]
    },
    {
      title: 'Features & Usage',
      items: [
        {
          question: 'What features are unlocked in KineMaster MOD APK?',
          answer: 'All premium features including unlimited layers, no watermark, all transitions and effects, chroma key, audio filters, and access to the full asset store.'
        },
        {
          question: 'Can I export videos without watermark?',
          answer: 'Yes, one of the main benefits of KineMaster MOD APK is the ability to export videos without any watermark, giving you professional-quality output.'
        },
        {
          question: 'Is there a limit on video length or quality?',
          answer: 'No, KineMaster MOD APK removes all limitations on video length and allows you to export in the highest quality supported by your device.'
        },
        {
          question: 'Can I use custom fonts and assets?',
          answer: 'Yes, you can import custom fonts, images, audio files, and other assets into your projects. The MOD version also provides access to premium asset stores.'
        }
      ]
    },
    {
      title: 'Technical Support',
      items: [
        {
          question: 'The app crashes on startup. What should I do?',
          answer: 'Try restarting your device, clearing the app cache, or reinstalling the app. If problems persist, ensure your device meets the minimum system requirements.'
        },
        {
          question: 'How do I update KineMaster MOD APK?',
          answer: 'Download the latest version from our website and install it over the existing version. Your projects and settings will be preserved during the update.'
        },
        {
          question: 'Can I sync my projects across devices?',
          answer: 'KineMaster MOD APK doesn\'t support cloud sync, but you can manually export and import projects between devices using the export/import feature.'
        },
        {
          question: 'What should I do if I encounter bugs?',
          answer: 'Report any bugs to our support team with detailed information about your device, app version, and the specific issue. We regularly release updates to fix reported issues.'
        }
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Find answers to common questions about KineMaster MOD APK installation, 
              features, and troubleshooting.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {faqCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {category.title}
            </h2>
            <div className="space-y-4">
              {category.items.map((item, itemIndex) => {
                const globalIndex = `${categoryIndex}-${itemIndex}`;
                const isOpen = openItems[globalIndex];
                
                return (
                  <Card key={itemIndex} className="overflow-hidden">
                    <button
                      onClick={() => toggleItem(globalIndex)}
                      className="w-full flex items-center justify-between p-2 text-left hover:bg-gray-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <ApperIcon
                          name={isOpen ? "ChevronUp" : "ChevronDown"}
                          size={20}
                          className="text-gray-500"
                        />
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-2 pb-4">
                            <p className="text-gray-700 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-primary to-secondary text-white">
            <h2 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Can't find what you're looking for? Our support team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <ApperIcon name="MessageCircle" size={20} />
                Contact Support
              </a>
              <a
                href="/blog"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300"
              >
                <ApperIcon name="BookOpen" size={20} />
                Browse Tutorials
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;