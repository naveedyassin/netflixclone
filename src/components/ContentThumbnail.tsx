
import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import MovieDetailCard from './MovieDetailCard';

interface Content {
  id: number;
  title: string;
  image: string;
  description?: string;
  year?: number;
  maturityRating?: string;
  duration?: string;
  genres?: string[];
  match?: number;
}

interface ContentThumbnailProps {
  content: Content;
}

const ContentThumbnail = ({ content }: ContentThumbnailProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleOpenDetail = () => {
    setIsDetailOpen(true);
  };

  return (
    <div className="relative">
      <div 
        className="relative h-28 min-w-[180px] md:h-36 md:min-w-[260px] cursor-pointer overflow-hidden rounded-sm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleOpenDetail}
      >
        <img 
          src={content.image}
          alt={content.title}
          className={`w-full object-cover transition duration-300 ${isHovered ? 'scale-110' : ''}`}
        />
        
        {isHovered && (
          <div className="absolute inset-0 z-10 bg-netflix-darkgray/70 animate-fade-in shadow-xl">
            <div className="absolute inset-0 flex flex-col p-3 justify-between">
              <h3 className="font-semibold line-clamp-2">{content.title}</h3>
              
              <div>
                <div className="flex space-x-2">
                  <button className="flex items-center justify-center rounded-full bg-white p-1.5">
                    <Play className="h-4 w-4 text-black" fill="black" />
                  </button>
                  <button className="flex items-center justify-center rounded-full border border-white p-1.5">
                    <Plus className="h-4 w-4" />
                  </button>
                  <button className="flex items-center justify-center rounded-full border border-white p-1.5">
                    <ThumbsUp className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDetail();
                    }}
                    className="flex items-center justify-center ml-auto rounded-full border border-white p-1.5"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="mt-2 flex items-center text-xs">
                  {content.match && <span className="text-green-500 font-bold mr-1">{content.match}% Match</span>}
                  {content.maturityRating && <span className="border border-white/40 px-1">{content.maturityRating}</span>}
                  {content.duration && <span className="ml-1">{content.duration}</span>}
                </div>
                
                <div className="mt-1 flex text-xs">
                  {content.genres && content.genres.length > 0 && (
                    <div className="flex flex-wrap">
                      {content.genres.slice(0, 3).map((genre, index) => (
                        <React.Fragment key={genre}>
                          <span>{genre}</span>
                          {index < Math.min(content.genres!.length, 3) - 1 && (
                            <span className="mx-1">•</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {isDetailOpen && (
        <MovieDetailCard 
          content={content} 
          isOpen={isDetailOpen} 
          onClose={() => setIsDetailOpen(false)} 
        />
      )}
    </div>
  );
};

export default ContentThumbnail;
