import { Container } from '@uala/abra';
import { useBreakpoint } from '@uala/abra-utils';
import { VideoSection as VideoSectionComponent } from '@uala-labssupport/ui';

import type { TypeModuloVideoFields } from '@/contentful/generated-types/TypeModuloVideo';

enum Types {
  Thumbnail = 'Video Thumbnail',
  Animacion = 'Animacion en columna'
}

export const VideoSection = ({
  componentType,
  moduloTitle,
  moduloVideoDesktop,
  moduloVideoMobile,
  enlaceDelThumbnail,
  moduloDescription
}: TypeModuloVideoFields) => {
  const isDesktop = useBreakpoint('md');
  const isAnimation = componentType.toString() === Types.Animacion;

  const desktopSrc =
    moduloVideoDesktop && moduloVideoDesktop[0]?.fields?.file?.url;
  const mobileSrc =
    moduloVideoMobile && moduloVideoMobile[0]?.fields?.file?.url;

  const srcVideo = !isDesktop && mobileSrc ? mobileSrc : desktopSrc;

  const Component = (
    <VideoSectionComponent
      title={moduloTitle}
      content={moduloDescription}
      direction={isAnimation ? 'row' : 'column'}
      videoProps={{
        autoPlay: true,
        loop: true,
        muted: true,
        src: `https:${srcVideo}`,
        iframe: {
          allowFullScreen: false,
          src: enlaceDelThumbnail ?? '',
          title: moduloVideoDesktop[0].fields.description
        },
        videoType: moduloVideoDesktop[0].fields.file.contentType
      }}
    />
  );

  return (
    <>
      {isAnimation ? (
        Component
      ) : (
        <Container layout="100" as="section">
          {Component}
        </Container>
      )}
    </>
  );
};
