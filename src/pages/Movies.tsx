
import React from 'react';
import NetflixNavbar from "@/components/NetflixNavbar";
import Footer from "@/components/Footer";
import ContentRow from "@/components/ContentRow";
import { trendingContent, originals } from "@/lib/mockData";

const Movies = () => {
  return (
    <div className="relative bg-netflix-black min-h-screen">
      <NetflixNavbar />
      
      <div className="pt-24 pb-12 px-4 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Movies</h1>
        
        <div className="space-y-12">
          <ContentRow title="Popular Movies" contents={trendingContent} />
          <ContentRow title="Netflix Original Films" contents={originals} />
          <ContentRow title="Action & Adventure" contents={trendingContent.slice(2, 6)} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Movies;
