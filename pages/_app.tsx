import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { publicSans } from 'fonts';
import { ThemeProvider } from '@uala-labssupport/ui';
import { AbraProvider } from '@uala/abra';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider brand="uala">
      <AbraProvider>
        <main className={publicSans.className}>
          <Component {...pageProps} />
        </main>
      </AbraProvider>
    </ThemeProvider>
  );
}
