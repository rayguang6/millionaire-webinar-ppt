// registry.ts
import { SlideDefinition } from '../types/slideDefinition';
import { SlideType } from '../types/slideType';           

// Registry to store all slide definitions
export const slideRegistry: Record<SlideType, SlideDefinition> = {} as Record<SlideType, SlideDefinition>;

// Register a slide definition
export function registerSlide<T extends SlideType>(slideDefinition: SlideDefinition<T>) {
  slideRegistry[slideDefinition.id] = slideDefinition;
}

// Helper to get a specific variant with fallback to default
export function getVariant(slideType: SlideType, variantId: string) {
  const slideDefinition = slideRegistry[slideType];
  if (!slideDefinition) {
    throw new Error(`Unknown slide type: ${slideType}`);
  }
  
  // Check if the requested variant exists
  const variant = slideDefinition.variants[variantId];
  if (variant) {
    return variant;
  }
  
  // Try default variant
  const defaultVariant = slideDefinition.variants['default'];
  if (defaultVariant) {
    return defaultVariant;
  }
  
  // If no default, use the first available variant
  const firstVariantKey = Object.keys(slideDefinition.variants)[0];
  if (firstVariantKey) {
    return slideDefinition.variants[firstVariantKey];
  }
  
  // No variants available
  throw new Error(`No variants available for slide type: ${slideType}`);
}