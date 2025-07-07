import React from 'react';
import { motion } from 'framer-motion';
import StepCard from '@/components/molecules/StepCard';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const PCGuide = () => {
  const installationSteps = [
    {
      title: 'Download BlueStacks Emulator',
      description: 'Download and install BlueStacks from the official website. This is the most reliable Android emulator for running KineMaster on PC.',
      note: 'Make sure to download from the official BlueStacks website to avoid malware.'
    },
    {
      title: 'Install BlueStacks',
      description: 'Run the BlueStacks installer and follow the setup wizard. The installation process may take 10-15 minutes depending on your system.',
      note: 'Ensure you have at least 4GB of RAM and 5GB of free storage space.'
    },
    {
      title: 'Download KineMaster APK',
      description: 'Download the KineMaster MOD APK file from our secure servers. The file size is approximately 85MB.',
      note: 'Always download from trusted sources to ensure file integrity and security.'
    },
    {
      title: 'Install KineMaster in BlueStacks',
      description: 'Open BlueStacks, drag and drop the KineMaster APK file into the emulator window, or use the APK installer feature.',
      note: 'Installation may take 2-3 minutes. Do not close BlueStacks during this process.'
    },
    {
      title: 'Launch and Enjoy',
      description: 'Once installed, launch KineMaster from your BlueStacks home screen. All premium features are now unlocked and ready to use.',
      note: 'Consider adjusting BlueStacks settings for optimal performance based on your PC specifications.'
    }
  ];

  const systemRequirements = [
    { component: 'Operating System', requirement: 'Windows 10 (64-bit) or later' },
    { component: 'Processor', requirement: 'Intel Core i3 or AMD equivalent' },
    { component: 'Memory', requirement: '4GB RAM minimum (8GB recommended)' },
    { component: 'Storage', requirement: '5GB available space' },
    { component: 'Graphics', requirement: 'DirectX 11 compatible' },
    { component: 'Network', requirement: 'Stable internet connection' }
  ];

  const emulatorOptions = [
    {
      name: 'BlueStacks',
      rating: '4.8/5',
      pros: ['Most stable', 'Best performance', 'Regular updates'],
      cons: ['Larger file size', 'Uses more RAM']
    },
    {
      name: 'NoxPlayer',
      rating: '4.5/5',
      pros: ['Lightweight', 'Good for gaming', 'Customizable'],
      cons: ['Occasional crashes', 'Limited features']
    },
    {
      name: 'MEmu',
      rating: '4.3/5',
      pros: ['Fast startup', 'Multi-instance support', 'Good compatibility'],
      cons: ['Less popular', 'Fewer tutorials available']
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
              KineMaster for PC Guide
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Complete step-by-step guide to install and run KineMaster MOD APK on your Windows PC using Android emulators.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Installation Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Installation Steps
              </h2>
              <div className="space-y-6">
                {installationSteps.map((step, index) => (
                  <StepCard key={index} step={step} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Emulator Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Emulator Comparison
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {emulatorOptions.map((emulator, index) => (
                  <Card key={index} className="h-full">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {emulator.name}
                      </h3>
                      <div className="text-lg font-semibold text-primary">
                        {emulator.rating}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {emulator.pros.map((pro, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <ApperIcon name="Check" size={14} className="text-green-500" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Cons:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {emulator.cons.map((con, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <ApperIcon name="X" size={14} className="text-red-500" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* System Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  System Requirements
                </h3>
                <div className="space-y-3">
                  {systemRequirements.map((req, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <div className="font-semibold text-gray-900">
                        {req.component}
                      </div>
                      <div className="text-sm text-gray-600">
                        {req.requirement}
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
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-primary to-secondary text-white">
                <h3 className="text-xl font-bold mb-4">
                  Quick Download
                </h3>
                <p className="mb-4 opacity-90">
                  Get the latest KineMaster MOD APK for PC installation.
                </p>
                <Button
                  variant="secondary"
                  className="w-full gap-2 bg-white text-primary hover:bg-gray-100"
                >
                  <ApperIcon name="Download" size={16} />
                  Download APK
                </Button>
              </Card>
            </motion.div>

            {/* Performance Tips */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Performance Tips
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <ApperIcon name="Zap" size={16} className="text-yellow-500 mt-0.5" />
                    <p>Allocate at least 2GB RAM to your emulator</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ApperIcon name="HardDrive" size={16} className="text-blue-500 mt-0.5" />
                    <p>Use SSD for better performance</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ApperIcon name="Settings" size={16} className="text-green-500 mt-0.5" />
                    <p>Enable virtualization in BIOS</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ApperIcon name="Monitor" size={16} className="text-purple-500 mt-0.5" />
                    <p>Close unnecessary programs</p>
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

export default PCGuide;