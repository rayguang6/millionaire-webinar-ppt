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

// Specific type for image slide content
export interface ImageSlideContent extends SlideContent {
  imageUrl: string; // Required for image slides
  title?: string;
  bullets?: string[];
  imagePosition?: 'left' | 'right' | 'full' | 'default';
  imageStyle?: {
    objectFit?: 'contain' | 'cover';
    opacity?: number;
  };
}

// Generic slide interface with type-safe variants
export interface SlideInstance<T extends SlideType = SlideType> {
  id: string;
  type: T;
  variant: T extends SlideType.IMAGE ? SlideVariants.Image : string;
  content: T extends SlideType.IMAGE ? ImageSlideContent : SlideContent;
  order: number;
}

// Type guard to check if content is ImageSlideContent
export function isImageSlideContent(content: SlideContent): content is ImageSlideContent {
  return 'imageUrl' in content && typeof content.imageUrl === 'string';
}

// Basic type guard function generator to avoid repetition
export function createTypeGuard<T extends SlideType>(slideType: T) {
  return (slide: SlideInstance): slide is SlideInstance<T> => slide.type === slideType;
}

// A few essential type guards
export const isTitleSlide = createTypeGuard(SlideType.TITLE);
export const isBulletSlide = createTypeGuard(SlideType.BULLET);
export const isImageSlide = createTypeGuard(SlideType.IMAGE);

// Helper types for image slides
export type ImageSlideInstance = SlideInstance<SlideType.IMAGE>;
export type ImageSlideVariant = SlideVariants.Image;