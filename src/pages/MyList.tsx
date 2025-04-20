
import React from 'react';
import NetflixNavbar from "@/components/NetflixNavbar";
import Footer from "@/components/Footer";
import ContentRow from "@/components/ContentRow";
import { trendingContent, popularContent } from "@/lib/mockData";

const MyList = () => {
  return (
    <div className="relative bg-netflix-black min-h-screen">
      <NetflixNavbar />
      
      <div className="pt-24 pb-12 px-4 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">My List</h1>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...trendingContent.slice(0, 3), ...popularContent.slice(0, 3)].map((content) => (
              <div key={content.id} className="thumbnail-hover">
                <img 
                  src={content.image} 
                  alt={content.title}
                  className="rounded shadow w-full h-auto object-cover"
                />
                <p className="mt-2 text-sm truncate">{content.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MyList;
