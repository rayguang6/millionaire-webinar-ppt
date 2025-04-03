// components/SlideWrapper.tsx
import React from 'react';

interface SlideWrapperProps {
  children: React.ReactNode;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children }) => {
  return (
    <div className="w-full bg-white overflow-hidden" 
         style={{ aspectRatio: '16/9' }}>
      {children}
    </div>
  );
};