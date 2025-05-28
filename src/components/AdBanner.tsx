
import React from 'react';

interface AdBannerProps {
  size?: 'banner' | 'rectangle' | 'leaderboard';
  className?: string;
}

const AdBanner = ({ size = 'banner', className = '' }: AdBannerProps) => {
  const sizeClasses = {
    banner: 'h-24 md:h-32', // Mobile: 96px, Desktop: 128px
    rectangle: 'h-64 md:h-80', // Square-ish format
    leaderboard: 'h-20 md:h-24' // Thin banner
  };

  return (
    <div className={`w-full ${sizeClasses[size]} ${className}`}>
      <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-full flex flex-col items-center justify-center hover:bg-gray-50 transition-colors duration-200">
        <div className="text-center">
          <p className="text-gray-500 text-sm font-medium mb-1">Advertisement</p>
          <p className="text-gray-400 text-xs">
            {size === 'banner' && '728x90 Banner Ad'}
            {size === 'rectangle' && '300x250 Rectangle Ad'}
            {size === 'leaderboard' && '728x90 Leaderboard Ad'}
          </p>
          <p className="text-gray-400 text-xs mt-2">Your ad could be here</p>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
