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
    
    /**
     * Image slide variants
     * @enum {string}
     * @property {string} DEFAULT - Image with title above
     * @property {string} FULL - Full screen image with optional overlay title
     * @property {string} LEFT - Image on left with content on right
     * @property {string} RIGHT - Content on left with image on right
     * @property {string} BACKGROUND - Image as background with content overlay
     */
    export enum Image {
      /** Image with title above */
      DEFAULT = 'default',
      /** Full screen image with optional overlay title */
      FULL = 'full',
      /** Image on left with content on right */
      LEFT = 'left',
      /** Content on left with image on right */
      RIGHT = 'right',
      /** Image as background with content overlay */
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
  
  /**
   * Type mapping to ensure each slide type only uses its appropriate variants
   * This provides type safety when selecting variants for different slide types
   */
  export type SlideVariantMap = {
    [SlideType.TITLE]: SlideVariants.Title;
    [SlideType.BULLET]: SlideVariants.Bullet;
    [SlideType.IMAGE]: SlideVariants.Image;
    [SlideType.STATEMENT]: SlideVariants.Statement;
    [SlideType.NUMBERED_LIST]: SlideVariants.NumberedList;
    [SlideType.COMPARISON]: SlideVariants.Comparison;
  };
  
  /**
   * Helper type to get the right variant enum for a slide type
   * @template T The slide type to get variants for
   */
  export type VariantFor<T extends SlideType> = SlideVariantMap[T];