import clsxm from '@/libs/clsxm';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={clsxm(
          'dark:bg-mainDark bg-main',
          'dark:text-mainDark text-main'
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
