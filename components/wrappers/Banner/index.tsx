import { Container } from '@uala/abra';
import { Banner as BannerComponent } from '@uala-labssupport/ui';

export const Banner = ({
  titulo,
  prrafo,
  BannerFileMobile,
  bannerFileDekstop,
  cta,
  bannerHref
}) => {
  return (
    <Container layout="100">
      <BannerComponent
        title={titulo}
        cta={{ title: cta, url: bannerHref }}
        imageDesktop={{
          url: bannerFileDekstop?.fields?.file?.url,
          alt: bannerFileDekstop?.fields?.description
        }}
        imageMobile={{
          url: BannerFileMobile?.fields?.file?.url,
          alt: BannerFileMobile?.fields?.description
        }}
        inverted
        description={prrafo}
      />
    </Container>
  );
};
