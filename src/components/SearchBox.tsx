
import React, { useState, useRef, useEffect } from 'react';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Search, X } from 'lucide-react';
import { trendingContent, popularContent, originals, documentaries } from '@/lib/mockData';
import { useNavigate } from 'react-router-dom';

interface SearchBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchBox = ({ isOpen, onClose }: SearchBoxProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  
  // Combine all available content collections
  const allContent = [...trendingContent, ...popularContent, ...originals, ...documentaries];
  
  const filteredContent = allContent.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSelect = (id: string | number) => {
    // In a real application, this would navigate to the content details page
    console.log(`Selected content with ID: ${id}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-16 right-0 sm:right-16 w-full max-w-sm md:max-w-md bg-netflix-black-lighter border border-gray-700 rounded-md shadow-lg z-50"
      ref={searchRef}
    >
      <Command className="rounded-lg bg-netflix-black-lighter border-none">
        <div className="flex items-center border-b border-gray-700 px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50 text-white" />
          <CommandInput 
            placeholder="Search for movies, TV shows..." 
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none text-white placeholder:text-gray-400"
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')}>
              <X className="h-4 w-4 opacity-50 text-white" />
            </button>
          )}
        </div>
        <CommandList className="max-h-[300px] overflow-y-auto">
          <CommandEmpty className="py-6 text-center text-sm text-gray-400">
            No results found
          </CommandEmpty>
          {filteredContent.length > 0 && (
            <CommandGroup heading="Content">
              {filteredContent.map((item) => (
                <CommandItem
                  key={item.id}
                  className="flex items-center px-2 py-2 cursor-pointer hover:bg-gray-800 text-white"
                  onSelect={() => handleSelect(item.id)}
                >
                  <div className="flex items-center space-x-2">
                    <img 
                      src={item.image} 
                      className="h-10 w-16 object-cover rounded" 
                      alt={item.title} 
                    />
                    <span>{item.title}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </Command>
    </div>
  );
};

export default SearchBox;
