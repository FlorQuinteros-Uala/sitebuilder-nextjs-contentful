import { getWebInfo } from '@/contentful/getWebInfo';

export async function getServerSideProps({ res }) {
  const { data } = await getWebInfo();

  const request = await fetch(data.robotsUrl);
  const robotsContent = await request.text();

  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsContent);
  res.end();

  return {
    props: {}
  };
}

export default getServerSideProps;
