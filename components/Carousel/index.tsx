/* eslint-disable @typescript-eslint/no-explicit-any */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box } from '@uala/abra';
import React from 'react';
import Slider, { type Settings } from 'react-slick';
import type { CarouselProps } from 'types/TypesCarousel';

import { ArrowNext, ArrowPrev } from './Arrows';

const CustomSlide = (props: any) => {
  return (
    <Box
      {...props}
      css={{
        '& > *': { margin: `0 calc(${props.gap}px / 2)` },
        '@md': {
          display: props.center ? 'flex !important' : 'block',
          justifyContent: 'center'
        }
      }}
    ></Box>
  );
};

const Carousel = ({
  children,
  arrows = true,
  dots = true,
  slidesToShow = 3,
  slidesToScroll = 1,
  gap = 16,
  loop = false,
  indicatorsColor = {
    dots: '#022A9B',
    arrows: 'primary'
  },
  adaptiveHeight = false,
  autoplay,
  autoplaySpeed,
  pauseOnHover,
  responsive,
  center = true,
  customSlide = true
}: CarouselProps) => {
  const settings: Settings = {
    accessibility: true,
    dots: dots,
    arrows: arrows,
    infinite: loop,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    adaptiveHeight: adaptiveHeight,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: pauseOnHover,
    dotsClass: `slick-dots dots_custom`,
    customPaging: () => (
      <span className="dot" style={{ background: indicatorsColor.dots }}></span>
    ),
    nextArrow: (
      <ArrowNext
        color={indicatorsColor.arrows}
        changePosition={slidesToShow === 1}
      />
    ),
    prevArrow: (
      <ArrowPrev
        color={indicatorsColor.arrows}
        changePosition={slidesToShow === 1}
      />
    ),
    responsive: responsive || [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: loop,
          dots: dots
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: loop,
          dots: dots
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: loop,
          dots: dots
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {customSlide
        ? children.map((c, i) => (
            <CustomSlide gap={gap} center={center} key={i}>
              {c}
            </CustomSlide>
          ))
        : children}
    </Slider>
  );
};

export default Carousel;
