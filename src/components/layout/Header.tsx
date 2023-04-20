import clsxm from '@/libs/clsxm';

import { useState, useEffect } from 'react';
import styles from '@/styles/styles';
import ThemeButton from '@/components/button/ThemeButton';
import { useRouter } from 'next/router';
import Link from 'next/link';

const navbarDatas = [
  {
    pathname: '/',
    name: 'Home',
  },
  {
    pathname: '/project',
    name: 'Project',
  },
  {
    pathname: '/now',
    name: 'Now',
  },
];

const Header = () => {
  const [onTop, setOnTop] = useState(true);

  const { pathname } = useRouter();

  const handleScroll = () => {
    if (onTop !== (window.pageYOffset === 0)) {
      setOnTop(window.pageYOffset === 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <nav
      className={clsxm(
        'backdrop-blur-md bg-opacity-20',
        'sticky z-10 top-0',
        onTop
          ? ''
          : ' dark:shadow-white dark:bg-mainDark shadow-black bg-main border-b border-gray-300'
      )}
    >
      <div className={clsxm('h-16', styles.container)}>
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <div className="hidden sm:inline font-bold text-lg">
              rizkiramadhanx.
            </div>
            <div className="sm:ml-10 flex md:gap-x-5 gap-x-2">
              {navbarDatas.map((data, key) => (
                <Link
                  href={data.pathname}
                  key={key}
                  className={clsxm(
                    pathname === data.pathname ? 'px-1 ' : '',
                    'cursor-pointer hover:scale-105 text-underline'
                  )}
                >
                  <span
                    className={clsxm(
                      pathname === data.pathname
                        ? 'text-gradient-sm font-extrabold'
                        : ''
                    )}
                  >
                    {data.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

export default Header;
