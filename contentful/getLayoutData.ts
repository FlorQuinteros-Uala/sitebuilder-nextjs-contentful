import {
  footerContentCoverter,
  navbarContentConvertion
} from '@/contentful/parsers';
import { client } from './client';
import { SITE_ID } from './constants';
import type {
  TypeNavbarSkeleton,
  TypeFooterSkeleton
} from '@/contentful/generated-types';

import type { NavbarProps, FooterProps } from '@/types';

const fetchFooter = async (): Promise<FooterProps | null> => {
  try {
    const { items } = await client.getEntries<TypeFooterSkeleton>({
      content_type: 'footer',
      'fields.sitioWeb.sys.id': SITE_ID,
      include: 10,
      limit: 1
    });

    const footer = items[0];

    return footerContentCoverter(footer);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const fetchNavbar = async (): Promise<NavbarProps | null> => {
  try {
    const { items } = await client.getEntries<TypeNavbarSkeleton>({
      content_type: 'navbar',
      'fields.navbarWeb.sys.id': SITE_ID,
      include: 10,
      limit: 1
    });

    const navbar = items[0];
    return navbarContentConvertion(navbar);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { fetchFooter, fetchNavbar };
