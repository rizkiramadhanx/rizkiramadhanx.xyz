import Suxz from '@/assets/project/Suxz-landing-page.png';
import QuranApp from '@/assets/project/Quran.png';
import Dekoor from '@/assets/project/Dekoor.png';
import Pahein from '@/assets/project/Pahein.png';

const data = {
  project: {
    card: [
      {
        description: `This online course platform features a captivating hero section with an illustration on the right and a prominent call-to-action button. Below the hero section, you'll find a comprehensive list of available classes. The "About Us" section provides a brief overview of the platform's mission and values. The platform's partnerships with reputable companies are highlighted in the "Companies Partners" section. Testimonials from satisfied alumni add credibility to the platform in the "Testimonials" section. Finally, a clear and compelling call-to-action is displayed at the bottom of the page, encouraging visitors to take the next step in their education.`,
        image: Suxz,
        technology: ['React', 'Tailwind'],
        title: 'Suxz Landing Page',
        url: {
          deploy: 'https://suxz-codedesign-zeta.vercel.app/',
          source: 'https://github.com/rizkiramadhanx/suxz-codedesign',
        },
      },
      {
        description: `Pahe.in is a popular website that provides users with a wide range of free movies, TV shows, and other entertainment content that can be downloaded or streamed online. It was established in Indonesia and became a popular platform for fans of movies and TV shows to watch and download their favorite content.`,
        image: Pahein,
        technology: ['React', 'Chakra', 'Public API'],
        title: 'Pahe.in: Movie App',
        url: {
          deploy: 'https://pahein.rizkiramadhanx.dev/',
        },
      },
      {
        description: `The Quran App is a pocket Quran application that is simple and easy for Muslims to read the Quran anywhere and anytime.`,
        image: QuranApp,
        technology: ['React', 'Tailwind', 'API'],
        title: 'The Quran App',
        url: {
          deploy: 'https://quran-rizkiramadhanx.vercel.app/',
          source: 'https://github.com/rizkiramadhanx/quran-app-react',
        },
      },
      {
        description: `Dekoor is a web application that provides quality furniture`,
        image: Dekoor,
        technology: ['React', 'Tailwind'],
        title: 'Dekoor Landing Page',
        url: {
          deploy: 'https://dekoor-theta.vercel.app/',
        },
      },
    ],
  },
};

export default data;
