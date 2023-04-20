import MainLayout from '@/components/layout/MainLayout';
import clsxm from '@/libs/clsxm';
import styles from '@/styles/styles';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <MainLayout>
      <div
        className={clsxm(
          'min-h-[calc(100vh_-_64px)] ',
          'bg-main dark:bg-mainDark',
          styles.container,
          'py-2',
          'grid sm:grid-cols-2'
        )}
      >
        <div className="flex flex-col gap-y-3 justify-center">
          <h1 className="text-3xl font-bold">Hello, Morning spirit 😎</h1>
          <h1 className="text-5xl font-bold">
            My Name is
            <span>
              {' '}
              <Typewriter
                words={['Rizki Ramadhan']}
                loop={4}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            tempora velit dolorem sed illum quisquam quaerat autem. Atque
            adipisci labore quibusdam eius nihil. Deleniti aut, assumenda fugit
            soluta adipisci hic.
          </p>
          <div>
            <button className="bg-slate-200 p-2 rounded-[2px]">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
