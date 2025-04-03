import React from 'react';
import { SlideContent } from '../types/slide';
import { SlideType, SlideVariants } from '../types/slideType';
import { defineSlide } from '../types/slideDefinition';
import { SlideWrapper } from '../components/SlideWrapper';
import { getBrandGuide } from '../utils/brandStore';

// Vertical variant component
const VerticalLayout: React.FC<SlideContent> = ({ title, bullets }) => {
  const brandGuide = getBrandGuide();
  
  return (
    <SlideWrapper>
      <div className="h-full flex flex-col p-16">
        <h2 
          className="text-4xl font-bold mb-12" 
          style={{ 
            color: brandGuide.primaryColor,
            fontFamily: brandGuide.headingFontFamily,
            fontSize: brandGuide.h2Size
          }}
        >
          {title}
        </h2>
        <ul className="space-y-6 flex-1">
          {bullets?.map((point, index) => (
            <li key={index} className="flex items-start group">
              <span 
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4"
                style={{ 
                  backgroundColor: `${brandGuide.primaryColor}20`,
                  color: brandGuide.primaryColor
                }}
              >
                {index + 1}
              </span>
              <span 
                className="text-xl leading-relaxed pt-1"
                style={{ 
                  color: brandGuide.textColor,
                  fontFamily: brandGuide.fontFamily
                }}
              >
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </SlideWrapper>
  );
};

// Horizontal variant component
const HorizontalLayout: React.FC<SlideContent> = ({ title, bullets }) => {
  const brandGuide = getBrandGuide();

  if (!bullets || bullets.length !== 3) {
    console.warn('Horizontal layout works best with exactly 3 points. Using grid layout instead.');
    return <GridLayout title={title} bullets={bullets} />;
  }

  return (
    <SlideWrapper>
      <div className="h-full flex flex-col p-16">
        <h2 
          className="text-4xl font-bold mb-12"
          style={{ 
            color: brandGuide.primaryColor,
            fontFamily: brandGuide.headingFontFamily,
            fontSize: brandGuide.h2Size
          }}
        >
          {title}
        </h2>
        <div className="grid grid-cols-3 gap-8 flex-1">
          {bullets.map((point, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: `${brandGuide.primaryColor}05` }}
            >
              <div className="mb-4">
                <span 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-lg font-semibold"
                  style={{ 
                    backgroundColor: `${brandGuide.primaryColor}20`,
                    color: brandGuide.primaryColor
                  }}
                >
                  {index + 1}
                </span>
              </div>
              <p 
                className="text-xl"
                style={{ 
                  color: brandGuide.textColor,
                  fontFamily: brandGuide.fontFamily
                }}
              >
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};

// Grid variant component
const GridLayout: React.FC<SlideContent> = ({ title, bullets }) => {
  const brandGuide = getBrandGuide();
  const useWideLayout = !bullets || bullets.length <= 4;
  const gridCols = useWideLayout ? "grid-cols-2" : "grid-cols-3";

  return (
    <SlideWrapper>
      <div className="h-full flex flex-col p-16">
        <h2 
          className="text-4xl font-bold mb-12"
          style={{ 
            color: brandGuide.primaryColor,
            fontFamily: brandGuide.headingFontFamily,
            fontSize: brandGuide.h2Size
          }}
        >
          {title}
        </h2>
        <div className={`grid ${gridCols} gap-6 flex-1`}>
          {bullets?.map((point, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl transition-colors"
              style={{ 
                backgroundColor: `${brandGuide.primaryColor}05`,
                borderColor: brandGuide.primaryColor
              }}
            >
              <div className="flex items-center mb-4">
                <span 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-lg font-semibold"
                  style={{ 
                    backgroundColor: `${brandGuide.primaryColor}20`,
                    color: brandGuide.primaryColor
                  }}
                >
                  {index + 1}
                </span>
              </div>
              <p 
                className="text-xl"
                style={{ 
                  color: brandGuide.textColor,
                  fontFamily: brandGuide.fontFamily
                }}
              >
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};

// PPTX rendering functions
const renderVerticalPPTX = async (content: SlideContent, slide: any) => {
  const brandGuide = getBrandGuide();

  // Add title
  if (content.title) {
    slide.addText(content.title, {
      x: '10%',
      y: '10%',
      w: '80%',
      h: '15%',
      fontSize: 40,
      bold: true,
      color: brandGuide.primaryColor.replace('#', ''),
      fontFace: brandGuide.headingFontFamily,
    });
  }

  // Add points
  content.bullets?.forEach((point, index) => {
    const yPos = 30 + (index * 10);
    
    // Add number circle
    slide.addShape('ellipse', {
      x: '10%',
      y: `${yPos}%`,
      w: '3%',
      h: '5%',
      fill: { color: brandGuide.primaryColor.replace('#', '') + '20' },
    });

    // Add number
    slide.addText((index + 1).toString(), {
      x: '10%',
      y: `${yPos}%`,
      w: '3%',
      h: '5%',
      fontSize: 16,
      color: brandGuide.primaryColor.replace('#', ''),
      align: 'center',
      valign: 'middle',
      fontFace: brandGuide.fontFamily,
    });

    // Add point text
    slide.addText(point, {
      x: '15%',
      y: `${yPos}%`,
      w: '75%',
      h: '8%',
      fontSize: 24,
      color: brandGuide.textColor.replace('#', ''),
      fontFace: brandGuide.fontFamily,
      valign: 'middle',
    });
  });
};

const renderHorizontalPPTX = async (content: SlideContent, slide: any) => {
  const brandGuide = getBrandGuide();

  // Add title
  if (content.title) {
    slide.addText(content.title, {
      x: '10%',
      y: '10%',
      w: '80%',
      h: '15%',
      fontSize: 40,
      bold: true,
      color: brandGuide.primaryColor.replace('#', ''),
      fontFace: brandGuide.headingFontFamily,
    });
  }

  // Add points in a grid
  content.bullets?.forEach((point, index) => {
    const col = index % 3;
    const xPos = 10 + (col * 28);
    
    // Add card background
    slide.addShape('rect', {
      x: `${xPos}%`,
      y: '30%',
      w: '25%',
      h: '50%',
      fill: { color: brandGuide.primaryColor.replace('#', '') + '05' },
      radius: 8,
    });

    // Add number circle
    slide.addShape('ellipse', {
      x: `${xPos + 2}%`,
      y: '33%',
      w: '4%',
      h: '7%',
      fill: { color: brandGuide.primaryColor.replace('#', '') + '20' },
    });

    // Add number
    slide.addText((index + 1).toString(), {
      x: `${xPos + 2}%`,
      y: '33%',
      w: '4%',
      h: '7%',
      fontSize: 16,
      color: brandGuide.primaryColor.replace('#', ''),
      align: 'center',
      valign: 'middle',
      fontFace: brandGuide.fontFamily,
    });

    // Add point text
    slide.addText(point, {
      x: `${xPos + 2}%`,
      y: '42%',
      w: '21%',
      h: '35%',
      fontSize: 20,
      color: brandGuide.textColor.replace('#', ''),
      fontFace: brandGuide.fontFamily,
      valign: 'top',
      wrap: true,
    });
  });
};

const renderGridPPTX = async (content: SlideContent, slide: any) => {
  const brandGuide = getBrandGuide();

  // Add title
  if (content.title) {
    slide.addText(content.title, {
      x: '10%',
      y: '10%',
      w: '80%',
      h: '15%',
      fontSize: 40,
      bold: true,
      color: brandGuide.primaryColor.replace('#', ''),
      fontFace: brandGuide.headingFontFamily,
    });
  }

  // Dynamic layout calculations
  const useWideLayout = !content.bullets || content.bullets.length <= 4;
  const cols = useWideLayout ? 2 : 3;
  const boxWidth = useWideLayout ? 38 : 25;
  const boxHeight = useWideLayout ? 30 : 25;
  const xSpacing = useWideLayout ? 42 : 28;
  const ySpacing = useWideLayout ? 35 : 30;

  // Add points in a dynamic grid
  content.bullets?.forEach((point, index) => {
    const col = index % cols;
    const row = Math.floor(index / cols);
    const xPos = 10 + (col * xSpacing);
    const yPos = 30 + (row * ySpacing);

    // Add card background
    slide.addShape('rect', {
      x: `${xPos}%`,
      y: `${yPos}%`,
      w: `${boxWidth}%`,
      h: `${boxHeight}%`,
      fill: { color: brandGuide.primaryColor.replace('#', '') + '05' },
      radius: 8,
    });

    // Add number circle
    slide.addShape('ellipse', {
      x: `${xPos + 2}%`,
      y: `${yPos + 2}%`,
      w: '4%',
      h: '7%',
      fill: { color: brandGuide.primaryColor.replace('#', '') + '20' },
    });

    // Add number
    slide.addText((index + 1).toString(), {
      x: `${xPos + 2}%`,
      y: `${yPos + 2}%`,
      w: '4%',
      h: '7%',
      fontSize: 16,
      color: brandGuide.primaryColor.replace('#', ''),
      align: 'center',
      valign: 'middle',
      fontFace: brandGuide.fontFamily,
    });

    // Add point text
    slide.addText(point, {
      x: `${xPos + 2}%`,
      y: `${yPos + 12}%`,
      w: `${boxWidth - 4}%`,
      h: `${boxHeight - 14}%`,
      fontSize: useWideLayout ? 20 : 18,
      color: brandGuide.textColor.replace('#', ''),
      fontFace: brandGuide.fontFamily,
      valign: 'top',
      wrap: true,
    });
  });
};

// Define the slide
export const BulletSlide = defineSlide({
  id: SlideType.BULLET,
  name: 'Bullet Points',
  variants: {
    [SlideVariants.Bullet.VERTICAL]: {
      name: 'Vertical List',
      render: {
        webView: (content: SlideContent) => <VerticalLayout {...content} />,
        pptx: renderVerticalPPTX,
      },
    },
    [SlideVariants.Bullet.HORIZONTAL]: {
      name: 'Horizontal Cards',
      render: {
        webView: (content: SlideContent) => <HorizontalLayout {...content} />,
        pptx: renderHorizontalPPTX,
      },
    },
    [SlideVariants.Bullet.GRID]: {
      name: 'Grid Layout',
      render: {
        webView: (content: SlideContent) => <GridLayout {...content} />,
        pptx: renderGridPPTX,
      },
    },
  },
}); 