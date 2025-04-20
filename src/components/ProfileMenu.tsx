
import React, { useRef, useEffect } from 'react';
import { User, Settings, LogOut, HelpCircle, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileMenu = ({ isOpen, onClose }: ProfileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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

  const profiles = [
    { id: '1', name: 'Main', avatar: 'https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png' },
    { id: '2', name: 'Kids', avatar: 'https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXvHfHk-A98E27nYVN9A6_eVOP-2QRlC5yvUWGpkwdjLsliPnwb8ClOdCEz88FVqRf3pAnKFWaLIxVBcHHMKJFv7NFTZ.png' },
  ];

  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-16 right-0 w-64 bg-netflix-black-lighter border border-gray-700 rounded-md shadow-lg z-50"
      ref={menuRef}
    >
      <div className="py-2">
        {/* User profiles */}
        {profiles.map((profile) => (
          <div 
            key={profile.id}
            className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer"
          >
            <Avatar className="h-8 w-8 mr-3">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback>{profile.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-white text-sm">{profile.name}</span>
          </div>
        ))}

        {/* Manage profiles */}
        <div className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
          <div className="flex items-center justify-center h-8 w-8 mr-3 text-gray-400">
            <PenTool size={16} />
          </div>
          <span className="text-gray-400 text-sm">Manage Profiles</span>
        </div>

        <hr className="border-gray-700 my-1" />

        {/* Menu items */}
        <Link to="/account" className="flex items-center px-4 py-2 hover:bg-gray-800">
          <User className="h-4 w-4 mr-3 text-gray-400" />
          <span className="text-gray-400 text-sm">Account</span>
        </Link>
        
        <Link to="/help" className="flex items-center px-4 py-2 hover:bg-gray-800">
          <HelpCircle className="h-4 w-4 mr-3 text-gray-400" />
          <span className="text-gray-400 text-sm">Help Center</span>
        </Link>
        
        <hr className="border-gray-700 my-1" />
        
        <div className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer">
          <LogOut className="h-4 w-4 mr-3 text-gray-400" />
          <span className="text-gray-400 text-sm">Sign out of Netflix</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
