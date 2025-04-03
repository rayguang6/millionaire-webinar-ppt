// slides/TitleSlide.tsx
import React from 'react';
import { SlideContent } from '../types/slide';
import { SlideType, SlideVariants } from '../types/slideType';
import { defineSlide } from '../types/slideDefinition';
import { SlideWrapper } from '../components/SlideWrapper';
import { getBrandGuide } from '../utils/brandStore'; // Import the global store getter

// Default variant component
const DefaultLayout: React.FC<SlideContent> = ({ title, subtitle, presenter }) => {
  const brandGuide = getBrandGuide();
  
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col justify-center p-16">
        <h1 className="font-bold mb-6" style={{ color: brandGuide.primaryColor , fontFamily: brandGuide.headingFontFamily, fontSize: brandGuide.h1Size }}>{title}</h1>
        {subtitle && <h2 className="mb-8" style={{ color: brandGuide.textColor , fontFamily: brandGuide.headingFontFamily, fontSize: brandGuide.h2Size }}>{subtitle}</h2>}
        {presenter && <p className="mt-auto" style={{ color: brandGuide.textColor , fontFamily: brandGuide.fontFamily, fontSize: brandGuide.fontSizeSmall }}>{presenter}</p>}
      </div>
    </SlideWrapper>
  );
};

// Centered variant component
const CenteredLayout: React.FC<SlideContent> = ({ title, subtitle, presenter }) => {
  const brandGuide = getBrandGuide();
  
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col items-center justify-center p-16 text-center">
        <h1 className="text-6xl font-bold mb-8" style={{ color: brandGuide.primaryColor , fontFamily: brandGuide.headingFontFamily, fontSize: brandGuide.h1Size }}>{title}</h1>
        {subtitle && <h2 className="text-3xl mb-10" style={{ color: brandGuide.secondaryColor , fontFamily: brandGuide.headingFontFamily, fontSize: brandGuide.h2Size }}>{subtitle}</h2>}
        {presenter && <p className="text-xl text-gray-600 mt-auto text-center w-full" style={{ color: brandGuide.secondaryColor , fontFamily: brandGuide.fontFamily, fontSize: brandGuide.fontSizeSmall }}>{presenter}</p>}
      </div>
    </SlideWrapper>
  );
};

// PPTX rendering for default variant
const renderDefaultPPTX = async (content: SlideContent, slide: any) => {
  const brandGuide  = getBrandGuide();

  // Add title
  slide.addText(content.title || '', {
    x: '10%',
    y: '40%',
    w: '80%',
    h: '10%',
    fontSize: brandGuide.h1Size.replace('px', ''),
    bold: true,
    color: brandGuide.primaryColor.replace('#', ''),
    fontFace: brandGuide.headingFontFamily,
    align: 'left',
  });

  // Add subtitle if present
  if (content.subtitle) {
    slide.addText(content.subtitle, {
      x: '10%',
      y: '55%',
      w: '80%',
      h: '8%',
      fontSize: 32,
      color: brandGuide.secondaryColor.replace('#', ''),
      fontFace: brandGuide.fontFamily,
      align: 'left',
    });
  }

  // Add presenter if present
  if (content.presenter) {
    slide.addText(content.presenter, {
      x: '10%',
      y: '80%',
      w: '80%',
      h: '5%',
      fontSize: 18,
      color: brandGuide.textColor.replace('#', ''),
      fontFace: brandGuide.fontFamily,
      align: 'left',
    });
  }
};

// PPTX rendering for centered variant
const renderCenteredPPTX = async (content: SlideContent, slide: any) => {
  const brandGuide  = getBrandGuide();  

  // Add title
  slide.addText(content.title || '', {
    x: '10%',
    y: '40%',
    w: '80%',
    h: '10%',
    fontSize: brandGuide.h1Size.replace('px', ''),
    bold: true,
    color: brandGuide.primaryColor.replace('#', ''),
    fontFace: brandGuide.fontFamily,
    align: 'center',
  });

  // Add subtitle if present
  if (content.subtitle) {
    slide.addText(content.subtitle, {
      x: '10%',
      y: '55%',
      w: '80%',
      h: '8%',
      fontSize: 32,
      color: brandGuide.textColor.replace('#', ''),
      fontFace: brandGuide.fontFamily,
      align: 'center',
    });
  }

  // Add presenter if present
  if (content.presenter) {
    slide.addText(content.presenter, {
      x: '10%',
      y: '80%',
      w: '80%',
      h: '5%',
      fontSize: 18,
      color: brandGuide.secondaryColor.replace('#', ''),
      fontFace: brandGuide.fontFamily,
      align: 'center',
    });
  }
};

// Define the title slide
export const TitleSlide = defineSlide({
  id: SlideType.TITLE,
  name: 'Title Slide',
  variants: {
    [SlideVariants.Title.DEFAULT]: {
      name: 'Default',
      render: {
        webView: (content: SlideContent) => <DefaultLayout {...content} />,
        pptx: renderDefaultPPTX,
      },
    },
    [SlideVariants.Title.CENTERED]: {
      name: 'Centered',
      render: {
        webView: (content: SlideContent) => <CenteredLayout {...content} />,
        pptx: renderCenteredPPTX,
      },
    },
  },
});