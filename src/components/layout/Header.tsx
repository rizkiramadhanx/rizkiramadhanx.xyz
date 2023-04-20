import clsxm from '@/libs/clsxm';

import React from 'react';
import styles from '@/styles/styles';
import ThemeButton from '@/components/button/ThemeButton';

const Header = () => {
  return (
    <nav
      className={clsxm(
        'shadow-[1px_1px_0_0_rgba(0,0,0,0.3)] backdrop-blur-md  bg-opacity-20 shadow-black bg-main',
        'dark:shadow-white sticky z-10 top-0 dark:bg-mainDark'
      )}
    >
      <div className={clsxm('h-16', styles.container)}>
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <div className="hidden sm:inline font-bold text-lg">
              rizkiramadhanx.
            </div>
            <div className="sm:ml-10 flex gap-x-5">
              <a>Home</a>
              <a>Project</a>
              <a>Now</a>
            </div>
          </div>
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

export default Header;
