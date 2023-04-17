import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh_-_64px)]">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
