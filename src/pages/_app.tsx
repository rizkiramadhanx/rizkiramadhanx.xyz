import '@/styles/globals.css';
import axios from 'axios';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Router from 'next/router';
import nProgress from 'nprogress';
import { SWRConfig } from 'swr';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="light" enableSystem={true} attribute="class">
      <SWRConfig
        value={{
          fetcher: (url) => axios.get(url).then((res) => res.data),
        }}
      >
        <main className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </SWRConfig>
    </ThemeProvider>
  );
}
