import { PageHead, RenderComponents, RenderLegalDocument } from '@/components';
import { fetchLegalDocument, fetchPage } from '@/lib';

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
