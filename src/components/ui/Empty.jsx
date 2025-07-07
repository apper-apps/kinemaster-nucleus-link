import React from 'react';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';

const Empty = ({ 
  title = "No items found", 
  description = "There are no items to display at the moment.", 
  actionLabel = "Get Started",
  onAction,
  icon = "FileText"
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
        <ApperIcon name={icon} size={32} className="text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-8 max-w-md">{description}</p>
      {onAction && (
        <Button onClick={onAction} className="gap-2">
          <ApperIcon name="Plus" size={16} />
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default Empty;