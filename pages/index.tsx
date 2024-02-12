import { PageHead } from 'components/PageHead';
import RenderComponents from 'components/RenderComponents';

import { fetchPage } from '@/contentful/getPage';

export async function getServerSideProps({ res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=299'
  );

  const page = await fetchPage('home');

  if (!page) {
    return {
      notFound: true
    };
  }
  return {
    props: page
  };
}

export default function Home({ seo, components }) {
  return (
    <>
      <PageHead seo={seo} />
      <RenderComponents content={components} />
    </>
  );
}
