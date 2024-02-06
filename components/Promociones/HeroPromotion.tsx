import { Button, Container, Stack, Title } from '@uala/abra';
import { Skeleton } from '@uala/abra';
import { useBreakpoint } from '@uala/abra-utils';
import Image from 'next/image';
import { Suspense } from 'react';

export const HeroPromotion = ({ content }) => {
  const { fields, logo } = content;
  const isDesktop = useBreakpoint('lg');

  return (
    <Suspense fallback={<Skeleton count={3} />}>
      <Container layout="50" className="pl-0 ml-0 max-w-[800px]">
        <Stack direction="column" spacing="32">
          {Object.keys(logo).length > 0 && (
            <Image
              width={isDesktop ? 234 : 155}
              height={isDesktop ? 107 : 71}
              alt={logo.alt}
              style={{
                display: 'flex',
                border: 'solid',
                borderWidth: '1px',
                borderRadius: '11px',
                borderColor: '#C4C4C4',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '$5'
              }}
              objectFit="cover"
              src={`https:${logo.src}`}
            />
          )}
          {fields.title && (
            <Title
              as="h1"
              className="text-[#3A3A3A] text-[28px] leading-[34px] md:text-[45px] md:leading-[55px]"
            >
              {fields.title}
            </Title>
          )}
          {fields.description && (
            <p className="text-[#757575]">{fields.description}</p>
          )}
          {Object.keys(fields.cta).length > 0 && (
            <Button
              size="md"
              variant="primary"
              as="a"
              href={fields.cta.href}
              className="bg-[#022A9B] w-full md:w-[20rem]"
            >
              {fields.cta.text}
            </Button>
          )}
        </Stack>
      </Container>
    </Suspense>
  );
};
