
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-netflix-black text-netflix-lightgray py-8 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-4">
          <p className="text-sm">Questions? Call 1-844-505-2993</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Investor Relations</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Speed Test</a></li>
          </ul>
          
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
            <li><a href="#" className="hover:underline">Legal Notices</a></li>
          </ul>
          
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Account</a></li>
            <li><a href="#" className="hover:underline">Ways to Watch</a></li>
            <li><a href="#" className="hover:underline">Corporate Information</a></li>
            <li><a href="#" className="hover:underline">Only on Netflix</a></li>
          </ul>
          
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Media Center</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Netflix Originals</a></li>
          </ul>
        </div>
        
        <p className="mt-8 text-xs">&copy; 2025 Netflix Clone</p>
      </div>
    </footer>
  );
};

export default Footer;
