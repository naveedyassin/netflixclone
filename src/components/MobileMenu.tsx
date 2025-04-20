
import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  return (
    <div className="absolute top-full left-0 w-full bg-netflix-black border-t border-gray-800 md:hidden">
      <div className="py-2">
        <Link to="/" className="block px-6 py-2 text-white hover:bg-gray-800">
          Home
        </Link>
        <Link to="/tv-shows" className="block px-6 py-2 text-white hover:bg-gray-800">
          TV Shows
        </Link>
        <Link to="/movies" className="block px-6 py-2 text-white hover:bg-gray-800">
          Movies
        </Link>
        <Link to="/new-and-popular" className="block px-6 py-2 text-white hover:bg-gray-800">
          New & Popular
        </Link>
        <Link to="/my-list" className="block px-6 py-2 text-white hover:bg-gray-800">
          My List
        </Link>
        <Link to="/browse-by-language" className="block px-6 py-2 text-white hover:bg-gray-800">
          Browse by Languages
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
