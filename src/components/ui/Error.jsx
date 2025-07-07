import React from 'react';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';

const Error = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-error to-red-600 rounded-full flex items-center justify-center mb-6">
        <ApperIcon name="AlertCircle" size={32} className="text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h3>
      <p className="text-gray-600 mb-8 max-w-md">
        {message || "We encountered an error while loading the content. Please try again."}
      </p>
      {onRetry && (
        <Button onClick={onRetry} className="gap-2">
          <ApperIcon name="RefreshCw" size={16} />
          Try Again
        </Button>
      )}
    </div>
  );
};

export default Error;