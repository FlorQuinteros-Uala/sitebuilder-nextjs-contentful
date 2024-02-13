import { PageHead } from 'components/PageHead';
import RenderComponents from 'components/RenderComponents';

import { fetchPage } from '@/contentful/fetchPage';

export async function getStaticProps() {
  const page = await fetchPage('error');

  if (!page) {
    return {
      notFound: true
    };
  }
  return {
    props: page
  };
}

export default function Custom404({ page, seo }) {
  return (
    <>
      <PageHead seo={seo} />
      <RenderComponents content={page.components} />
    </>
  );
}
