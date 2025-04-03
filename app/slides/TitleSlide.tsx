// slides/TitleSlide.tsx
import React from 'react';
import { SlideContent } from '../types/slide';
import { SlideType, SlideVariants } from '../types/slideType';
import { defineSlide } from '../types/slideDefinition';
import { SlideWrapper } from '../components/SlideWrapper';

// Default variant component
const DefaultLayout: React.FC<SlideContent> = ({ title, subtitle, presenter }) => (
  <SlideWrapper>
    <div className="h-full flex flex-col justify-center p-16">
      <h1 className="text-5xl font-bold mb-6 text-gray-900">{title}</h1>
      {subtitle && <h2 className="text-3xl mb-8 text-gray-700">{subtitle}</h2>}
      {presenter && <p className="text-xl text-gray-600 mt-auto">{presenter}</p>}
    </div>
  </SlideWrapper>
);

// Centered variant component
const CenteredLayout: React.FC<SlideContent> = ({ title, subtitle, presenter }) => (
  <SlideWrapper>
    <div className="h-full flex flex-col items-center justify-center p-16 text-center">
      <h1 className="text-6xl font-bold mb-8 text-gray-900">{title}</h1>
      {subtitle && <h2 className="text-3xl mb-10 text-gray-700">{subtitle}</h2>}
      {presenter && <p className="text-xl text-gray-600 mt-auto text-center w-full">{presenter}</p>}
    </div>
  </SlideWrapper>
);

// PPTX rendering for default variant
const renderDefaultPPTX = async (content: SlideContent, slide: any) => {
  // Add title
  slide.addText(content.title || '', {
    x: '10%',
    y: '40%',
    w: '80%',
    h: '10%',
    fontSize: 44,
    bold: true,
    color: '1a1a1a',
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
      color: '4b5563',
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
      color: '6b7280',
      align: 'left',
    });
  }
};

// PPTX rendering for centered variant
const renderCenteredPPTX = async (content: SlideContent, slide: any) => {
  // Add title
  slide.addText(content.title || '', {
    x: '10%',
    y: '40%',
    w: '80%',
    h: '10%',
    fontSize: 44,
    bold: true,
    color: '1a1a1a',
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
      color: '4b5563',
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
      color: '6b7280',
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