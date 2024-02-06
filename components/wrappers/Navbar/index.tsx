import { Navbar as NavbarComponent } from '@uala-labssupport/ui';
import React from 'react';
import type { NavbarProps } from 'types/TypesNavbar';

import { navbarContentConvertion } from '@/contentful/parsers';

const MobileMenuItem = () => (
  <span
    style={{
      color: 'var(--blue-70, #022A9A)',
      fontSize: '1.125rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '1.5625rem',
      textDecorationLine: 'underline'
    }}
  >
    Menú
  </span>
);

export const Navbar = ({ componentName, ...rest }) => {
  const { logo, menuOptions, actionButton }: NavbarProps =
    navbarContentConvertion(rest);

  return (
    <NavbarComponent
      logo={logo}
      menuOptions={menuOptions}
      actionButton={actionButton}
      mobileMenuItem={<MobileMenuItem />}
    />
  );
};
