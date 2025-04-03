// slides/index.ts
import { registerSlide } from './registry';
import { TitleSlide } from './TitleSlide';
import { ImageSlide } from './ImageSlide';
import { BulletSlide } from './BulletSlide';
// Import other slides as you create them

// Register all slides
registerSlide(TitleSlide);
registerSlide(ImageSlide);
registerSlide(BulletSlide);
// Register other slides as you create them

// Export for convenience
export { TitleSlide, ImageSlide };