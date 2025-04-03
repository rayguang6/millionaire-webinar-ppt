// File for types


import { SlideInstance } from "./slide";

// Types for the webinar input
export interface WebinarInput {
    whatIDo: string;
    resultsIBring: string;
}

// Types for the webinar content (each of the slides)
export interface WebinarContent {
    mainOutcome: string;
    differentReasons: string[];
    targetAudience: string;
    painPoints: string[];
    secrets: string[];
}

export interface BrandSettings {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;

    headingColor: string;
    textColor: string;
    subtextColor: string;

    fontFamily: string;
    headingFontFamily: string;

    fontSizeBase: string;
    fontSizeSmall: string;
    fontSizeLarge: string;
    
    h1Size: string;
    h2Size: string;
    h3Size: string;
    h4Size: string;
}
  

export interface Presentation {
    slides: SlideInstance[];
    brandSettings: BrandSettings;
}
