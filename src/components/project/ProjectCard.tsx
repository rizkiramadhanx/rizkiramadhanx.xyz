import clsxm from '@/libs/clsxm';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineGlobal } from 'react-icons/ai';
import { StaticImageData } from 'next/image';
import { useTheme } from 'next-themes';

export interface PropsProjectCard {
  title: string;
  description: string;
  technology: string[];
  image: string | StaticImageData;
  url: {
    source?: string;
    deploy?: string;
  };
}

const ProjectCard = ({
  title,
  description,
  technology,
  image,
  url,
}: PropsProjectCard) => {
  const { theme } = useTheme();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <div
      className={clsxm(
        'h-[370px]',
        'rounded-md border border-gray-300 dark:border-white p-2',
        'hover:scale-105 hover:z-2 bg-main dark:bg-mainDark transition-all',
        mounted && (theme === 'dark' ? 'button-shadow-gradient-hover' : '')
      )}
    >
      <h1 className="text-xl font-bold capitalize">{title}</h1>
      <p className="text-sm text-ellipsis mt-2">{description}</p>
      <Image
        src={image}
        className="w-full h-[180px] object-cover rounded-md my-1"
        alt="random"
        width={300}
        height={300}
      />
      <div className="flex gap-x-1 text-sm mt-2">
        {technology.map((data, key) => (
          <span className="px-2 py-1 bg-white rounded-md text-black" key={key}>
            #{data}
          </span>
        ))}
      </div>
      <div className="mt-2 flex gap-x-1">
        {url.source && (
          <Link
            passHref={true}
            className="hover-effect"
            href={url.source}
            target="_blank"
          >
            <AiFillGithub size={30} />
          </Link>
        )}
        {url.deploy && (
          <Link
            passHref={true}
            className="hover-effect"
            href={url.deploy}
            target="_blank"
          >
            <AiOutlineGlobal size={30} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
