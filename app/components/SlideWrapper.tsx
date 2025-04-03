// components/SlideWrapper.tsx
import React from 'react';
import { useBrand } from '../contexts/BrandContext';

interface SlideWrapperProps {
  children: React.ReactNode;
  className?: string; // Optional additional classes
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ 
  children,
  className = ''
}) => {
  const { brandGuide } = useBrand();
  
  return (
    <div 
      className={`w-full bg-white overflow-hidden ${className}`}
      style={{ 
        aspectRatio: '16/9',
        fontFamily: brandGuide.fontFamily,
        color: brandGuide.primaryColor,
        // You can add more brand-related styles here
        // For example, a subtle border or background tint based on primary color
        // boxShadow: `0 0 0 1px ${brandGuide.primaryColor}10`
      }}
    >
      {children}
    </div>
  );
};