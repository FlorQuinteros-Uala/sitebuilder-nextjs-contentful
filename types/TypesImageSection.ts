export type Props = {
  title: string;
  image?: {
    url: string;
    alt: string;
  };
  callToAction?: {
    copy: string;
    url: string;
  };
  roundedImage?: boolean;
  content?: any;
  reverse?: boolean;
  backgroundColor?: string;
  titleColor?: string;
};

export enum ModuleType {
  Items = 'Título + items + imagen',
  Paragraph = 'Título + párrafo + imagen',
  Slider = 'Titular + Párrafo + Slider de cards'
}
