import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturedInstitutes from '@/components/FeaturedInstitutes';
import WhyChooseUs from '@/components/WhyChooseUs';
import StudentStories from '@/components/StudentStories';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedInstitutes />
      <WhyChooseUs />
      <StudentStories />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;