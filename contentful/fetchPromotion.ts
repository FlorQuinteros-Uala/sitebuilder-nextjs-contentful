import type { EntryCollection } from 'contentful';

import { client } from './client';
import type { TypePromotionSkeleton } from './generated-types/TypePromotion';

export async function fetchPromotion(
  slug: string
): Promise<EntryCollection<TypePromotionSkeleton>> {
  try {
    const promotion = await client.getEntries<TypePromotionSkeleton>({
      content_type: 'promotion',
      'fields.urlDeLaPromocion': slug,
      include: 10
    });

    // const promotion = response.items.length === 0 ? null : response.items[0];
    // const { fields } = promotion;
    // return fields;

    return promotion;
  } catch (err) {
    console.error('Error ', err);
  }
}
