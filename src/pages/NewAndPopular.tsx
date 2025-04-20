
import React from 'react';
import NetflixNavbar from "@/components/NetflixNavbar";
import Footer from "@/components/Footer";
import ContentRow from "@/components/ContentRow";
import { trendingContent, popularContent } from "@/lib/mockData";

const NewAndPopular = () => {
  return (
    <div className="relative bg-netflix-black min-h-screen">
      <NetflixNavbar />
      
      <div className="pt-24 pb-12 px-4 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">New & Popular</h1>
        
        <div className="space-y-12">
          <ContentRow title="New on Netflix" contents={trendingContent.slice(0, 4)} />
          <ContentRow title="Popular This Week" contents={popularContent} />
          <ContentRow title="Coming Soon" contents={trendingContent.slice(3, 7)} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewAndPopular;
