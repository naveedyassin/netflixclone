
import { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import NotificationsPanel from './NotificationsPanel';
import ProfileMenu from './ProfileMenu';

const NetflixNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
    if (!showSearchBox) {
      // Close other panels when opening search
      setShowNotifications(false);
      setShowProfileMenu(false);
    }
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications) {
      // Close other panels when opening notifications
      setShowSearchBox(false);
      setShowProfileMenu(false);
    }
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
    if (!showProfileMenu) {
      // Close other panels when opening profile menu
      setShowSearchBox(false);
      setShowNotifications(false);
    }
  };

  return (
    <header className={cn(
      'fixed top-0 z-50 w-full px-4 py-2 transition-all duration-500 lg:px-12',
      isScrolled ? 'bg-netflix-black' : 'navbar-gradient'
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-8">
          <Link to="/">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
              width={100} 
              height={100}
              className="cursor-pointer object-contain"
              alt="Netflix Logo"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-sm font-light text-white hover:text-gray-300 transition">Home</Link>
            <Link to="/tv-shows" className="text-sm font-light text-white hover:text-gray-300 transition">TV Shows</Link>
            <Link to="/movies" className="text-sm font-light text-white hover:text-gray-300 transition">Movies</Link>
            <Link to="/new-and-popular" className="text-sm font-light text-white hover:text-gray-300 transition">New & Popular</Link>
            <Link to="/my-list" className="text-sm font-light text-white hover:text-gray-300 transition">My List</Link>
            <Link to="/browse-by-language" className="text-sm font-light text-white hover:text-gray-300 transition">Browse by Languages</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="flex md:hidden text-white items-center"
            onClick={toggleMobileMenu}
          >
            <span className="mr-2">Browse</span>
            <ChevronDown className={cn("w-4 h-4 transition-transform", showMobileMenu && "rotate-180")} />
          </button>
        </div>
        
        <div className="flex items-center space-x-4 text-sm">
          {/* Search icon and searchbox */}
          <div className="relative">
            <Search 
              className="h-5 w-5 cursor-pointer text-white hover:text-gray-300 transition" 
              onClick={toggleSearchBox} 
            />
            <SearchBox isOpen={showSearchBox} onClose={() => setShowSearchBox(false)} />
          </div>
          
          {/* Kids link */}
          <Link to="/kids" className="hidden md:inline text-sm font-light text-white hover:text-gray-300 transition">
            Kids
          </Link>
          
          {/* Notifications bell and panel */}
          <div className="relative">
            <Bell 
              className="h-5 w-5 cursor-pointer text-white hover:text-gray-300 transition" 
              onClick={toggleNotifications} 
            />
            <NotificationsPanel isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
          </div>
          
          {/* Profile dropdown */}
          <div className="relative">
            <div 
              className="flex items-center cursor-pointer"
              onClick={toggleProfileMenu}
            >
              <img
                src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                alt="User Avatar"
                className="rounded"
                width={28}
                height={28}
              />
              <ChevronDown className={cn("h-4 w-4 ml-1 text-white transition-transform", showProfileMenu && "rotate-180")} />
            </div>
            <ProfileMenu isOpen={showProfileMenu} onClose={() => setShowProfileMenu(false)} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <MobileMenu />
      )}
    </header>
  );
};

export default NetflixNavbar;
