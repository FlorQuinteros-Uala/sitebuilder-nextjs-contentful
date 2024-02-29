import type { NavbarProps } from 'types/TypesNavbar';

export const navbarContentConvertion = (navbarContent): NavbarProps | null => {
  if (!navbarContent) {
    return null;
  }

  //Logo should be an next/image
  const navbarLogoConfig = navbarContent.logo.fields;
  const navbarLogoImgUrl = `https:${navbarLogoConfig?.file?.url}`;
  const navbarLogoLink = navbarContent?.enlaceLogo;

  //Action Button should be an next/link with Abra Button and set if it's external
  const showActionButton = navbarContent.habilitarBotnEnElNavbar;
  const actionButtonText = showActionButton
    ? navbarContent?.textoDelBotn ?? ''
    : '';
  const actionButtonLink = showActionButton
    ? navbarContent?.enlaceDelBotn
    : '#';

  //Map Navbar content to menu options
  const navbarOptions = navbarContent.navbarCategories.map((category) => {
    return {
      label: category.fields.nombreDeCategora,
      url: category.fields.enlace ?? null,
      sections:
        category.fields.items?.map(
          (item: {
            fields: {
              nombreDeVertical: any;
              renderizaElTitular: any;
              items: {
                fields: { nombre: any; enlace: any; muestraPill: any };
              }[];
            };
          }) => {
            return {
              label: item.fields.nombreDeVertical,
              hide: !item.fields.renderizaElTitular,
              subSections:
                item.fields.items?.map(
                  (subItem: {
                    fields: { nombre: any; enlace: any; muestraPill: any };
                  }) => {
                    return {
                      label: subItem.fields.nombre,
                      url: subItem.fields.enlace,
                      isNew: subItem.fields.muestraPill
                    };
                  }
                ) ?? []
            };
          }
        ) ?? []
    };
  });

  return {
    logo: {
      description: navbarLogoConfig?.description ?? '',
      href: navbarLogoLink,
      url: navbarLogoImgUrl,
      width: 151,
      height: 35
    },
    actionButton: showActionButton
      ? {
          text: actionButtonText,
          href: actionButtonLink
        }
      : null,
    menuOptions: {
      options: navbarOptions,
      position: 'center'
    }
  };
};
