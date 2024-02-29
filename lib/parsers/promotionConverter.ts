import type { ContentfulStruct } from '../generated-types/TypeTemp';

export const promotionSpecsContentConverter = (
  promotionSpecs: ContentfulStruct[]
) => {
  return promotionSpecs.map(({ fields, sys: { id } }) => {
    return {
      id,
      title: fields.titularDescuento,
      description: fields.previewDescripcion ?? fields.PromotionDescription,
      cta: fields.isCta
        ? { text: fields.ButtonText, href: fields.ButtonHref }
        : null,
      expandCardText: fields.Cardexpand,
      paymentMethods: fields.promotionPayment,
      days: fields.PromotionDays,
      place: fields.PromotionPlace,
      date: fields.PromotionDate,
      cashback: fields.PromotionCashback,
      cashdate: fields.PromotionCashDate,
      availability: (fields.PromotionDisponibilidad as ContentfulStruct[]).map(
        ({ fields }) => fields.Location
      ),
      legalDisclaimer: fields.promotionLegal
    };
  });
};
