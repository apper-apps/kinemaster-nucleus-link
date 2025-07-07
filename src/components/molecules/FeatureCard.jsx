import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/atoms/Card';
import ApperIcon from '@/components/ApperIcon';

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="text-center h-full">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <ApperIcon name={feature.icon} size={28} className="text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {feature.title}
        </h3>
        <p className="text-gray-600">
          {feature.description}
        </p>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;