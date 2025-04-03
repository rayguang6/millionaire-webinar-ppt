import { SlideType, SlideVariants } from './slideType';

// Simplified content interface focusing on what you actually need
export interface SlideContent {
  title?: string;
  subtitle?: string;
  presenter?: string;
  bullets?: string[];
  imageUrl?: string;
  
  // This allows you to add custom data for specific slide types
  additionalContent?: Record<string, any>;
}

// Generic slide interface with type-safe variants
export interface SlideInstance<T extends SlideType = SlideType> {
  id: string;
  type: T;
  variant: string; // Allow any string for the variant
  content: SlideContent;
  order: number;
}

// Basic type guard function generator to avoid repetition
export function createTypeGuard<T extends SlideType>(slideType: T) {
  return (slide: SlideInstance): slide is SlideInstance<T> => slide.type === slideType;
}

// A few essential type guards
export const isTitleSlide = createTypeGuard(SlideType.TITLE);
export const isBulletSlide = createTypeGuard(SlideType.BULLET);
export const isImageSlide = createTypeGuard(SlideType.IMAGE);