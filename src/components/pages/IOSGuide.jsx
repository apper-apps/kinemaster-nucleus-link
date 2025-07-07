import React from 'react';
import { motion } from 'framer-motion';
import StepCard from '@/components/molecules/StepCard';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const IOSGuide = () => {
  const installationMethods = [
    {
      title: 'Method 1: Using AltStore',
      steps: [
        {
          title: 'Install AltStore on PC/Mac',
          description: 'Download AltStore from the official website and install it on your computer.',
          note: 'AltStore is a legitimate alternative app store for iOS devices.'
        },
        {
          title: 'Connect iPhone to Computer',
          description: 'Connect your iPhone to your computer via USB cable and trust the computer.',
          note: 'Make sure iTunes is installed on your computer for proper device recognition.'
        },
        {
          title: 'Install AltStore on iPhone',
          description: 'Use the AltStore desktop app to install AltStore on your iPhone.',
          note: 'You may need to enter your Apple ID credentials for the installation.'
        },
        {
          title: 'Sideload KineMaster IPA',
          description: 'Download the KineMaster IPA file and install it through AltStore on your iPhone.',
          note: 'The app will need to be refreshed every 7 days unless you have a developer account.'
        }
      ]
    },
    {
      title: 'Method 2: Using Sideloadly',
      steps: [
        {
          title: 'Download Sideloadly',
          description: 'Download and install Sideloadly on your Windows PC or Mac.',
          note: 'Sideloadly is a popular tool for sideloading iOS apps.'
        },
        {
          title: 'Prepare KineMaster IPA',
          description: 'Download the KineMaster IPA file from our secure servers.',
          note: 'Make sure to download from trusted sources only.'
        },
        {
          title: 'Connect and Install',
          description: 'Connect your iPhone, select the IPA file in Sideloadly, and start the installation.',
          note: 'The process may take 5-10 minutes depending on your internet speed.'
        },
        {
          title: 'Trust the App',
          description: 'Go to Settings > General > Profiles & Device Management and trust the app.',
          note: 'This step is crucial for the app to launch properly.'
        }
      ]
    }
  ];

  const compatibilityList = [
    { device: 'iPhone 15 Series', status: 'Compatible', ios: 'iOS 17+' },
    { device: 'iPhone 14 Series', status: 'Compatible', ios: 'iOS 16+' },
    { device: 'iPhone 13 Series', status: 'Compatible', ios: 'iOS 15+' },
    { device: 'iPhone 12 Series', status: 'Compatible', ios: 'iOS 14+' },
    { device: 'iPhone 11 Series', status: 'Compatible', ios: 'iOS 13+' },
    { device: 'iPhone XS/XR Series', status: 'Compatible', ios: 'iOS 12+' },
    { device: 'iPhone X', status: 'Compatible', ios: 'iOS 11+' },
    { device: 'iPhone 8/8 Plus', status: 'Compatible', ios: 'iOS 11+' },
    { device: 'iPhone 7/7 Plus', status: 'Limited', ios: 'iOS 10+' },
    { device: 'iPhone 6s/6s Plus', status: 'Limited', ios: 'iOS 9+' }
  ];

  const safetyGuidelines = [
    {
      title: 'Use Official Sources',
      description: 'Always download IPA files from trusted and verified sources to avoid malware.',
      icon: 'Shield'
    },
    {
      title: 'Backup Your Device',
      description: 'Create a full backup of your iPhone before attempting any sideloading.',
      icon: 'HardDrive'
    },
    {
      title: 'Check Compatibility',
      description: 'Ensure your device and iOS version are compatible with the app.',
      icon: 'CheckCircle'
    },
    {
      title: 'Use Strong Passwords',
      description: 'Always use strong, unique passwords for your Apple ID and signing certificates.',
      icon: 'Lock'
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
              KineMaster for iOS Guide
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Learn how to install KineMaster MOD APK on your iPhone or iPad using safe and reliable methods.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Installation Methods */}
            {installationMethods.map((method, methodIndex) => (
              <motion.div
                key={methodIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: methodIndex * 0.1 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {method.title}
                </h2>
                <div className="space-y-6">
                  {method.steps.map((step, stepIndex) => (
                    <StepCard 
                      key={stepIndex} 
                      step={step} 
                      index={stepIndex} 
                    />
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Safety Guidelines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Safety Guidelines
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {safetyGuidelines.map((guideline, index) => (
                  <Card key={index} className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <ApperIcon name={guideline.icon} size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {guideline.title}
                        </h3>
                        <p className="text-gray-600">
                          {guideline.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Compatibility List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Device Compatibility
                </h3>
                <div className="space-y-3">
                  {compatibilityList.map((device, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">
                          {device.device}
                        </div>
                        <div className="text-xs text-gray-600">
                          {device.ios}
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${
                        device.status === 'Compatible' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {device.status}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Quick Download */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-primary to-secondary text-white">
                <h3 className="text-xl font-bold mb-4">
                  Download IPA File
                </h3>
                <p className="mb-4 opacity-90">
                  Get the latest KineMaster IPA file for iOS installation.
                </p>
                <Button
                  variant="secondary"
                  className="w-full gap-2 bg-white text-primary hover:bg-gray-100"
                >
                  <ApperIcon name="Download" size={16} />
                  Download IPA
                </Button>
              </Card>
            </motion.div>

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-yellow-50 border-yellow-200">
                <div className="flex items-start gap-3">
                  <ApperIcon name="AlertTriangle" size={20} className="text-yellow-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">
                      Important Notice
                    </h3>
                    <p className="text-sm text-yellow-700">
                      Sideloading apps requires technical knowledge and may void your warranty. 
                      Always backup your device and proceed at your own risk.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOSGuide;