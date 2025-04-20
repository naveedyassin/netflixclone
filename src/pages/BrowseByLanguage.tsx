
import React, { useState } from 'react';
import NetflixNavbar from "@/components/NetflixNavbar";
import Footer from "@/components/Footer";
import ContentRow from "@/components/ContentRow";
import { trendingContent, popularContent, documentaries } from "@/lib/mockData";

const BrowseByLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All Languages");

  const languages = ["All Languages", "English", "Spanish", "Korean", "Japanese", "French"];

  return (
    <div className="relative bg-netflix-black min-h-screen">
      <NetflixNavbar />
      
      <div className="pt-24 pb-12 px-4 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse by Languages</h1>
        
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-4 pb-2">
            {languages.map((language) => (
              <button
                key={language}
                onClick={() => setSelectedLanguage(language)}
                className={`px-4 py-2 whitespace-nowrap rounded-full ${
                  selectedLanguage === language
                    ? "bg-netflix-red text-white"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-12">
          <ContentRow title="Popular in Korean" contents={documentaries.slice(0, 4)} />
          <ContentRow title="Spanish Dramas" contents={popularContent.slice(1, 5)} />
          <ContentRow title="Japanese Anime" contents={trendingContent.slice(2, 6)} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BrowseByLanguage;
