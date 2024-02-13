import { fetchEntry } from './fetchEntry';

export async function getWebInfo() {
  const data = {
    robotsUrl: null,
    sitemapUrl: null
  };

  const info = await fetchEntry('6uOKLXobfwn3LyjD9M1k8E');

  if (info !== null) {
    data.robotsUrl = `https:${info.fields.robotsTxt.fields.file.url}`;
    data.sitemapUrl = `https:${info.fields.sitemap.fields.file.url}`;
  }

  return {
    data: data
  };
}
