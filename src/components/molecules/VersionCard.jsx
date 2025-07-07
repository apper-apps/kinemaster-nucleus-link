import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import Badge from '@/components/atoms/Badge';
import ApperIcon from '@/components/ApperIcon';

const VersionCard = ({ version }) => {
  const handleDownload = () => {
    toast.info(`Starting download for KineMaster v${version.versionNumber}...`);
    // In a real app, this would initiate the download
    setTimeout(() => {
      toast.success(`Download started for v${version.versionNumber}!`);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Version {version.versionNumber}
            </h3>
            <p className="text-sm text-gray-600">
              Released {format(new Date(version.releaseDate), 'MMM dd, yyyy')}
            </p>
          </div>
          <Badge variant="secondary" className="text-sm">
            {version.fileSize}
          </Badge>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <ApperIcon name="Download" size={16} />
            <span>{version.downloads.toLocaleString()} downloads</span>
          </div>
          <p className="text-gray-700 line-clamp-3">{version.changelog}</p>
        </div>
        
        <div className="mt-auto">
          <Button 
            onClick={handleDownload}
            className="w-full gap-2"
            variant="primary"
          >
            <ApperIcon name="Download" size={16} />
            Download Now
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default VersionCard;