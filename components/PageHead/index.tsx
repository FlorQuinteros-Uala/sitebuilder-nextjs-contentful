import Head from 'next/head';
import React from 'react';

type Props = {
  seo: {
    title?: string;
    description?: string;
    cannonical?: string;
  };
};

export const PageHead = ({ seo }: Props) => {
  return (
    <Head>
      <title>{seo.title ?? 'Ualá - Un banco pero fácil'}</title>
      <meta name="description" content={seo.description ?? 'Ualá'} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={seo.cannonical ?? ''} />
    </Head>
  );
};
