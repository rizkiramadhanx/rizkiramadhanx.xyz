import clsxm from '@/libs/clsxm';
import styles from '@/styles/styles';
import Link from 'next/link';
import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineMail,
} from 'react-icons/ai';

const Contact = [
  {
    url: 'mailto:rizkramdhanx@gmail.com',
    icon: <AiOutlineMail size={30} />,
  },
  {
    url: 'https://github.com/rizkiramadhanx',
    icon: <AiFillGithub size={30} />,
  },
  {
    url: 'https://linkedin.com/in/rizkiramadhanx',
    icon: <AiFillLinkedin size={30} />,
  },
  {
    url: 'https://instagram.com/rizkiramadhanx/',
    icon: <AiFillInstagram size={30} />,
  },
];
const Footer = () => {
  return (
    <footer
      className={clsxm(styles.container, 'h-16 shadow-sm dark:shadow-white')}
    >
      <div className="flex gap-x-3 items-center h-full">
        {Contact.map((data, key) => (
          <Link
            key={key}
            href={data.url}
            passHref={true}
            className="hover-effect"
            target="_blank"
          >
            {data.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
