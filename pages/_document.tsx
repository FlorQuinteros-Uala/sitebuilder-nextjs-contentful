import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '@uala-labssupport/ui';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
