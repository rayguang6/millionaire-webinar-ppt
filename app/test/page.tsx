// pages/PresentationPage.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Presentation } from '../types/presentation';
import { SlideGenerator } from '../utils/slideGenerator';
import { SlideType, SlideVariants } from '../types/slideType';
import '../slides'; // Import to ensure slides are registered

// Sample presentation data
const defaultPresentation: Presentation = {
  slides: [
    {
      id: '1',
      type: SlideType.TITLE,
      variant: SlideVariants.Title.CENTERED,
      content: {
        title: 'AI PowerPoint Generator',
        subtitle: 'Create beautiful presentations in seconds',
        // presenter: 'Demo User',
      },
      order: 0,
    },
    // Add more slides as needed
  ],
  brandSettings: {
    primaryColor: '#3366CC',
    secondaryColor: '#FF9900',
    fontFamily: 'Arial',
  },
};

export default function PresentationPage() {
  const [slides, setSlides] = useState<React.ReactElement[]>([]);
  const [presentation] = useState<Presentation>(defaultPresentation);

  useEffect(() => {
    // Generate slides on component mount
    const generator = new SlideGenerator();
    const renderedSlides = generator.generateWebView(presentation);
    setSlides(renderedSlides as React.ReactElement[]);
  }, [presentation]);

  const handleExport = async () => {
    try {
      const generator = new SlideGenerator();
      const pptx = await generator.generatePPTX(presentation);
      await pptx.writeFile({ fileName: 'presentation.pptx' });
    } catch (error) {
      console.error('Failed to export presentation:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Presentation Preview</h1>
          <button
            onClick={handleExport}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Export to PowerPoint
          </button>
        </div>
        
        <div className="space-y-8">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              style={{ aspectRatio: '16/9' }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}