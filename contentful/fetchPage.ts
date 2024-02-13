import type { Entry } from 'contentful';

import type { TypeLandingSkeleton } from '@/contentful/generated-types';

import { client } from './client';

type LandingEntry = Entry<TypeLandingSkeleton, undefined, string>;

export interface Landing {
  seo: {
    title: string;
    metaDescription: string;
    cannonical: string;
  };
  components: any;
}

const parseLanding = (landingEntry: LandingEntry): Landing | null => {
  if (!landingEntry) {
    return null;
  }

  return {
    seo: {
      title: landingEntry.fields.seoTitle ?? '',
      metaDescription: landingEntry.fields.seoMeta ?? '',
      cannonical:
        landingEntry.fields.canonical ??
        `https://www.uala.mx/${landingEntry.fields.landingUrl ?? ''}`
    },
    components: landingEntry.fields.landingContent?.reduce(
      (acc: object[], current) => {
        acc.push({
          //@ts-ignore
          ...current.fields,
          id: current.sys.id
        });

        return acc;
      },
      []
    )
  };
};

/**
 * @param {string} slug - El ID del elemento que se debe buscar.
 * @returns {Promise<{pageComponents: any, pageMetad  ata: {metaDesc: string, name: string, title: string, url: string}}>}
 * pageComponentes serán todos los componentes de la landing ordenados tal cual fue definido en Compose y pageMetadata será un objeto con los meta datos.
 */
export async function fetchPage(slug: string): Promise<Landing | null> {
  try {
    const { items } = await client.getEntries<TypeLandingSkeleton>({
      content_type: 'landing',
      'fields.landingUrl': slug,
      include: 10,
      limit: 1
    });

    const page = items[0];
    return parseLanding(page);
  } catch (err) {
    console.error(err);
    return null;
  }
}
