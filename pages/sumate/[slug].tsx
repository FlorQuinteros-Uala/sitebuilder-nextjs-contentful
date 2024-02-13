import { Box, Container, Stack, Text, Title } from '@uala/abra';
import { PageHead } from 'components/PageHead';
import { Footer, Navbar } from 'components/wrappers';
import Script from 'next/script';
import React from 'react';
import { getPositionsData } from 'utils/comeet/getPositionsData';

import { fetchFooter, fetchNavbar } from '@/contentful/getLayoutData';

const Details = ({ title, value }) => (
  <Stack
    direction="column"
    spacing="20"
    className="text-[#3A3A3A] my-[30px] md:my-[60px]"
  >
    <Title
      as="h2"
      className="text-[23px] leading-[36px] md:text-[25px] md:leading-[32px]"
    >
      {title}
    </Title>
    <Box
      dangerouslySetInnerHTML={{
        __html: value
      }}
      css={{
        '& p': {
          my: '1rem',
          fontSize: '18px',
          lineHeight: '25px'
        },
        '& strong': { fontWeigth: 'bolder' },
        '& ul': {
          listStyle: 'disc',
          marginLeft: '1rem',
          fontSize: '18px',
          lineHeight: '1.9'
        }
      }}
    />
  </Stack>
);

export async function getServerSideProps({ params, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=299'
  );

  const { slug } = params;

  const [navbar, footer] = await Promise.all([fetchNavbar(), fetchFooter()]);
  const position = await getPositionsData(slug);

  if (position.length === 0) {
    return {
      redirect: {
        permanent: false,
        destination: '/404'
      }
    };
  }

  return {
    props: {
      layout: {
        navbar,
        footer
      },
      position: position[0]
    }
  };
}

const Position = ({ layout, position }) => {
  return (
    <>
      <PageHead
        seo={{ title: 'Ualá - Trabajá con nosotros: Búsquedas laborales' }}
      />
      <Navbar {...layout.navbar} />
      <script
        dangerouslySetInnerHTML={{
          __html: ` window.comeetInit = function () {
                            COMEET.init({
                                "token": "45B15C715C78B6273322D88B6D111A22D11",
                                "company-uid": "54.00B",
                                "company-name": "uala",
                                "color": "278fe6",
                                "font-size": "13px",
                                "social-whatsapp": false,
                                "css-url": "https://www.uala.com.ar/assets/css/comeet.css",
                                "css-cache": false
                            });
                        };
            `
        }}
      ></script>
      <Script
        strategy="afterInteractive"
        src="https://www.comeet.co/careers-api/api.js"
      ></Script>
      <Container layout="100">
        <Stack direction="column" spacing="20">
          {position.name && (
            <Title
              as="h1"
              className="text-[#022A9B] text-[35px] leading-[41px] md:text-[45px] md:leading-[55px]"
            >
              {position.name}
            </Title>
          )}
          {position.location && <Text>{position.location}</Text>}
        </Stack>
        {position.details && (
          <Stack direction="column">
            {position.details[0].value ? (
              <Details title="Descripción" value={position.details[0].value} />
            ) : null}
            {position.details[1].value ? (
              <Details
                title="Requerimientos"
                value={position.details[1].value}
              />
            ) : null}
          </Stack>
        )}
        <script
          type="comeet-applyform"
          data-position-uid={position.id}
        ></script>
        <script type="comeet-social" data-position-uid={position.id}></script>
      </Container>
      <Footer {...layout.footer} />
    </>
  );
};

export default Position;
