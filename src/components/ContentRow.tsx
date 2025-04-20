
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import ContentThumbnail from './ContentThumbnail';

interface Content {
  id: number;
  title: string;
  image: string;
}

interface ContentRowProps {
  title: string;
  contents: Content[];
}

const ContentRow = ({ title, contents }: ContentRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleScroll = (direction: 'left' | 'right') => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75
        : scrollLeft + clientWidth * 0.75;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      
      // Show/hide left arrow based on scroll position
      setTimeout(() => {
        if (rowRef.current) {
          setShowLeftArrow(rowRef.current.scrollLeft > 0);
        }
      }, 300);
    }
  };

  return (
    <div className="space-y-1 py-4">
      <h2 className="text-sm font-semibold md:text-lg pl-4 md:pl-16">{title}</h2>
      
      <div className="group relative">
        <ChevronLeft
          className={cn(
            'absolute top-0 bottom-0 left-1 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition duration-200 hover:scale-125 group-hover:opacity-100',
            !showLeftArrow && 'hidden'
          )}
          onClick={() => handleScroll('left')}
        />
        
        <div 
          ref={rowRef}
          className="flex items-center space-x-1 overflow-x-scroll scrollbar-none px-4 md:px-16 md:space-x-2 pb-4"
        >
          {contents.map((content) => (
            <ContentThumbnail key={content.id} content={content} />
          ))}
        </div>
        
        <ChevronRight
          className="absolute top-0 bottom-0 right-1 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition duration-200 hover:scale-125 group-hover:opacity-100"
          onClick={() => handleScroll('right')}
        />
      </div>
    </div>
  );
};

export default ContentRow;
