import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

interface IMainLayout {
  children: React.ReactNode;
  head: string;
}

const MainLayout = ({ children, head }: IMainLayout) => {
  return (
    <>
      <Head>
        <title>{head}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
