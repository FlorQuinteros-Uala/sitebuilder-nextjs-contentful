import { Container, Icon } from '@uala/abra';
import { PageHead } from 'components/PageHead';
import {
  OnePromotionSelected,
  TwoPromotionSelected
} from 'components/Promociones';
import { Footer, Navbar } from 'components/wrappers';
import Link from 'next/link';

import { fetchFooter, fetchNavbar } from '@/contentful/getLayoutData';
import { getPromotionPageData } from '@/contentful/getPromotionPageData';

export async function getServerSideProps({ params, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=299'
  );

  const { slug } = params;

  const { data } = await getPromotionPageData(slug);

  const [navbar, footer] = await Promise.all([fetchNavbar(), fetchFooter()]);

  if (!data) {
    return {
      redirect: {
        permanent: false,
        destination: '/404'
      }
    };
  }

  return {
    props: {
      promotion: data,
      layout: {
        navbar,
        footer
      }
    }
  };
}

export default function Details({ promotion, layout }) {
  return (
    <>
      <PageHead seo={promotion.seo} />
      <Navbar {...layout.navbar} />
      <Container layout="100">
        <Link
          className="text-btn outline-none flex items-center"
          href="/promociones"
        >
          <Icon name="left" />
          Regresar a promociones
        </Link>
        {promotion.extraPromotion ? (
          <TwoPromotionSelected
            promotions={promotion.specs}
            logo={promotion.logo}
          />
        ) : (
          <OnePromotionSelected
            promotion={promotion.specs[0]}
            logo={promotion.logo}
          />
        )}
      </Container>
      <Footer {...layout.footer} />
    </>
  );
}
