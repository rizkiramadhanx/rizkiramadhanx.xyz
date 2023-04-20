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
    icon: <AiOutlineMail size={30} className="hover:text-orange-500" />,
  },
  {
    url: 'https://github.com/rizkiramadhanx',
    icon: <AiFillGithub size={30} className="hover:text-orange-500" />,
  },
  {
    url: 'https://linkedin.com/in/rizkiramadhanx',
    icon: <AiFillLinkedin size={30} className="hover:text-orange-500" />,
  },
  {
    url: 'https://instagram.com/rizkiramadhanx/',
    icon: <AiFillInstagram size={30} className="hover:text-orange-500" />,
  },
];
const Footer = () => {
  return (
    <footer className="shadow-md shadow-black dark:shadow-white">
      <div
        className={clsxm(
          styles.container,
          'h-16',
          'flex justify-between items-center'
        )}
      >
        <div className="flex gap-x-2 items-center h-full">
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
        <div> &#169; rizkiramadhanx</div>
      </div>
    </footer>
  );
};

export default Footer;
