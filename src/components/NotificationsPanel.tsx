
import React, { useRef, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Notification {
  id: string;
  title: string;
  message: string;
  image: string;
  time: string;
}

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationsPanel = ({ isOpen, onClose }: NotificationsPanelProps) => {
  const notificationsRef = useRef<HTMLDivElement>(null);
  
  // Mock notifications data
  const notifications: Notification[] = [
    {
      id: '1',
      title: 'New Arrival',
      message: 'Season 2 of "Stranger Things" is now available',
      image: 'https://images.unsplash.com/photo-1633439708729-ef863ae6e32c',
      time: '2 hours ago'
    },
    {
      id: '2',
      title: 'Continue Watching',
      message: 'Continue watching "Money Heist" from where you left off',
      image: 'https://images.unsplash.com/photo-1484712401471-05c7215830eb',
      time: '1 day ago'
    },
    {
      id: '3',
      title: 'Recommendation',
      message: 'Based on your interests, you might like "The Crown"',
      image: 'https://images.unsplash.com/photo-1580130632878-36a736b3d82c',
      time: '2 days ago'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
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

  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-16 right-0 sm:right-12 w-[320px] bg-netflix-black-lighter border border-gray-700 rounded-md shadow-lg z-50"
      ref={notificationsRef}
    >
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-lg font-medium text-white">Notifications</h3>
      </div>
      <div className="max-h-[400px] overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div 
              key={notification.id} 
              className="p-4 border-b border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <div className="flex items-start space-x-3">
                <img 
                  src={notification.image} 
                  alt={notification.title}
                  className="h-12 w-12 rounded object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white">{notification.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-400">
            No new notifications
          </div>
        )}
      </div>
      <div className="p-3 text-center border-t border-gray-700">
        <button className="text-xs text-netflix-red hover:underline">
          Mark all as read
        </button>
      </div>
    </div>
  );
};

export default NotificationsPanel;
