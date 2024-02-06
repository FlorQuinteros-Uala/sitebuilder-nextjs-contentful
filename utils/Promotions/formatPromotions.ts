import type { Promotion } from 'types/TypesPromotion';

export const formatPromotions = (promotions): Promotion[] => {
  return promotions.map(
    ({
      fields: {
        previewTitle,
        previewDescription,
        isFeaturedPromotion,
        isUalaMas,
        promotionLogo,
        cantidadDePuntos,
        PromotionCategory,
        promotionName,
        nivelUal,
        urlDeLaPromocion,
        PromotionSpecs
      },
      sys: { id, updatedAt }
    }) => {
      const paymentMethods = {
        pointsPayment: false,
        paymentMethods: {
          title: 'Métodos de pago',
          methods: PromotionSpecs
            ? Array.from(
                new Set(
                  PromotionSpecs.map(
                    ({ fields }) => fields.promotionPayment
                  ).flat()
                )
              )
            : []
        }
      };

      const payment = !isUalaMas
        ? paymentMethods
        : {
            pointsPayment: true,
            points: {
              title: 'Puntos',
              amount: String(cantidadDePuntos)
            }
          };

      const categories =
        PromotionCategory.map(({ fields }) => fields.Category) ?? null;

      return {
        id,
        name: promotionName,
        slug: urlDeLaPromocion,
        lastUpdate: updatedAt,
        isFeatured: isFeaturedPromotion,
        promotionType: isUalaMas ? 'Canjes de puntos Ualá+' : 'Descuento',
        isUalaMas,
        card: {
          title: previewTitle,
          description: previewDescription
        },
        logo: {
          src: promotionLogo.fields.file.url ?? '',
          alt: promotionLogo.fields.description ?? ''
        },
        categories,
        level: nivelUal ?? null,
        payment,
        locations:
          Array.from(
            new Set(
              PromotionSpecs.map(({ fields: { PromotionDisponibilidad } }) =>
                PromotionDisponibilidad.map(({ fields }) => fields.Location)
              ).flat()
            )
          ) ?? null,
        days:
          Array.from(
            new Set(
              PromotionSpecs.map(({ fields }) => fields.PromotionDays).flat()
            )
          ) ?? null,
        commerceType:
          Array.from(
            new Set(
              PromotionSpecs.map(({ fields }) => fields.PromotionPlace).flat()
            )
          ) ?? null
      };
    }
  );
};
