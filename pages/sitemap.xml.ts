import { getWebInfo } from '@/contentful/getWebInfo';

export async function getServerSideProps({ res }) {
  const { data } = await getWebInfo();

  const request = await fetch(data.sitemapUrl);
  const sitemapContent = await request.text();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemapContent);
  res.end();

  return {
    props: {}
  };
}

export default getServerSideProps;
