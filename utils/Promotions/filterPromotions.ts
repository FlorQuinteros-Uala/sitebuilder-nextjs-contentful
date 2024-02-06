import type { Promotion } from 'types/TypesPromotion';

const filterConditionalHandlers: Record<
  string,
  (filter: string[], promotion: Promotion) => boolean
> = {
  promotionType: (filter, promotion) =>
    filter.includes(promotion.promotionType),
  commerceType: (filter, promotion) =>
    promotion.commerceType.some((value) => filter.includes(value)),
  days: (filter, promotion) =>
    promotion.days.some((value) => filter.includes(value)),
  payment: (filter, promotion) =>
    promotion.payment.pointsPayment === false &&
    promotion.payment.paymentMethods.methods.some((value) =>
      filter.includes(value)
    ),
  categories: (filter, promotion) =>
    promotion.categories.some((value) => filter.includes(value)),
  locations: (filter, promotion) =>
    promotion.locations.some((value) => filter.includes(value))
} as const;

const filterPromotions = (
  promotions: Promotion[],
  filters: Record<keyof Promotion, string[]>
) =>
  !Object.entries(filters).some(([, values]) => values.length > 0)
    ? promotions
    : promotions.filter(
        (promotion) =>
          !Object.entries(filters)
            .filter(([, values]) => values.length > 0)
            .some(
              ([filter, values]) =>
                !(
                  !values.length ||
                  (typeof filterConditionalHandlers[filter] === 'function'
                    ? filterConditionalHandlers[filter](values, promotion)
                    : values.includes(promotion[filter]))
                )
            )
      );

export { filterPromotions };
