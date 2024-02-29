import type { TypeCardsFields } from '@/contentful/generated-types/TypeCards';

type CTA = {
  title: string;
  url: string;
};

export type CardsColumnProps = {
  title?: string;
  description?: string;
  columnAmount?: number;
  cards: TypeCardsFields[];
  bgColor?: string;
  textColor?: string;
  isPR?: boolean;
  cta?: CTA;
  isStatic?: boolean;
};
