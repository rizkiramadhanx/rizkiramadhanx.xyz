import MainLayout from '@/components/layout/MainLayout';
import clsxm from '@/libs/clsxm';
import styles from '@/styles/styles';
import React from 'react';

const now = () => {
  return (
    <MainLayout head="Home | rizkiramadhanx">
      <div
        data-aos="fade-up"
        className={clsxm(
          'min-h-[calc(100vh_-_64px)] ',
          'bg-main dark:bg-mainDark',
          styles.container,
          'py-2'
        )}
      >
        <h1 className="text-xl font-bold mt-5">Who am I?</h1>
        <p>
          I am a final year informatics student at a private university,
          currently I am pursuing programming, especially web programming.
        </p>
        <h1 className="text-xl font-bold mt-5">Where am i now?</h1>
        <p>
          {`I'm currently in my hometown, Tegal, Central Java, because I study
          online, occasionally I'm in Purwokerto, Central Java.`}
        </p>
        <h1 className="text-xl font-bold mt-5">
          What am i busy with right now?
        </h1>
        <p>
          {`I'm currently trying to build my career as a programmer, specifically
          a web programmer. I've recently been busy learning web development
          specifically using the JavaScript language`}
        </p>
        <h1 className="text-xl font-bold mt-5">
          What technology am I currently using ?
        </h1>
        <ul className="list-inside list-disc">
          <li>Next Js</li>
          <li>React Js</li>
          <li>Typescipt and Javascript</li>
          <li>Tailwinds CSS</li>
          <li>MySQL</li>
        </ul>
      </div>
    </MainLayout>
  );
};

export default now;
