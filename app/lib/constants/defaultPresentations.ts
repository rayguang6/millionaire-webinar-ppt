import { SlideInstance } from '@/app/types/slide';
import { SlideType, SlideVariants } from '@/app/types/slideType';

export const defaultSlides: SlideInstance[] = [
  {
    id: 'title-1',
    type: SlideType.TITLE,
    variant: SlideVariants.Title.DEFAULT,
    content: {
      title: 'Welcome to the Webinar',
      subtitle: 'Your Path to Success'
    },
    order: 0,
  },
  {
    id: 'bullet-1',
    type: SlideType.BULLET,
    variant: SlideVariants.Bullet.DEFAULT,
    content: {
      title: 'Key Points',
      bullets: [
        'First key point',
        'Second key point',
        'Third key point'
      ]
    },
    order: 1,
  },
  {
    id: 'image-1',
    type: SlideType.IMAGE,
    variant: SlideVariants.Image.DEFAULT,
    content: {
      title: 'Visual Overview',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Port_and_lighthouse_overnight_storm_with_lightning_in_Port-la-Nouvelle.jpg/1200px-Port_and_lighthouse_overnight_storm_with_lightning_in_Port-la-Nouvelle.jpg',
    },
    order: 2,
  }
]; 