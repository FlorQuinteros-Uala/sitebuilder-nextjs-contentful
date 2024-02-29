import { PromoCard } from '@uala-labssupport/ui';

import type { TypePromotionFields } from '@/contentful/generated-types/TypePromotion';
import type { ContentfulStruct } from '@/contentful/generated-types/TypeTemp';

export const Promotion = ({
  previewTitle,
  previewDescription,
  isFeaturedPromotion,
  imagenesDestacada,
  promotionLogo,
  urlDeLaPromocion
}: TypePromotionFields) => {
  return (
    <PromoCard
      title={previewTitle || ''}
      description={previewDescription}
      isFeatured={isFeaturedPromotion}
      imageDesktop={{
        url: imagenesDestacada[0]?.fields?.file?.url,
        alt: imagenesDestacada[0]?.title
      }}
      imageMobile={{
        url: imagenesDestacada[1]?.fields?.file?.url,
        alt: imagenesDestacada[1]?.title
      }}
      logo={{
        url: (promotionLogo as unknown as ContentfulStruct)?.fields.file?.url,
        alt: (promotionLogo as unknown as ContentfulStruct)?.fields.title
      }}
      cta={{
        title: 'Ver más',
        url: urlDeLaPromocion
      }}
    />
  );
};
