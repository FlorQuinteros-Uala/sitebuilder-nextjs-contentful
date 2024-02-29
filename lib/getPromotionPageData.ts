import { fetchPromotion } from './fetchPromotion';
import type { ContentfulStruct } from './generated-types/TypeTemp';
import {
  imageContentConverter,
  promotionSpecsContentConverter
} from './parsers';

export async function getPromotionPageData(slug: string) {
  const data = {
    id: null,
    seo: null,
    extraPromotion: null,
    logo: null,
    specs: null
  };

  const promotionData = await fetchPromotion(slug);

  if (
    promotionData &&
    promotionData.items.length > 0 &&
    Object.keys(promotionData.items[0].fields).length > 0
  ) {
    const { id } = promotionData.items[0].sys;
    data.id = id;
    const {
      PromotionSeoTitle,
      promotionSeoDescription,
      promotionLogo,
      PromotionExtra,
      PromotionSpecs,
      urlDeLaPromocion
    } = promotionData.items[0].fields;

    data.seo =
      {
        title: PromotionSeoTitle ?? '',
        metaDescription: promotionSeoDescription ?? '',
        cannonical: urlDeLaPromocion
          ? `https://www.uala.com.mx/promociones/${urlDeLaPromocion}`
          : null
      } || null;
    data.extraPromotion = PromotionExtra || null;
    data.logo =
      imageContentConverter(promotionLogo as ContentfulStruct) || null;
    data.specs =
      promotionSpecsContentConverter(PromotionSpecs as ContentfulStruct[]) ||
      null;
  }

  return {
    data: data
  };
}
