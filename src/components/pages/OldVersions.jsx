import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import versionService from '@/services/api/versionService';
import VersionCard from '@/components/molecules/VersionCard';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import Empty from '@/components/ui/Empty';
import ApperIcon from '@/components/ApperIcon';

const OldVersions = () => {
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    loadVersions();
  }, []);

  const loadVersions = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await versionService.getAll();
      setVersions(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const sortedVersions = [...versions].sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case 'version':
        aValue = a.versionNumber;
        bValue = b.versionNumber;
        break;
      case 'downloads':
        aValue = a.downloads;
        bValue = b.downloads;
        break;
      case 'date':
      default:
        aValue = new Date(a.releaseDate);
        bValue = new Date(b.releaseDate);
        break;
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  if (loading) return <Loading type="card" />;
  if (error) return <Error message={error} onRetry={loadVersions} />;

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
              KineMaster Version Archive
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Browse and download previous versions of KineMaster MOD APK with complete changelogs and compatibility information.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Sort Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <button
              onClick={() => handleSort('date')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                sortBy === 'date' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Date {sortBy === 'date' && (
                <ApperIcon 
                  name={sortOrder === 'asc' ? 'ChevronUp' : 'ChevronDown'} 
                  size={14} 
                  className="inline ml-1" 
                />
              )}
            </button>
            <button
              onClick={() => handleSort('version')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                sortBy === 'version' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Version {sortBy === 'version' && (
                <ApperIcon 
                  name={sortOrder === 'asc' ? 'ChevronUp' : 'ChevronDown'} 
                  size={14} 
                  className="inline ml-1" 
                />
              )}
            </button>
            <button
              onClick={() => handleSort('downloads')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                sortBy === 'downloads' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Downloads {sortBy === 'downloads' && (
                <ApperIcon 
                  name={sortOrder === 'asc' ? 'ChevronUp' : 'ChevronDown'} 
                  size={14} 
                  className="inline ml-1" 
                />
              )}
            </button>
          </div>
        </motion.div>

        {/* Version Grid */}
        {sortedVersions.length === 0 ? (
          <Empty
            title="No versions found"
            description="We're working on building our version archive. Check back soon!"
            icon="Archive"
          />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sortedVersions.map((version, index) => (
              <VersionCard key={version.Id} version={version} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OldVersions;