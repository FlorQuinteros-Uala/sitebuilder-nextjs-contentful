export type Logo = {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type LegalImage = {
  id: string;
  src: string;
  alt: string;
  url?: string;
};

type VerticalItem = {
  id: string;
  name: string;
  url: string | null;
  tag: boolean;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  } | null;
};

export type Vertical = {
  id: string;
  title: string;
  order: number;
  withImages: boolean | null;
  url: string | null;
  items: VerticalItem[] | null;
};

export type FooterProps = {
  logo: Logo;
  claim: string;
  legalImages: LegalImage[];
  disclaimers: string;
  columns: Vertical[][];
};
