import MainLayout from '@/components/layout/MainLayout';
import clsxm from '@/libs/clsxm';
import styles from '@/styles/styles';
import { useRouter } from 'next/router';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';

export default function Home() {
  return (
    <MainLayout head="Home | rizkiramadhanx">
      <div
        data-aos="fade-up"
        className={clsxm(
          'min-h-[calc(100vh_-_64px)] ',
          'bg-main dark:bg-mainDark',
          styles.container,
          'py-2',
          'grid sm:grid-cols-2'
        )}
      >
        <div className="flex flex-col gap-y-3 justify-center">
          <h1 className="text-3xl font-bold">Hello,</h1>
          <h1 className="text-5xl font-bold">
            I am
            <span className="text-gradient bg-slate-400">
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
            Final semester student, interested in Web Development. currently
            looking for an job especially as a NodeJS Environment Developer. I
            am currently learning Javascript Environment, be it FrontEnd or
            BackEnd litte bit.
          </p>
          <div>
            <Link
              href="https://s3-ap-southeast-1.amazonaws.com/glints-dashboard/resume/ea5983397f65507b6d80fa1e51360413.pdf"
              target="_blank"
            >
              <button className="bg-main dark:bg-mainDark mt-2 p-2 rounded-[2px] button-shadow-gradient">
                Download CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
