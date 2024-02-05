import type {
  FooterProps,
  LegalImage,
  Logo,
  Vertical
} from 'types/TypesFooter';

export const footerContentCoverter = (content): FooterProps => {
  const footerLogo: Logo = {
    id: content?.logo?.sys?.id,
    url: `https:${content?.logo?.fields?.file?.url}` || '',
    alt: content?.logo?.fields?.description || '',
    width: 55,
    height: 27
  };

  const legalImages: LegalImage[] = content?.footerLegalImages.map(
    ({ fields, sys }) => {
      return {
        id: sys.id,
        src: `https:${fields.file.url}`,
        alt: fields.title,
        url: fields.description
      };
    }
  );

  const verticals: Vertical[] =
    content?.footerVerticals?.map(({ fields, sys }) => {
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
                    src: fields.imagenDelItem?.fields?.file?.url || '',
                    alt: fields.imagenDelItem?.fields?.description || ''
                  }
                : null
            };
          }) ?? []
      };
    }) ?? [];

  return {
    logo: footerLogo,
    claim: content?.claimMarca,
    legalImages,
    disclaimers: content?.footerDisclaimer || '',
    columns: Object.values(
      verticals.reduce((acc, current) => {
        acc[current.order] = acc[current.order] ?? [];
        acc[current.order].push(current);
        return acc;
      }, {})
    )
  };
};
