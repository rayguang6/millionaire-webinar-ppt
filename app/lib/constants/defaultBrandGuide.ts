// First, create a shared defaults file:
// utils/brandDefaults.ts
import { BrandSettings } from '@/app/types/presentation';

export const defaultBrandGuide: BrandSettings = {   
    // Color Palette
    primaryColor: '#ff8b47', // Vibrant orange
    secondaryColor: '#367ad8', // Deep blue
    accentColor: '#5AE4A8', // Mint green
    backgroundColor: '#FFFFFF', // White background
    
    // Text Colors
    headingColor: '#000000', // Black for headings
    textColor: '#333333', // Dark gray for body text
    subtextColor: '#666666', // Light gray for secondary text
    
    // Typography
    fontFamily: 'Inter, Arial, sans-serif', // Modern, clean font
    headingFontFamily: 'Montserrat, Arial, sans-serif', // Distinct heading font
    
    // Font Sizes
    fontSizeBase: '16px', // Standard body text size
    fontSizeSmall: '14px', // Small text size
    fontSizeLarge: '18px', // Large text size
    
    // Heading Sizes
    h1Size: '32px', // Large heading
    h2Size: '24px', // Medium heading
    h3Size: '24px', // Small heading
    h4Size: '20px', // Smallest heading

};
