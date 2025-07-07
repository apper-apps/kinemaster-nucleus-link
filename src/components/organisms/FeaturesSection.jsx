import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from '@/components/molecules/FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'Video',
      title: 'Professional Editing',
      description: 'Multi-layer video editing with precise controls and professional-grade tools for stunning results.'
    },
    {
      icon: 'Palette',
      title: 'Chroma Key',
      description: 'Advanced green screen technology for seamless background replacement and creative effects.'
    },
    {
      icon: 'Music',
      title: 'Audio Mixing',
      description: 'Professional audio tools with multi-track support, effects, and perfect synchronization.'
    },
    {
      icon: 'Sparkles',
      title: 'Visual Effects',
      description: 'Hundreds of transitions, filters, and animations to make your videos stand out.'
    },
    {
      icon: 'Type',
      title: 'Text & Titles',
      description: 'Beautiful typography with animations, custom fonts, and professional title sequences.'
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Optimized',
      description: 'Designed for mobile devices with intuitive touch controls and optimized performance.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for
              <span className="gradient-text"> Creative Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the complete suite of professional video editing tools that make KineMaster 
              the preferred choice for content creators worldwide.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;