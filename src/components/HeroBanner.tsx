
import { Play, Info } from "lucide-react";

interface HeroBannerProps {
  title: string;
  overview: string;
  backdropUrl: string;
}

const HeroBanner = ({ title, overview, backdropUrl }: HeroBannerProps) => {
  return (
    <div className="relative h-[80vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center h-full w-full" 
          style={{ 
            backgroundImage: `url(${backdropUrl})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-netflix-black/80 via-netflix-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-netflix-black/20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-20 px-4 md:px-16">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl max-w-2xl">{title}</h1>
        <p className="text-shadow-md text-xs md:text-sm mt-4 max-w-lg md:max-w-2xl line-clamp-3 md:line-clamp-4">
          {overview}
        </p>
        
        <div className="flex space-x-3 mt-6">
          <button className="hero-button bg-white text-black hover:bg-white/80">
            <Play className="h-5 w-5" fill="black" />
            <span>Play</span>
          </button>

          <button className="hero-button bg-gray-600/70 hover:bg-gray-500/50">
            <Info className="h-5 w-5" />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
