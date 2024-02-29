import { fetchEntry } from './fetchEntry';
import type { ContentfulStruct } from './generated-types';

export async function getWebInfo() {
  const data = {
    robotsUrl: null,
    sitemapUrl: null
  };

  const info = await fetchEntry('6uOKLXobfwn3LyjD9M1k8E');

  if (info !== null) {
    const robotsUrl = (info.fields.robotsTxt as unknown as ContentfulStruct)
      ?.fields?.file?.url;
    const sitemapUrl = (info.fields.sitemap as unknown as ContentfulStruct)
      ?.fields?.file?.url;

    data.robotsUrl = `https:${robotsUrl}`;
    data.sitemapUrl = `https:${sitemapUrl}`;
  }

  return {
    data: data
  };
}
