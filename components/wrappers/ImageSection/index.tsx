import {
  ImageSection as ImageSectionComponent,
  PromoCard
} from '@uala-labssupport/ui';
import { ModuloSlider } from 'components/Sliders';

import { ModuleType, Props } from '@/types';

export const ImageSection = ({
  colorDeTexto,
  colorDeFondo,
  imagen,
  itemsDelModulo,
  llevaBotn,
  textoALaIzquierda,
  tipoContenido,
  ttulo,
  prrafo,
  textoDelBoton,
  urlDelBoton,
  invertirOrden,
  items,
  colorDeTipografa,
  tipoDeMdulo,
  parrafo,
  cta,
  url
}) => {
  const moduleItems =
    tipoContenido === ModuleType.Items &&
    itemsDelModulo.map(({ fields }) => {
      return {
        icon: fields?.icono?.fields?.file?.url,
        alt: fields?.description || '',
        detail: fields?.descripcin
      };
    });

  const callToAction = llevaBotn && {
    copy: textoDelBoton,
    url: urlDelBoton
  };

  const general: Props = {
    title: ttulo,
    reverse: textoALaIzquierda,
    titleColor: colorDeTexto,
    backgroundColor: colorDeFondo,
    textColor: colorDeTexto,
    roundedImage: true,
    image: {
      url: imagen?.fields?.file?.url || '',
      alt: imagen?.fields?.description || ''
    }
  };

  const props: Props =
    tipoContenido === ModuleType.Paragraph
      ? {
          ...general,
          content: prrafo,
          callToAction
        }
      : {
          ...general,
          content: moduleItems
        };

  return (
    <>
      {/* TO-DO: reemplazar el value de cardsToShow por la cantidad de cards que correspondan cuando ese dato llegue desde Contentful */}
      {tipoDeMdulo === ModuleType.Slider && (
        <ModuloSlider
          title={ttulo}
          cardsToShow={2}
          css={{
            text: {
              color: colorDeTexto || colorDeTipografa || '#3A3A3A'
            },
            wrapper: {
              background: colorDeFondo,
              marginTop: 80
            },
            innerContainer: {
              paddingTop: '60px'
            }
          }}
          carouselSettings={{
            arrows: false,
            dots: true,
            loop: true,
            center: false
          }}
        >
          {items.map(
            ({
              fields: {
                isFeaturedPromotion,
                previewDescription,
                previewTitle,
                promotionLogo,
                imagenesDestacada,
                promotionweb
              },
              sys: { id }
            }) => {
              return (
                <PromoCard
                  key={id}
                  title={previewTitle || ''}
                  description={previewDescription}
                  isFeatured={isFeaturedPromotion}
                  imageDesktop={{
                    url: imagenesDestacada[0]?.fields?.file?.url,
                    alt: imagenesDestacada[0]?.title
                  }}
                  imageMobile={{
                    url: imagenesDestacada[1]?.fields?.file?.url,
                    alt: imagenesDestacada[1]?.title
                  }}
                  logo={{
                    url: promotionLogo?.fields?.file?.url,
                    alt: promotionLogo?.title
                  }}
                  cta={{
                    title: 'Ver más',
                    url: promotionweb?.fields?.webName
                  }}
                />
              );
            }
          )}
        </ModuloSlider>
      )}
      {tipoDeMdulo !== ModuleType.Slider && (
        <ImageSectionComponent {...props} />
      )}
    </>
  );
};
