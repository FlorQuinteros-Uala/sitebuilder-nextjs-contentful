import {
  Hero as HeroComponent,
  Modal as ModalHero
} from '@uala-labssupport/ui';
import { DownloadAppButton } from 'components/DownloadButton';
import Image from 'next/image';
import { useState } from 'react';

import type { PropsComp } from '@/types';

enum HeroType {
  Home = 'Hero Home',
  ProductLanding = 'Hero landing producto',
  Landing = 'Hero Landing'
}

export const Hero = ({
  componentName,
  titulo,
  descripcion,
  laImagenLlevaAnimacin,
  llevaFondoDeColor,
  colorDeFondo,
  llevaBotn,
  textoDelBotn,
  urlDelBotn,
  colorDeBoton,
  colorTextoBoton,
  imagenPrincipal,
  imagen,
  llevaAntettulo,
  antetitulo,
  abreModal,
  cargarModal,
  colorDeTipografa
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dataLayerInfo = {
    event: 'trackEvent',
    eventCategory: 'Home',
    eventAction: 'Primera Pantalla',
    eventLabel: 'Boton Descargar'
  };

  const transparencyImage =
    laImagenLlevaAnimacin &&
    imagenPrincipal &&
    imagenPrincipal[1]?.fields?.file?.url;

  const imageMain = imagenPrincipal && imagenPrincipal[0]?.fields?.file;
  const imageHeroProduct = imagen && imagen?.fields?.file?.url;

  const btnProps = llevaBotn && {
    text: textoDelBotn,
    url: urlDelBotn
  };

  const section = llevaAntettulo && antetitulo;

  const general: PropsComp = {
    isHome: false,
    roundedImage: true,
    curvedImage: false,
    mobileInverted: true,
    title: titulo,
    paragraph: descripcion,
    typographyColor: colorDeTipografa,
    section: section,
    darkBg: llevaFondoDeColor,
    bgColor: colorDeFondo,
    hasButton: llevaBotn,
    transparencyImage,
    isFullImage: componentName === HeroType.Landing,
    brandUala: true,
    image: (
      <Image
        src={`https:${imageMain.url}`}
        alt={imageMain.description}
        width={imageMain.details?.image?.width}
        height={imageMain.details?.image?.height}
        priority
      />
    ),
    bgImageSrc: imageMain.url,
    buttonBg: '#022A9B',
    btnProps,
    buttonWidth: '250px',
    modalButton: abreModal ? (
      <DownloadAppButton
        mobileLink={urlDelBotn}
        dataLayerContent={dataLayerInfo}
        customCss={{
          margin: '1.25rem 0',
          backgroundColor: colorDeBoton,
          color: colorTextoBoton
        }}
        cbOpenModal={() => setIsOpenModal(true)}
        openModal={abreModal}
      >
        {textoDelBotn}
      </DownloadAppButton>
    ) : null
  };

  const props: PropsComp =
    componentName === HeroType.Home
      ? {
          ...general,
          isHome: true,
          mobileInverted: false,
          roundedImage: false,
          isFullImage: true
        }
      : componentName === HeroType.ProductLanding
      ? {
          ...general,
          roundedImage: true,
          isFullImage: true,
          bgImageSrc: imageHeroProduct ? `https:${imageHeroProduct}` : '',
          curvedImage: true
        }
      : {
          ...general,
          isFullImage: false
        };

  const propsModal = {
    title: cargarModal?.fields?.ttulo ?? '',
    paragraph: cargarModal?.fields?.descripcion,
    image: {
      src: cargarModal?.fields?.imagen?.fields?.file.url,
      alt: cargarModal?.fields?.imagen?.fields?.description
    },
    isOpen: isOpenModal,
    onClose: () => setIsOpenModal(false)
  };

  return (
    <>
      <HeroComponent {...props} />
      {abreModal && <ModalHero {...propsModal} />}
    </>
  );
};
