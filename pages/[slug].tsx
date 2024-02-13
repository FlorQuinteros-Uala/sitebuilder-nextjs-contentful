import { PageHead } from 'components/PageHead';
import RenderComponents from 'components/RenderComponents';
import RenderLegalDocument from 'components/RenderLegalDocument';

import { fetchPage } from '@/contentful/fetchPage';
import { fetchLegalDocument } from '@/contentful/fetchPDF';

export async function getServerSideProps({ params, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=299'
  );

  const { slug } = params;

  const [page, pdf] = await Promise.all([
    fetchPage(slug),
    fetchLegalDocument(slug)
  ]);

  if (!page && !pdf) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      type: page ? 'landing' : 'legalDocument',
      data: page || pdf
    }
  };
}

export default function Landing({ type, data }) {
  return (
    <>
      <PageHead seo={data.seo} />
      {type === 'landing' ? (
        <RenderComponents content={data.components} />
      ) : (
        <RenderLegalDocument {...data} />
      )}
    </>
  );
}
