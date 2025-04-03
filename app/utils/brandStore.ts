// utils/brandStore.ts
import { BrandSettings } from '../types/presentation';
import { defaultBrandGuide } from '@/app/lib/constants/defaultBrandGuide';


// Global storage for brand settings
let currentBrandGuide = { ...defaultBrandGuide };

export const getBrandGuide = (): BrandSettings => {
  return { ...currentBrandGuide };
};

export const setBrandGuide = (settings: Partial<BrandSettings>): void => {
  currentBrandGuide = {
    ...currentBrandGuide,
    ...settings
  };
};