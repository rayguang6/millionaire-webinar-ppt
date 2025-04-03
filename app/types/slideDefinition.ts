// types/slideDefinition.ts
import { JSX } from 'react';
import { SlideContent } from './slide';
import { SlideType } from './slideType';

export interface SlideDefinition<T extends SlideType = SlideType> {
  id: T;
  name: string; // Keep this for UI display
  variants: {
    [key: string]: {
      name: string; // Keep variant names for UI selection
      render: {
        webView: (content: SlideContent) => JSX.Element;
        pptx: (content: SlideContent, slide: any) => Promise<void>;
      };
    };
  };
}

export function defineSlide<T extends SlideType>(
  definition: SlideDefinition<T>
): SlideDefinition<T> {
  return definition;
}