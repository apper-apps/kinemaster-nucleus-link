import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import blogService from '@/services/api/blogService';
import versionService from '@/services/api/versionService';
import BlogCard from '@/components/molecules/BlogCard';
import VersionCard from '@/components/molecules/VersionCard';
import SearchBar from '@/components/molecules/SearchBar';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import Empty from '@/components/ui/Empty';
import ApperIcon from '@/components/ApperIcon';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState({ posts: [], versions: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  const performSearch = async (searchQuery) => {
    try {
      setLoading(true);
      setError(null);

      // Search in blog posts
      const allPosts = await blogService.getAll();
      const matchingPosts = allPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );

      // Search in versions
      const allVersions = await versionService.getAll();
      const matchingVersions = allVersions.filter(version =>
        version.versionNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        version.changelog.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setResults({
        posts: matchingPosts,
        versions: matchingVersions
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const totalResults = results.posts.length + results.versions.length;

  const tabs = [
    { id: 'all', label: 'All', count: totalResults },
    { id: 'posts', label: 'Blog Posts', count: results.posts.length },
    { id: 'versions', label: 'Versions', count: results.versions.length }
  ];

  const filteredResults = () => {
    switch (activeTab) {
      case 'posts':
        return { posts: results.posts, versions: [] };
      case 'versions':
        return { posts: [], versions: results.versions };
      default:
        return results;
    }
  };

  const currentResults = filteredResults();

  if (loading) return <Loading type="card" />;
  if (error) return <Error message={error} onRetry={() => performSearch(query)} />;

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
              Search Results
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              {query ? `Results for "${query}"` : 'Search our content'}
            </p>
            <div className="max-w-md mx-auto">
              <SearchBar placeholder="Search guides, versions, and more..." />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {query ? (
          <>
            {/* Search Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <ApperIcon name="Search" size={20} />
                <span>
                  Found {totalResults} result{totalResults !== 1 ? 's' : ''} for "{query}"
                </span>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Results */}
            {totalResults === 0 ? (
              <Empty
                title="No results found"
                description={`We couldn't find any content matching "${query}". Try different keywords or browse our categories.`}
                icon="Search"
              />
            ) : (
              <div className="space-y-12">
                {/* Blog Posts */}
                {currentResults.posts.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Blog Posts ({currentResults.posts.length})
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {currentResults.posts.map((post) => (
                        <BlogCard key={post.Id} post={post} />
                      ))}
                    </div>
                  </motion.section>
                )}

                {/* Versions */}
                {currentResults.versions.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Versions ({currentResults.versions.length})
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {currentResults.versions.map((version) => (
                        <VersionCard key={version.Id} version={version} />
                      ))}
                    </div>
                  </motion.section>
                )}
              </div>
            )}
          </>
        ) : (
          <Empty
            title="Start your search"
            description="Enter keywords in the search box above to find blog posts, versions, and guides."
            icon="Search"
          />
        )}
      </div>
    </div>
  );
};

export default Search;