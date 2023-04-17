import clsxm from '@/libs/clsxm';

import React from 'react';
import styles from '@/styles/styles';
import ThemeButton from '@/components/button/ThemeButton';

const Header = () => {
  return (
    <nav className="shadow-sm dark:shadow-white">
      <div className={clsxm('accent-amber-200 h-16', styles.container)}>
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
