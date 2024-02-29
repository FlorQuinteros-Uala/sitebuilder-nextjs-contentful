import type {
  FooterProps,
  LegalImage,
  Logo,
  Vertical
} from 'types/TypesFooter';

export const footerContentCoverter = (footerContent): FooterProps => {
  const footerLogo: Logo = {
    id: footerContent?.logo?.sys?.id,
    url: `https:${footerContent?.logo?.fields?.file?.url}` || '',
    alt: footerContent?.logo?.fields?.description || '',
    width: 55,
    height: 27
  };

  const legalImages: LegalImage[] = footerContent?.footerLegalImages.map(
    ({ fields, sys }) => {
      return {
        id: sys.id,
        src: `https:${fields.file.url}`,
        alt: fields.title,
        url: fields.description ?? ''
      };
    }
  );

  const verticals: Vertical[] =
    footerContent?.footerVerticals?.map(({ fields, sys }) => {
      return {
        id: sys.id,
        title: fields.nombreDeVertical,
        order: fields.nmeroDeColumna,
        withImages: fields.esUnaVerticalConImgenes ?? null,
        url: fields.poseeEnlacePropio ? fields.url : null,
        items:
          fields?.footerItems?.map(({ fields, sys }) => {
            return {
              id: sys.id,
              name: fields.nombreDelItem,
              url: fields.url ?? null,
              tag: fields.llevaTag,
              image: fields.esUnItemConImagen
                ? {
                    src:
                      `https:${fields.imagenDelItem?.fields?.file?.url}` || '',
                    alt: fields.imagenDelItem?.fields?.description || '',
                    width:
                      fields.imagenDelItem?.fields?.file?.details?.image.width,
                    height:
                      fields.imagenDelItem?.fields?.file?.details?.image.height
                  }
                : null
            };
          }) ?? []
      };
    }) ?? [];

  return {
    logo: footerLogo,
    claim: footerContent?.claimMarca,
    legalImages,
    disclaimers: footerContent?.footerDisclaimer || '',
    columns: Object.values(
      verticals.reduce((acc, current) => {
        acc[current.order] = acc[current.order] ?? [];
        acc[current.order].push(current);
        return acc;
      }, {})
    )
  };
};
