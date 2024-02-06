import { Box, Container, Spacer, Stack, Title } from '@uala/abra';
import { useBreakpoint } from '@uala/abra-utils';
import Carousel from 'components/Carousel';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import type { Props } from 'types/TypesSlider';

const ModuloSlider = ({
  title,
  description,
  children,
  cardsToShow,
  css,
  carouselSettings
}: Props) => {
  const isDesktop = useBreakpoint('lg');

  return (
    <Box
      as="section"
      css={{
        padding: isDesktop
          ? 0
          : cardsToShow !== 2
          ? '40px 0px 40px 25px'
          : '40px 25px',
        ...css?.wrapper
      }}
    >
      <Container
        layout="100"
        css={{ margin: 'auto', padding: !isDesktop && 0 }}
      >
        <Stack
          align="start"
          direction="column"
          spacing="20"
          css={{
            ...css?.text,
            padding: isDesktop ? css?.innerContainer?.padding : '0'
          }}
        >
          {title && (
            <Title
              css={{
                ...css?.text,
                fontSize: isDesktop ? '2.188rem' : '1.438rem',
                lineHeight: isDesktop ? '42px' : '30px',
                fontStyle: 'normal'
              }}
            >
              {title}
            </Title>
          )}
          {description && <ReactMarkdown>{description}</ReactMarkdown>}
        </Stack>
        <Spacer y={20} />
        {children && (
          <Carousel
            slidesToShow={cardsToShow}
            arrows
            dots={false}
            gap={37}
            {...carouselSettings}
          >
            {children}
          </Carousel>
        )}
      </Container>
    </Box>
  );
};

export default ModuloSlider;
