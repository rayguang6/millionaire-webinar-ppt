import { SlideInstance } from '@/app/types/slide';
import { SlideType, SlideVariants } from '@/app/types/slideType';

export const defaultSlides: SlideInstance[] = [
  {
    id: 'centered',
    type: SlideType.TITLE,
    variant: SlideVariants.Title.CENTERED,
    content: {
      title: 'AI PowerPoint Generator - CENTERED',
      subtitle: 'Create beautiful presentations in seconds',
      // presenter: 'Demo User',
    },
    order: 0,
  },
  {
    id: '1',
    type: SlideType.TITLE,
    variant: SlideVariants.Title.DEFAULT,
    content: {
      title: 'AI PowerPoint Generator DEFAULT',
      subtitle: 'Create beautiful presentations in seconds',
      // presenter: 'Demo User',
    },
    order: 0,
  },
  {
    id: 'IMAGE',
    type: SlideType.IMAGE,
    variant: SlideVariants.Image.DEFAULT,
    content: {
      title: 'IMAGE SLIDES - DEFAULT',
      imageUrl: '/images/placeholder.png',
      imageStyle: {
        objectFit: 'cover',
        opacity: 0.9
      }
    },
    order: 1,
  },
  {
    id: '2',
    type: SlideType.IMAGE,
    variant: SlideVariants.Image.LEFT,
    content: {
      title: 'Minimalist Design - LEFT',
      imageUrl: '/images/placeholder.png',
      imageStyle: {
        objectFit: 'cover',
        opacity: 0.9
      }
    },
    order: 1,
  },
  {
    id: '2',
    type: SlideType.IMAGE,
    variant: SlideVariants.Image.RIGHT,
    content: {
      title: 'Minimalist Design - RIGHT',
      imageUrl: '/images/placeholder.png',
      imageStyle: {
        objectFit: 'cover',
        opacity: 0.9
      }
    },  
    order: 1,
  },
  {
    id: '2',
    type: SlideType.IMAGE,
    variant: SlideVariants.Image.BACKGROUND,
    content: {
      title: 'Minimalist Design - BACKGROUND',
      imageUrl: '/images/placeholder.png',
      imageStyle: {
        objectFit: 'cover',
        opacity: 0.9
      }
    },
    order: 1,
  },
  {
    id: '2',
    type: SlideType.IMAGE,
    variant: SlideVariants.Image.FULL,
    content: {
      title: 'Minimalist Design - FULL',
      imageUrl: '/images/placeholder.png',
      imageStyle: {
        objectFit: 'cover',
        opacity: 0.9
      }
    },  
    order: 1,
  },
  {
    id: '2',
    type: SlideType.BULLET,
    variant: SlideVariants.Bullet.HORIZONTAL,
    content: {
      title: 'Minimalist Design - BULLET',
      bullets: [
        'Bullet 1',
        'Bullet 2',
        'Bullet 3'
      ]
    },  
    order: 1,
  },
]; 