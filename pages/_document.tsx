import { getCssText } from '@uala/abra';
import { getCssText as getCssTextAbra } from '@uala-labssupport/ui';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <style
          id="abra"
          dangerouslySetInnerHTML={{ __html: getCssTextAbra() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
