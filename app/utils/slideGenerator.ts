// slideGenerator.ts
import pptxgen from 'pptxgenjs';
import { Presentation } from '../types/presentation';
import { slideRegistry, getVariant } from '../slides/registry';

export class SlideGenerator {
  // Generate HTML/React components for all slides
  generateWebView(presentation: Presentation) {
    return presentation.slides.map(slide => {
      try {
        const variant = getVariant(slide.type, slide.variant);
        return variant.render.webView(slide.content);
      } catch (error) {
        console.error(`Error rendering slide:`, error);
        return `Error rendering slide: ${String(error)}`;
      }
    });
  }

  // Generate PPTX presentation
  async generatePPTX(presentation: Presentation) {
    const pptx = new pptxgen();
    
    // Configure presentation
    pptx.layout = 'LAYOUT_16x9';
    
    // Apply brand settings
    const { brandSettings } = presentation;
    
    // Create master slide with branding
    pptx.defineSlideMaster({
      title: 'MASTER_SLIDE',
      background: { color: 'FFFFFF' },
      objects: [
        // { line: { x: 0, y: 5.56, w: 10, h: 0, line: { color: brandSettings.primaryColor, width: 3 } } },
      ]
    });
    
    // Process each slide
    for (const slide of presentation.slides) {
      try {
        const variant = getVariant(slide.type, slide.variant);
        const pptxSlide = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
        await variant.render.pptx(slide.content, pptxSlide);
      } catch (error) {
        console.error(`Error generating PPTX slide:`, error);
        // Add an error slide if there's a problem
        const errorSlide = pptx.addSlide();
        errorSlide.addText(`Error generating slide: ${String(error)}`, {
          x: '10%', y: '40%', w: '80%', h: '20%',
          fontSize: 14, color: 'FF0000'
        });
      }
    }
    
    return pptx;
  }
}