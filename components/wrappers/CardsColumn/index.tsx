import { Box, Container } from '@uala/abra';
import { CardsColumn as CardsColumnComponent } from '@uala-labssupport/ui';

import type { CardsColumnProps } from '@/types';

export const CardsColumn = ({
  moduloTitle,
  moduloDescription,
  moduloColumn,
  moduloCards,
  moduloGradient,
  moduloBackground,
  fondoGradientInferior,
  moduloColor,
  isStatic,
  loadMoreCards,
  moduloCta,
  moduloLink
}) => {
  let isPR = false;

  const cardsContentConverter = ({ fields, sys: { id } }) => {
    if (fields.componentName) {
      isPR = fields.componentName === 'cardPR';
      isStatic =
        fields.componentName === 'cardPR' ||
        fields.componentName.includes('Estática');
    }
    const ctaCard =
      fields.cardCta && fields.cardLink
        ? { title: fields.cardCta, url: fields.cardLink }
        : null;

    return {
      title: fields.cardTitle,
      description: fields.cardDescription,
      icon: fields.cardIcon?.fields?.file,
      hasBtn: fields.cardLinkAvailable,
      cta: ctaCard,
      date: fields.cardDate,
      id
    };
  };

  const props: CardsColumnProps = {
    title: moduloTitle,
    description: moduloDescription,
    columnAmount: moduloColumn,
    cards: moduloCards?.map(cardsContentConverter),
    bgColor: moduloGradient ? 'transparent' : moduloBackground,
    textColor: moduloColor,
    isPR: isPR,
    isStatic: isStatic,
    cta:
      loadMoreCards && moduloCta && moduloLink
        ? { url: moduloLink, title: moduloCta }
        : null
  };
  return (
    <Box
      as="section"
      css={{
        background: moduloGradient
          ? `linear-gradient(180deg, ${moduloBackground} 25.32%, ${fondoGradientInferior} 85.95%)`
          : moduloBackground
      }}
    >
      <Container layout="100">
        <CardsColumnComponent {...props} />
      </Container>
    </Box>
  );
};
