export interface Project {
  /** URL segment for the detail page: /project/<slug> */
  slug: string;
  image: string;
  title: string;
  description: string;
  /** Longer narrative for the detail page: the problem, the build, the outcome */
  story?: string;
  /** Extra images for the detail page gallery; `image` is the cover */
  screenshots?: string[];
  technology: string[];
  url: {
    deploy?: string;
    source?: string;
  };
}

const projects: Project[] = [
  {
    image: '/assets/project/cucicuci/cover.png',
    slug: 'cucicuci',
    title: 'CuciCuci — Kasir Laundry',
    technology: ['Flutter', 'Mobile', 'SoloProduct'],
    screenshots: [
      '/assets/project/cucicuci/beranda.jpg',
      '/assets/project/cucicuci/pesanan.jpg',
    ],
    story: `Laundry shops run on a paper ledger and a good memory. Which order is due today, which is ready for pickup, what the day actually earned — all of it lives on handwritten slips that are easy to lose and slow to total up.

CuciCuci puts the whole counter in one Android app built with Flutter. An order is taken in a few taps against a saved customer, priced from configurable service items, categories, perfumes, and discounts, then tracked through Pending, Ready for Pickup, and Done. The home screen answers the two questions an owner asks all day: what came in today, and what still needs work.

Published on Google Play under Kubik Creative, it now handles daily orders and reporting for laundry counters that previously balanced their books by hand.`,
    description:
      'CuciCuci is a point-of-sale and order management app for laundry businesses. It handles new orders, customer records, service items and pricing, discounts, and perfume options, then tracks every order through pending, ready-for-pickup, and completed — with daily revenue and reports available at a glance.',
    url: {
      deploy: 'https://play.google.com/store/apps/details?id=com.kubikcreative.cucicuci',
    },
  },
  {
    image: '/assets/project/kasir-agen.png',
    slug: 'kasir-agen',
    title: 'Kasir Agen',
    technology: ['React', 'NestJS', 'Fullstack', 'SoloProduct'],
    story: `BRILink agents were tracking every transaction on paper. Balancing the books at closing time meant recounting cash by hand and hoping the ledger agreed — a slow process that quietly lost money whenever a transaction went unrecorded.

I built Kasir Agen end to end as a solo product: React on the front, NestJS behind it. Recording a transaction takes one screen, and balance, profit, and stock all recalculate as it saves, so the day's position is always current instead of being reconstructed at night.

The app now runs the daily books for agents handling cash withdrawals, transfers, and retail sales, with closing time reduced from a manual recount to a glance at the dashboard.`,
    description:
      'Kasir Agen is a recording and bookkeeping application specifically designed for BRILink agents, Mini ATM, and transfer counters. It allows agents to record all cash withdrawal, transfer, and retail transactions in one app — with real-time balance, profit, and stock tracking without manual calculation.',
    url: {
      deploy: 'https://kasiragen.com',
    },
  },
  {
    image: '/assets/project/kubik-billing.jpg',
    slug: 'kubik-billing',
    title: 'Kubik Billing',
    technology: ['Tauri', 'Golang', 'SQLite'],
    description:
      'Kubik Billing is a PlayStation rental management system used to automatically track playtime, calculate hourly or package rates, monitor console status, and record transactions. With this system, rental owners can manage multiple consoles at once, add snacks or drinks to the bill, print payment receipts, and generate daily to monthly revenue reports without manual calculations',
    url: {
      deploy: 'https://kubikbilling.com',
    },
  },
  {
    image: '/assets/project/spark-pdt.png',
    slug: 'spark-pdt-mobile',
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
    slug: 'spark-erp',
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
    slug: 'spark-hris',
    title: 'Spark HRIS',
    technology: ['Mantine UI', 'React', 'Vite JS'],
    description: 'Spark HRIS is a human resource information system serving 500+ employees, handling core HR workflows such as attendance, leave management, employee records, and organizational structure to streamline HR operations company-wide.',
    url: {
      deploy: 'https://www.linkedin.com/in/rizkiramadhanx/details/projects/',
    },
  },
  {
    image: '/assets/project/stocksense.png',
    slug: 'stocksense',
    title: 'StockSense',
    technology: ['React', 'TailwindCSS', 'Antd'],
    description: 'StockSense is a stock analysis platform that helps investors make smarter trading decisions. It provides real-time market data, technical analysis tools, and portfolio tracking features to give users a comprehensive view of their investments and market trends.',
    url: {
      deploy: 'https://stocksense.id',
    },
  },
  {
    image: '/assets/project/Komcards.png',
    slug: 'komcards',
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
    slug: 'suxz-landing-page',
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
    slug: 'quran-app',
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
    slug: 'infralib',
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
    slug: 'komship',
    title: 'Komship Landing Page',
    technology: ['Vue Js', 'TailwindCSS'],
    url: {
      deploy: 'https://komship-clone.vercel.app/',
    },
  },
  {
    image: '/assets/project/SIPUS.jpg',
    description:
      'SIPUS is a software application or a suite of software modules designed to facilitate and manage various operations and processes within a library. It is a comprehensive system that integrates and automates different aspects of library management, providing efficient access to library resources and services.',
    slug: 'sipus',
    title: 'SIPUS (Sistem Informasi Perpustakaan',
    technology: ['Vue', 'PrismaORM', 'ExpressJS'],
    url: {
      source: 'https://github.com/rizkiramadhanxx/fe-sipus',
    },
  },
];

export default projects;
