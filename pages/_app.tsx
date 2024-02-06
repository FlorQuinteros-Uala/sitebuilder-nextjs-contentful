import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';

import { AbraProvider } from '@uala/abra';
import { ThemeProvider } from '@uala-labssupport/ui';
import { publicSans } from 'fonts';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`flex flex-col place-content-between min-h-screen overflow-x-hidden ${publicSans.className}`}
    >
      <ThemeProvider brand={'uala'}>
        <AbraProvider>
          <Component {...pageProps} />
        </AbraProvider>
      </ThemeProvider>
    </main>
  );
}
