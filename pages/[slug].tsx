import { fetchPage } from '@/contentful/getPage';
import RenderComponents from 'components/renderComponents';
import { PageHead } from 'components/PageHead';

export async function getServerSideProps({ params, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=299'
  );

  const { slug } = params;

  const page = await fetchPage(slug);

  if (!page) {
    return {
      notFound: true
    };
  }
  return {
    props: page
  };
}

export default function Landing({ seo, components }) {
  return (
    <>
      <PageHead seo={seo} />
      <RenderComponents content={components} />
    </>
  );
}
