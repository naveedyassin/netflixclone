
import React from 'react';
import NetflixNavbar from "@/components/NetflixNavbar";
import Footer from "@/components/Footer";
import ContentRow from "@/components/ContentRow";
import { popularContent, originals } from "@/lib/mockData";

const TvShows = () => {
  return (
    <div className="relative bg-netflix-black min-h-screen">
      <NetflixNavbar />
      
      <div className="pt-24 pb-12 px-4 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">TV Shows</h1>
        
        <div className="space-y-12">
          <ContentRow title="Popular TV Shows" contents={popularContent} />
          <ContentRow title="Netflix Originals" contents={originals} />
          <ContentRow title="Trending Shows" contents={popularContent.slice(0, 4)} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TvShows;
