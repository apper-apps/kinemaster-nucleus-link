import React from 'react';
import HeroSection from '@/components/organisms/HeroSection';
import FeaturesSection from '@/components/organisms/FeaturesSection';
import BlogSection from '@/components/organisms/BlogSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <BlogSection />
    </div>
  );
};

export default Home;