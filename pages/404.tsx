import { PageHead, RenderComponents } from '@/components';
import { fetchPage } from '@/lib';

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

export default function Custom404({ seo, components }) {
  return (
    <>
      <PageHead seo={seo} />
      <RenderComponents content={components} />
    </>
  );
}
