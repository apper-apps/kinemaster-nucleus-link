import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import Button from '@/components/atoms/Button';
import Badge from '@/components/atoms/Badge';
import ApperIcon from '@/components/ApperIcon';

const HeroSection = () => {
  const handleDownload = () => {
    toast.info("Starting download for the latest KineMaster version...");
    setTimeout(() => {
      toast.success("Download started! Check your downloads folder.");
    }, 1000);
  };

  const stats = [
    { label: 'Downloads', value: '2.5M+' },
    { label: 'User Rating', value: '4.8/5' },
    { label: 'Latest Version', value: 'v5.2.7' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 text-white border-white/30">
              <ApperIcon name="Zap" size={16} className="mr-2" />
              Latest Version Available
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              KineMaster MOD APK
              <span className="block gradient-text bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Pro Video Editor
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Download the complete KineMaster MOD APK with all premium features unlocked. 
              Professional video editing tools for creators worldwide.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 gap-2 animate-bounce-gentle"
            >
              <ApperIcon name="Download" size={20} />
              Download Now (Free)
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10 gap-2"
            >
              <ApperIcon name="Play" size={20} />
              Watch Demo
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;