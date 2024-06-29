import "@/styles/globals.css";
import axios from "axios";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Router from "next/router";
import { useEffect } from "react";
import { SWRConfig } from "swr";
import AOS from "aos";
import "@/styles/nprogress.css";
import { Analytics } from "@vercel/analytics/react"

import "aos/dist/aos.css";
import nProgress from "nprogress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  nProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);

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
