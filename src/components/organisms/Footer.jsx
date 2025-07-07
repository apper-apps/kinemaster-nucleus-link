import React from 'react';
import { Link } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { path: '/', label: 'Home' },
      { path: '/pc-guide', label: 'PC Guide' },
      { path: '/ios-guide', label: 'iOS Guide' },
      { path: '/old-versions', label: 'Old Versions' }
    ],
    'Resources': [
      { path: '/blog', label: 'Blog' },
      { path: '/faq', label: 'FAQ' },
      { path: '/about', label: 'About Us' },
      { path: '/contact', label: 'Contact' }
    ],
    'Legal': [
      { path: '/privacy', label: 'Privacy Policy' },
      { path: '/terms', label: 'Terms of Service' }
    ]
  };

  const socialLinks = [
    { icon: 'Facebook', href: '#', label: 'Facebook' },
    { icon: 'Twitter', href: '#', label: 'Twitter' },
    { icon: 'Youtube', href: '#', label: 'YouTube' },
    { icon: 'Instagram', href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <ApperIcon name="Video" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">KineMaster Hub</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Your ultimate resource for KineMaster MOD APK downloads, guides, and video editing tips.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <ApperIcon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} KineMaster Hub. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm text-gray-400">
            <ApperIcon name="Shield" size={16} />
            <span>Secure Downloads</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;