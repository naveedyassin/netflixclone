
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Plus, ThumbsUp, X, Volume2, VolumeX } from 'lucide-react';

interface MovieContent {
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

interface MovieDetailCardProps {
  content: MovieContent;
  isOpen: boolean;
  onClose: () => void;
}

const MovieDetailCard = ({ content, isOpen, onClose }: MovieDetailCardProps) => {
  const [muted, setMuted] = React.useState(true);
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl p-0 border-none bg-netflix-black text-white overflow-hidden">
        {/* Hero Image Section */}
        <div className="relative h-[300px] md:h-[400px] w-full">
          <img 
            src={content.image} 
            alt={content.title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-netflix-black/50 to-netflix-black" />
          
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 z-10 rounded-full bg-netflix-black/80 p-1"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{content.title}</h2>
            
            <div className="flex flex-wrap gap-2 md:gap-4">
              <button className="flex items-center justify-center rounded bg-white px-4 md:px-6 py-1.5 md:py-2 text-black font-semibold">
                <Play className="h-5 w-5 mr-2" fill="black" />
                Play
              </button>
              
              <button className="flex items-center justify-center rounded-full bg-netflix-darkgray/40 p-2">
                <Plus className="h-5 w-5" />
              </button>
              
              <button className="flex items-center justify-center rounded-full bg-netflix-darkgray/40 p-2">
                <ThumbsUp className="h-5 w-5" />
              </button>
              
              <button 
                className="flex items-center justify-center rounded-full bg-netflix-darkgray/40 p-2 ml-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  setMuted(!muted);
                }}
              >
                {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Details Section */}
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
            {content.match && (
              <span className="text-green-500 font-bold">{content.match}% Match</span>
            )}
            {content.year && (
              <span>{content.year}</span>
            )}
            {content.maturityRating && (
              <span className="border border-white/40 px-1">{content.maturityRating}</span>
            )}
            {content.duration && (
              <span>{content.duration}</span>
            )}
          </div>
          
          <p className="text-sm md:text-base mb-4">
            {content.description || "No description available."}
          </p>
          
          {content.genres && content.genres.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-2">
              <span className="text-sm text-gray-400">Genres:</span>
              {content.genres.map((genre, index) => (
                <div key={genre} className="flex items-center">
                  <span className="text-sm">{genre}</span>
                  {index < content.genres!.length - 1 && (
                    <span className="text-gray-500 mx-1">•</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MovieDetailCard;
