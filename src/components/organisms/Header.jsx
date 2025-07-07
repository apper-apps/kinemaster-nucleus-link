import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NavigationLink from '@/components/molecules/NavigationLink';
import SearchBar from '@/components/molecules/SearchBar';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/pc-guide', label: 'PC Guide' },
    { path: '/ios-guide', label: 'iOS Guide' },
    { path: '/old-versions', label: 'Old Versions' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <ApperIcon name="Video" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">KineMaster Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navigationItems.map((item) => (
              <NavigationLink key={item.path} to={item.path}>
                {item.label}
              </NavigationLink>
            ))}
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:block flex-1 max-w-sm ml-8">
            <SearchBar placeholder="Search guides, versions..." />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <ApperIcon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <SearchBar placeholder="Search guides, versions..." />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <NavigationLink 
                  key={item.path} 
                  to={item.path}
                  className="block w-full text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavigationLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;