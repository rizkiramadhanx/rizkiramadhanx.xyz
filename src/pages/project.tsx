import MainLayout from '@/components/layout/MainLayout';
import ProjectCard, {
  PropsProjectCard,
} from '@/components/project/ProjectCard';
import clsxm from '@/libs/clsxm';
import styles from '@/styles/styles';
import data from '@/config/data';
import useSWR from 'swr';
import moment from 'moment';

const Project = () => {
  const { card } = data.project;
  moment.locale();

  const {
    data: repodata,
    error,
    isLoading,
  } = useSWR(
    'https://api.github.com/repos/rizkiramadhanx/interview-coding-azura-labs/branches/master'
  );

  const dateLastCommit = repodata?.commit?.commit?.committer?.date;

  return (
    <MainLayout head="Project | rizkiramadhanx">
      <div
        className={clsxm(
          'min-h-[calc(100vh_-_64px)] ',
          'bg-main dark:bg-mainDark',
          'flex flex-col justify-between',
          styles.container
        )}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 my-10">
          {card &&
            card.map((data, i) => (
              <ProjectCard
                description={data.description}
                image={data.image}
                technology={data.technology}
                title={data.title}
                url={data.url}
                key={i}
              />
            ))}
        </div>
        <div className="mt-5 text-right mb-2 text-sm">
          Last update{' '}
          <span className="text-gradient-sm dark:text-white">
            {moment(dateLastCommit).format('LLLL')}
          </span>
        </div>
      </div>
    </MainLayout>
  );
};

export default Project;
