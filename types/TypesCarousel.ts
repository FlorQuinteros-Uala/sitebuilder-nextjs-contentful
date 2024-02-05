import type { ResponsiveObject, CustomArrowProps } from 'react-slick';

export type ArrowProps = {
  color:
    | 'default'
    | 'dark'
    | 'light'
    | 'primary'
    | 'error'
    | 'warning'
    | 'success';
  changePosition: boolean;
} & CustomArrowProps;

export interface CarouselProps {
  children?: React.ReactNode[];
  arrows?: boolean;
  dots?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  gap?: number;
  loop?: boolean;
  indicatorsColor?: {
    dots?: string;
    arrows?:
      | 'default'
      | 'dark'
      | 'light'
      | 'primary'
      | 'error'
      | 'warning'
      | 'success';
  };
  adaptiveHeight?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
  responsive?: ResponsiveObject[];
  center?: boolean;
  customSlide?: boolean;
}
