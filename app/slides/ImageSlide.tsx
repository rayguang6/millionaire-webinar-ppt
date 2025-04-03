import React from 'react';
import { SlideContent } from '../types/slide';
import { SlideType, SlideVariants } from '../types/slideType';
import { defineSlide } from '../types/slideDefinition';
import { SlideWrapper } from '../components/SlideWrapper';
import Image from 'next/image';
import { getBrandGuide } from '../utils/brandStore';
// Default variant - Image with title above
const DefaultLayout: React.FC<SlideContent> = ({ title, imageUrl }) => {
    const brandGuide  = getBrandGuide(); 

    return (
        <SlideWrapper>
            <div className="h-full flex flex-col p-16">
      {title && <h2 className="text-4xl font-bold mb-8" style={{ color: brandGuide.primaryColor }}>{title}</h2>}
      {imageUrl && (
        <div className="flex-1 relative">
          <Image
            src={imageUrl}
            alt={title || 'Slide image'}
            fill
            className="object-contain"
          />
        </div>
      )}
    </div>
  </SlideWrapper>
    )
}

// Full variant - Full screen image with optional overlay title
const FullLayout: React.FC<SlideContent> = ({ title, imageUrl }) => {
  const brandGuide = getBrandGuide();
  
  return (
    <SlideWrapper>
      <div className="h-full relative">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title || 'Slide image'}
            fill
            className="object-cover"
          />
        )}
        {title && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <h2 className="text-5xl font-bold px-16 text-center" style={{ color: brandGuide.primaryColor }}>{title}</h2>
          </div>
        )}
      </div>
    </SlideWrapper>
  );
};

// Left variant - Image on left, content on right
const LeftLayout: React.FC<SlideContent> = ({ title, imageUrl, bullets }) => {
  const brandGuide = getBrandGuide();
  
  return (
    <SlideWrapper>
      <div className="h-full flex p-16 gap-8">
        <div className="w-1/2 relative">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title || 'Slide image'}
              fill
              className="object-contain"
            />
          )}
        </div>
        <div className="w-1/2 flex flex-col">
          {title && <h2 className="text-4xl font-bold mb-6" style={{ color: brandGuide.primaryColor }}>{title}</h2>}
          {bullets && bullets.length > 0 && (
            <ul className="space-y-4 text-xl" style={{ color: brandGuide.secondaryColor }}>
              {bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </SlideWrapper>
  );
};

// Right variant - Content on left, image on right
const RightLayout: React.FC<SlideContent> = ({ title, imageUrl, bullets }) => {
  const brandGuide = getBrandGuide();
  
  return (
    <SlideWrapper>
      <div className="h-full flex p-16 gap-8">
        <div className="w-1/2 flex flex-col">
          {title && <h2 className="text-4xl font-bold mb-6" style={{ color: brandGuide.primaryColor }}>{title}</h2>}
          {bullets && bullets.length > 0 && (
            <ul className="space-y-4 text-xl" style={{ color: brandGuide.secondaryColor }}>
              {bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-1/2 relative">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title || 'Slide image'}
              fill
              className="object-contain"
            />
          )}
        </div>
      </div>
    </SlideWrapper>
  );
};

// PPTX rendering functions
const renderDefaultPPTX = async (content: SlideContent, slide: any) => {
  const brandGuide = getBrandGuide();

  if (content.title) {
    slide.addText(content.title, {
      x: '10%',
      y: '10%',
      w: '80%',
      h: '15%',
      fontSize: 32,
      bold: true,
      color: brandGuide.primaryColor.replace('#', ''),
      fontFace: brandGuide.fontFamily,
    });
  }

  if (content.imageUrl) {
    slide.addImage({
      path: content.imageUrl,
      x: '10%',
      y: '30%',
      w: '80%',
      h: '60%',
    });
  }
};

const renderFullPPTX = async (content: SlideContent, slide: any) => {
  const brandGuide = getBrandGuide();

  if (content.imageUrl) {
    slide.addImage({
      path: content.imageUrl,
      x: '0%',
      y: '0%',
      w: '100%',
      h: '100%',
    });
  }

  if (content.title) {
    slide.addText(content.title, {
      x: '10%',
      y: '40%',
      w: '80%',
      h: '20%',
      fontSize: 44,
      bold: true,
      color: brandGuide.primaryColor.replace('#', ''),
      fontFace: brandGuide.fontFamily,
      align: 'center',
    });
  }
};

const renderLeftPPTX = async (content: SlideContent, slide: any) => {
  const brandGuide = getBrandGuide();

  if (content.imageUrl) {
    slide.addImage({
      path: content.imageUrl,
      x: '5%',
      y: '10%',
      w: '45%',
      h: '80%',
    });
  }

  if (content.title) {
    slide.addText(content.title, {
      x: '55%',
      y: '10%',
      w: '40%',
      h: '15%',
      fontSize: 32,
      bold: true,
      color: brandGuide.primaryColor.replace('#', ''),
      fontFace: brandGuide.fontFamily,
    });
  }

  if (content.bullets && content.bullets.length > 0) {
    slide.addText(content.bullets.join('\n'), {
      x: '55%',
      y: '30%',
      w: '40%',
      h: '60%',
      fontSize: 24,
      bullet: true,
      color: brandGuide.secondaryColor.replace('#', ''),
      fontFace: brandGuide.fontFamily,
    });
  }
};

const renderRightPPTX = async (content: SlideContent, slide: any) => {
  const brandGuide = getBrandGuide();

  if (content.title) {
    slide.addText(content.title, {
      x: '5%',
      y: '10%',
      w: '40%',
      h: '15%',
      fontSize: 32,
      bold: true,
      color: brandGuide.primaryColor.replace('#', ''),
      fontFace: brandGuide.fontFamily,
    });
  }

  if (content.bullets && content.bullets.length > 0) {
    slide.addText(content.bullets.join('\n'), {
      x: '5%',
      y: '30%',
      w: '40%',
      h: '60%',
      fontSize: 24,
      bullet: true,
      color: brandGuide.secondaryColor.replace('#', ''),
      fontFace: brandGuide.fontFamily,
    });
  }

  if (content.imageUrl) {
    slide.addImage({
      path: content.imageUrl,
      x: '50%',
      y: '10%',
      w: '45%',
      h: '80%',
    });
  }
};

// Define the image slide
export const ImageSlide = defineSlide({
  id: SlideType.IMAGE,
  name: 'Image Slide',
  variants: {
    [SlideVariants.Image.DEFAULT]: {
      name: 'Default',
      render: {
        webView: (content: SlideContent) => <DefaultLayout {...content} />,
        pptx: renderDefaultPPTX,
      },
    },
    [SlideVariants.Image.FULL]: {
      name: 'Full Screen',
      render: {
        webView: (content: SlideContent) => <FullLayout {...content} />,
        pptx: renderFullPPTX,
      },
    },
    [SlideVariants.Image.LEFT]: {
      name: 'Image Left',
      render: {
        webView: (content: SlideContent) => <LeftLayout {...content} />,
        pptx: renderLeftPPTX,
      },
    },
    [SlideVariants.Image.RIGHT]: {
      name: 'Image Right',
      render: {
        webView: (content: SlideContent) => <RightLayout {...content} />,
        pptx: renderRightPPTX,
      },
    },
  },
}); 