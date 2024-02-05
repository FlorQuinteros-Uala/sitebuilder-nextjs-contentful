import type { CSS } from '@stitches/react';
import type { Settings } from 'react-slick';
import type { CarouselProps } from './TypesCarousel';

export interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode[];
  cardsToShow?: number;
  css?: {
    text?: CSS;
    wrapper?: CSS;
    innerContainer?: CSS;
  };
  carouselSettings?: CarouselProps & Settings;
}
