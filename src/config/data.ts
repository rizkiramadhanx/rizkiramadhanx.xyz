import Suxz from "@/assets/project/Suxz-landing-page.png";
import QuranApp from "@/assets/project/Quran.png";
import Dekoor from "@/assets/project/Dekoor.png";
import Pahein from "@/assets/project/Pahein.png";
import Infralib from "@/assets/project/Infralib.png";
import TodoApp from "@/assets/project/TodoApp.png";
import Komship from "@/assets/project/Komship.png";
import SIPUS from "@/assets/project/SIPUS.jpg";
import Komcards from "@/assets/project/Komcards.png"

const data = {
  project: {
    card: [
      {
        image: Komcards,
        title: 'Komcards',
        description:
          "Komcards is a platform from Komerce that can simplify the payment process for all your business needs online. We are committed to continuing to support the domestic economy by making it easier to do business for MSMEs and online business people.",
        technology: ["Bootstrap", "NuxtJS"],
        url: {
          deploy: "https://komcards.id/",
        }
      },

      {
        description: `This online course platform features a captivating hero section with an illustration on the right and a prominent call-to-action button. Below the hero section, you'll find a comprehensive list of available classes. The "About Us" section provides a brief overview of the platform's mission and values. The platform's partnerships with reputable companies are highlighted in the "Companies Partners" section. Testimonials from satisfied alumni add credibility to the platform in the "Testimonials" section. Finally, a clear and compelling call-to-action is displayed at the bottom of the page, encouraging visitors to take the next step in their education.`,
        image: Suxz,
        technology: ["React", "TailwindCSS"],
        title: "Suxz Landing Page",
        url: {
          deploy: "https://suxz-codedesign-zeta.vercel.app/",
          source: "https://github.com/rizkiramadhanx/suxz-codedesign",
        },
      },
      // {
      //   description: `Pahe.in is a popular website that provides users with a wide range of free movies, TV shows, and other entertainment content that can be downloaded or streamed online. It was established in Indonesia and became a popular platform for fans of movies and TV shows to watch and download their favorite content.`,
      //   image: Pahein,
      //   technology: ["React", "Chakra", "Public API"],
      //   title: "Pahe.in: Movie App",
      //   url: {
      //     deploy: "https://pahein.rizkiramadhanx.dev/",
      //   },
      // },
      {
        description: `The Quran App is a pocket Quran application that is simple and easy for Muslims to read the Quran anywhere and anytime.`,
        image: QuranApp,
        technology: ["React", "TailwindCSS", "Public API"],
        title: "The Quran App",
        url: {
          deploy: "https://quran-app.rizkiramadhanx.dev/",
          source: "https://github.com/rizkiramadhanx/quran-app-react",
        },
      },
      // {
      //   description: `Dekoor is a web application that provides quality furniture`,
      //   image: Dekoor,
      //   technology: ["React", "TailwindCSS"],
      //   title: "Dekoor Landing Page",
      //   url: {
      //     deploy: "https://dekoor-theta.vercel.app/",
      //   },
      // },
      {
        description:
          "Infralib (Indonesia Infrastructure Library) is an application owned by PT SMI for sharing knowledge and experiences related to infrastructure development. Infralib has two platforms, landing page and backoffice.",
        image: Infralib,
        title: "Infralib - PT Sarana Multi Infrastruktur",
        technology: ["NextJS", "React-Query", "TailwindCSS"],
        url: {
          deploy: "https://www.dot.co.id/works/knowledge-management-system",
        },
      },
      {
        description:
          "Komship is a delivery service platform to help you deliver packages, both COD and Non-COD, without a minimum delivery.",
        image: Komship,
        title: "Komship Landing Page",
        technology: ["Vue Js", "TailwindCSS"],
        url: {
          deploy: "https://komship-clone.vercel.app/",
        },
      },
      {
        description:
          "A to-do list web app that created when i joined Devcode Frontend Challenge by Gethired.id few days ago. The app contains some basic features like adding, updating, and removing todos. Todos are grouped inside an activity.",
        image: TodoApp,
        title: "Todo App Chalenge",
        technology: ["API", "TailwindCSS"],
        url: {
          deploy: "https://todo-get-hired.vercel.app/",
        },
      },
      {
        description:
          "SIPUS is a software application or a suite of software modules designed to facilitate and manage various operations and processes within a library. It is a comprehensive system that integrates and automates different aspects of library management, providing efficient access to library resources and services.",
        image: SIPUS,
        title: "SIPUS (Sistem Informasi Perpustakaan",
        technology: ["Vue", "PrismaORM", "ExpressJS"],
        url: {
          source: "https://github.com/rizkiramadhanx/fe-sipus",
        },
      },
    ],
  },
};

export default data;
