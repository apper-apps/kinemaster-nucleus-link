import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/atoms/Card';
import ApperIcon from '@/components/ApperIcon';

const StepCard = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
          {index + 1}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {step.title}
          </h3>
          <p className="text-gray-600 mb-3">
            {step.description}
          </p>
          {step.note && (
            <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
              <ApperIcon name="Info" size={16} className="text-blue-600 mt-0.5" />
              <p className="text-sm text-blue-800">
                {step.note}
              </p>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default StepCard;