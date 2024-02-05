import { Box } from '@uala/abra';
import { useBreakpoint } from '@uala/abra-utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';

import Carousel from 'components/Carousel';

const MainSlider = ({ sliderContent }) => {
  const isDesktop = useBreakpoint('lg');

  return (
    <Carousel
      slidesToShow={1}
      arrows={isDesktop}
      dots
      adaptiveHeight={true}
      indicatorsColor={{ dots: '#022A9B', arrows: 'primary' }}
      autoplay={true}
      autoplaySpeed={5000}
      customSlide={false}
    >
      {!!sliderContent &&
        sliderContent.map(
          ({
            fields: {
              BannerFileMobile,
              bannerFileDekstop,
              bannerHref,
              bannerName,
              bannerWithLink
            },
            sys: { id }
          }) => {
            const bannerProps = isDesktop
              ? {
                  src: `https:${bannerFileDekstop?.fields?.file?.url}`,
                  width: bannerFileDekstop?.fields?.file?.details?.image?.width,
                  height:
                    bannerFileDekstop?.fields?.file?.details?.image?.height
                }
              : {
                  src: `https:${BannerFileMobile?.fields?.file?.url}`,
                  width: BannerFileMobile?.fields?.file?.details?.image?.width,
                  height: BannerFileMobile?.fields?.file?.details?.image?.height
                };

            return (
              <Fragment key={id}>
                {bannerWithLink ? (
                  <Link href={bannerHref} className="w-full">
                    <Image {...bannerProps} alt={bannerName} />
                  </Link>
                ) : (
                  <Box className="w-full">
                    <Image {...bannerProps} alt={bannerName} />
                  </Box>
                )}
              </Fragment>
            );
          }
        )}
    </Carousel>
  );
};

export default MainSlider;
