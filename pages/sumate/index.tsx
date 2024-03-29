import { PageHead, RenderComponents } from '@/components';
import { fetchPage } from '@/lib';
import { getPositionsData } from '@/utils';

export async function getServerSideProps({ res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=299'
  );

  const page = await fetchPage('sumate');
  const positions = await getPositionsData();
  page.components.map((c) => (c.positions = positions));

  if (!page) {
    return {
      notFound: true
    };
  }
  return {
    props: page
  };
}

export default function Sumate({ seo, components }) {
  return (
    <>
      <PageHead seo={seo} />
      <RenderComponents content={components} />
    </>
  );
}
