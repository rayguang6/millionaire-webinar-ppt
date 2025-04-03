// contexts/BrandContext.tsx
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { BrandSettings } from '../types/presentation';
import { getBrandGuide, setBrandGuide } from '../utils/brandStore';
import { defaultBrandGuide } from '../lib/constants/defaultBrandGuide';

interface BrandContextType {
  brandGuide: BrandSettings;
  updateBrandGuide: (newGuide: Partial<BrandSettings>) => void;
}

// Create context with default values
const BrandContext = createContext<BrandContextType>({
  brandGuide: defaultBrandGuide,
  updateBrandGuide: () => {},
});

// Provider component
interface BrandProviderProps {
  initialGuide?: Partial<BrandSettings>;
  children: ReactNode;
}

export const BrandProvider: React.FC<BrandProviderProps> = ({ 
  initialGuide = {}, 
  children 
}) => {
  // Merge initial settings with defaults
  const [brandGuide, setBrandGuideState] = useState<BrandSettings>({
    ...defaultBrandGuide,
    ...initialGuide
  });

  // Function to update settings
  const updateBrandGuide = (newGuide: Partial<BrandSettings>) => {
    setBrandGuideState(prev => {
      const updated = { ...prev, ...newGuide };
      // Also update the global store when context changes
      setBrandGuide(updated);
      return updated;
    });
  };

  // Sync initialGuide with global store on mount and when it changes
  useEffect(() => {
    const mergedGuide = { ...defaultBrandGuide, ...initialGuide };
    setBrandGuideState(mergedGuide);
    setBrandGuide(mergedGuide);
  }, [initialGuide]);

  return (
    <BrandContext.Provider value={{ brandGuide, updateBrandGuide }}>
      {children}
    </BrandContext.Provider>
  );
};

// Hook for easy access to brand settings
export const useBrand = () => useContext(BrandContext);