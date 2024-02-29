import type {
  TypeFooterSkeleton,
  TypeNavbarSkeleton
} from 'lib/generated-types';

import { client } from './client';
import { SITE_ID } from './constants';

const fetchFooter = async (): Promise<Record<string, unknown> | null> => {
  try {
    const { items } = await client.getEntries<TypeFooterSkeleton>({
      content_type: 'footer',
      'fields.sitioWeb.sys.id': SITE_ID,
      include: 10,
      limit: 1
    });

    return items[0].fields;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const fetchNavbar = async (): Promise<Record<string, unknown> | null> => {
  try {
    const { items } = await client.getEntries<TypeNavbarSkeleton>({
      content_type: 'navbar',
      'fields.navbarWeb.sys.id': SITE_ID,
      include: 10,
      limit: 1
    });

    return items[0].fields;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchFooter, fetchNavbar };
