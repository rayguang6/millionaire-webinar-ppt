// Define all possible slide types
export enum SlideType {
    TITLE = 'title',
    BULLET = 'bullet',
    IMAGE = 'image',
    STATEMENT = 'statement',
    NUMBERED_LIST = 'numbered-list',
    COMPARISON = 'comparison',
  }
  
  // Define all variants in a namespace to group them logically
  export namespace SlideVariants {
    export enum Title {
      DEFAULT = 'default',
      CENTERED = 'centered',
      WITH_SUBTITLE = 'with-subtitle',
    }
    
    export enum Bullet {
      DEFAULT = 'default',
      VERTICAL = 'vertical',
      HORIZONTAL = 'horizontal',
      GRID = 'grid',
      BOX = 'box',
    }
    
    export enum Image {
      DEFAULT = 'default',
      FULL = 'full',
      LEFT = 'left',
      RIGHT = 'right',
      BACKGROUND = 'background',
    }
    
    export enum Statement {
      DEFAULT = 'default',
      CENTERED = 'centered',
      HIGHLIGHTED = 'highlighted',
    }
    
    export enum NumberedList {
      DEFAULT = 'default',
      VERTICAL = 'vertical',
      HORIZONTAL = 'horizontal',
      STEPS = 'steps',
    }
    
    export enum Comparison {
      DEFAULT = 'default',
      SIDE_BY_SIDE = 'side-by-side',
      BEFORE_AFTER = 'before-after',
    }
  }
  
  // Type mapping to ensure each slide type only uses its appropriate variants
  export type SlideVariantMap = {
    [SlideType.TITLE]: SlideVariants.Title;
    [SlideType.BULLET]: SlideVariants.Bullet;
    [SlideType.IMAGE]: SlideVariants.Image;
    [SlideType.STATEMENT]: SlideVariants.Statement;
    [SlideType.NUMBERED_LIST]: SlideVariants.NumberedList;
    [SlideType.COMPARISON]: SlideVariants.Comparison;
  };
  
  // Helper type to get the right variant enum for a slide type
  export type VariantFor<T extends SlideType> = SlideVariantMap[T];