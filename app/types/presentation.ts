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
    fontFamily: string;
    logoUrl?: string;
    backgroundColor: string;
}
  

export interface Presentation {
    slides: SlideInstance[];
    brandSettings: BrandSettings;
}
