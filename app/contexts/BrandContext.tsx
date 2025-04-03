// contexts/BrandContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { BrandSettings } from '../types/presentation';

// Default brand settings
const defaultBrandSettings: BrandSettings = {
  primaryColor: '#3366CC',
  secondaryColor: '#FF9900',
  fontFamily: 'Arial',
};

// Create context
const BrandContext = createContext<BrandSettings>(defaultBrandSettings);

// Provider component
interface BrandProviderProps {
  settings: BrandSettings;
  children: ReactNode;
}

export const BrandProvider: React.FC<BrandProviderProps> = ({ 
  settings, 
  children 
}) => {
  return (
    <BrandContext.Provider value={settings}>
      {children}
    </BrandContext.Provider>
  );
};

// Hook for easy access to brand settings
export const useBrand = () => useContext(BrandContext);