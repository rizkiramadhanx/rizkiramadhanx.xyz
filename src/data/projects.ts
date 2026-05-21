export interface Project {
  image: string;
  title: string;
  description: string;
  technology: string[];
  url: {
    deploy?: string;
    source?: string;
  };
}

const projects: Project[] = [
  {
    image: '/assets/project/kasir-agen.png',
    title: 'Kasir Agen',
    technology: ['React', 'NestJS', 'Fullstack', 'SoloProduct'],
    description:
      'Kasir Agen is a recording and bookkeeping application specifically designed for BRILink agents, Mini ATM, and transfer counters. It allows agents to record all cash withdrawal, transfer, and retail transactions in one app — with real-time balance, profit, and stock tracking without manual calculation.',
    url: {
      deploy: 'https://kasiragen.com',
    },
  },
  {
    image: '/assets/project/kubik-billing.jpg',
    title: 'Kubik Billing',
    technology: ['Tauri', 'Golang', 'SQLite'],
    description:
      'Kubik Billing is a PlayStation rental management system used to automatically track playtime, calculate hourly or package rates, monitor console status, and record transactions. With this system, rental owners can manage multiple consoles at once, add snacks or drinks to the bill, print payment receipts, and generate daily to monthly revenue reports without manual calculations',
    url: {
      deploy: 'http://kubikcreative.gitbook.io/kubik-billing/',
    },
  },
  {
    image: '/assets/project/spark-pdt.png',
    title: 'Spark PDT Mobile',
    technology: ['React Native', 'Mobile'],
    description:
      'Spark PDT Mobile is a barcode & QR scanner app built with React Native to support ERP operations such as stock opname, stock transfer, and other warehouse activities. It allows warehouse staff to scan items directly from their mobile device, syncing data in real-time with the ERP system.',
    url: {
      deploy: 'https://www.linkedin.com/in/rizkiramadhanx/details/projects/',
    },
  },
  {
    image: '/assets/project/spark-erp.jpg',
    title: 'Spark ERP',
    technology: ['Mantine UI', 'React', 'Vite JS'],
    description:
      'Spark ERP project aims to integrate core business functions—such as finance, procurement, inventory, sales, and human resources—into a centralized system to improve operational efficiency, data accuracy, and decision-making. By streamlining processes and eliminating data silos, the ERP system will enhance real-time visibility across departments, reduce manual work, and support scalable growth.',
    url: {
      deploy: 'https://www.linkedin.com/in/rizkiramadhanx/details/projects/',
    },
  },
  {
    image: '/assets/project/spark-hris.jpg',
    title: 'Spark HRIS',
    technology: ['Mantine UI', 'React', 'Vite JS'],
    description: 'Development HRIS for 500+ User',
    url: {
      deploy: 'https://www.linkedin.com/in/rizkiramadhanx/details/projects/',
    },
  },
  {
    image: '/assets/project/stocksense.png',
    title: 'StockSense',
    technology: ['React', 'TailwindCSS', 'Antd'],
    description: 'StockSense is a stock analysis platform that helps investors make smarter trading decisions. It provides real-time market data, technical analysis tools, and portfolio tracking features to give users a comprehensive view of their investments and market trends.',
    url: {
      deploy: 'https://stocksense.id',
    },
  },
  {
    image: '/assets/project/Komcards.png',
    title: 'Komcards',
    description:
      'Komcards is a platform from Komerce that can simplify the payment process for all your business needs online. We are committed to continuing to support the domestic economy by making it easier to do business for MSMEs and online business people.',
    technology: ['Bootstrap', 'NuxtJS'],
    url: {
      deploy: 'https://komcards.id/',
    },
  },
  {
    image: '/assets/project/Suxz-landing-page.png',
    description: `This online course platform features a captivating hero section with an illustration on the right and a prominent call-to-action button. Below the hero section, you'll find a comprehensive list of available classes. The "About Us" section provides a brief overview of the platform's mission and values. The platform's partnerships with reputable companies are highlighted in the "Companies Partners" section. Testimonials from satisfied alumni add credibility to the platform in the "Testimonials" section. Finally, a clear and compelling call-to-action is displayed at the bottom of the page, encouraging visitors to take the next step in their education.`,
    technology: ['React', 'TailwindCSS'],
    title: 'Suxz Landing Page',
    url: {
      deploy: 'https://suxz-codedesign-zeta.vercel.app/',
      source: 'https://github.com/rizkiramadhanxx/suxz-codedesign',
    },
  },
  {
    image: '/assets/project/Quran.png',
    description: `The Quran App is a pocket Quran application that is simple and easy for Muslims to read the Quran anywhere and anytime.`,
    technology: ['React', 'TailwindCSS', 'Public API'],
    title: 'The Quran App',
    url: {
      deploy: 'https://quran-app.rizkiramadhanxx.dev/',
      source: 'https://github.com/rizkiramadhanxx/quran-app-react',
    },
  },
  {
    image: '/assets/project/Infralib.png',
    description:
      'Infralib (Indonesia Infrastructure Library) is an application owned by PT SMI for sharing knowledge and experiences related to infrastructure development. Infralib has two platforms, landing page and backoffice.',
    title: 'Infralib - PT Sarana Multi Infrastruktur',
    technology: ['NextJS', 'React-Query', 'TailwindCSS'],
    url: {
      deploy: 'https://www.dot.co.id/works/knowledge-management-system',
    },
  },
  {
    image: '/assets/project/Komship.png',
    description:
      'Komship is a delivery service platform to help you deliver packages, both COD and Non-COD, without a minimum delivery.',
    title: 'Komship Landing Page',
    technology: ['Vue Js', 'TailwindCSS'],
    url: {
      deploy: 'https://komship-clone.vercel.app/',
    },
  },
  {
    image: '/assets/project/TodoApp.png',
    description:
      'A to-do list web app that created when i joined Devcode Frontend Challenge by Gethired.id few days ago. The app contains some basic features like adding, updating, and removing todos. Todos are grouped inside an activity.',
    title: 'Todo App Chalenge',
    technology: ['API', 'TailwindCSS'],
    url: {
      deploy: 'https://todo-get-hired.vercel.app/',
    },
  },
  {
    image: '/assets/project/SIPUS.jpg',
    description:
      'SIPUS is a software application or a suite of software modules designed to facilitate and manage various operations and processes within a library. It is a comprehensive system that integrates and automates different aspects of library management, providing efficient access to library resources and services.',
    title: 'SIPUS (Sistem Informasi Perpustakaan',
    technology: ['Vue', 'PrismaORM', 'ExpressJS'],
    url: {
      source: 'https://github.com/rizkiramadhanxx/fe-sipus',
    },
  },
];

export default projects;
