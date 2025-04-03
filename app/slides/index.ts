// slides/index.ts
import { registerSlide } from './registry';
import { TitleSlide } from './TitleSlide';
// Import other slides as you create them

// Register all slides
registerSlide(TitleSlide);
// Register other slides as you create them

// Export for convenience
export { TitleSlide };