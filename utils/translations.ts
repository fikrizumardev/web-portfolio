export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
    },
    home: {
      available: 'Available for freelance work',
      heroTitlePrefix: 'Building the',
      heroTitleSuffix: 'web_future',
      intro: "Hi, I'm Zumar. A Full Stack Developer crafting clean, performant, and accessible digital experiences.",
      btnExperience: 'View Experience',
      btnEmail: 'Email Me',
      codingBadge: 'Coding',
      cards: {
        clean: { title: 'Clean Code', desc: 'I write semantic, self-documenting code that is easy to maintain and scale.' },
        responsive: { title: 'Responsive', desc: 'Mobile-first approach ensuring pixel-perfect rendering across all devices.' },
        ux: { title: 'Modern UX', desc: 'Intuitive interfaces designed with a focus on accessibility and user delight.' },
      }
    },
    about: {
      title: 'About',
      titleHighlight: 'Me',
      p1: "Hello! I'm Zumar, a passionate Full Stack Developer with a love for clean architecture and modern web technologies.",
      p2: "My journey started with a simple line of HTML and has evolved into building complex, scalable applications. I bridge the gap between design and engineering, focusing on creating intuitive and performant user experiences.",
      p3: "When I'm not pushing commits, I'm likely exploring new tech stacks, contributing to open source, or brewing the perfect cup of coffee. I believe in continuous learning and sharing knowledge with the community.",
      techStack: 'Tech Stack',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        tools: 'Tools & DevOps',
        others: 'Others'
      }
    },
    experience: {
      title: 'Professional',
      titleHighlight: 'Experience',
      subtitle: 'A track record of building robust systems and delivering technical solutions.',
      items: [
        {
          title: "Web Application Development",
          description: "Developing and Maintaining web application"
        },
        {
          title: "Crowdfunding Platform",
          description: "Build app crowdfunding"
        },
        {
          title: "Server Administration",
          description: "Server administrator"
        },
        {
          title: "WordPress Platform",
          description: "Managed wordpress platform"
        },
        {
          title: "PHP Module Development",
          description: "Develop the custom modules for php App"
        },
        {
          title: "API Development",
          description: "API Developer"
        }
      ]
    },
    footer: {
      rights: 'Built with React & Tailwind.'
    }
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      experience: 'Pengalaman',
    },
    home: {
      available: 'Tersedia untuk proyek freelance',
      heroTitlePrefix: 'Membangun',
      heroTitleSuffix: 'masa_depan_web',
      intro: "Halo, saya Zumar. Full Stack Developer yang menciptakan pengalaman digital yang bersih, cepat, dan mudah diakses.",
      btnExperience: 'Lihat Pengalaman',
      btnEmail: 'Email Saya',
      codingBadge: 'Ngoding',
      cards: {
        clean: { title: 'Kode Bersih', desc: 'Saya menulis kode semantik yang terdokumentasi dengan baik agar mudah dikelola.' },
        responsive: { title: 'Responsif', desc: 'Pendekatan mobile-first memastikan tampilan sempurna di semua perangkat.' },
        ux: { title: 'UX Modern', desc: 'Antarmuka intuitif yang dirancang dengan fokus pada aksesibilitas dan kenyamanan pengguna.' },
      }
    },
    about: {
      title: 'Tentang',
      titleHighlight: 'Saya',
      p1: "Halo! Saya Zumar, seorang Full Stack Developer yang bersemangat dengan arsitektur bersih dan teknologi web modern.",
      p2: "Perjalanan saya dimulai dengan sebaris kode HTML dan berkembang menjadi membangun aplikasi yang kompleks dan berskala. Saya menjembatani desain dan teknik, berfokus pada pengalaman pengguna yang intuitif.",
      p3: "Saat tidak menulis kode, saya biasanya mengeksplorasi teknologi baru, berkontribusi pada open source, atau menikmati kopi. Saya percaya pada pembelajaran berkelanjutan dan berbagi ilmu dengan komunitas.",
      techStack: 'Teknologi',
      categories: {
        backend: 'Backend',
        frontend: 'Frontend',
        tools: 'Tools & DevOps',
        others: 'Lainnya'
      }
    },
    experience: {
      title: 'Pengalaman',
      titleHighlight: 'Profesional',
      subtitle: 'Rekam jejak dalam membangun sistem yang tangguh dan memberikan solusi teknis.',
      items: [
        {
          title: "Pengembangan Aplikasi Web",
          description: "Mengembangkan dan memelihara aplikasi web"
        },
        {
          title: "Platform Crowdfunding",
          description: "Membangun aplikasi crowdfunding"
        },
        {
          title: "Administrasi Server",
          description: "Administrator server"
        },
        {
          title: "Platform WordPress",
          description: "Mengelola platform WordPress"
        },
        {
          title: "Pengembangan Modul PHP",
          description: "Mengembangkan modul kustom untuk aplikasi PHP"
        },
        {
          title: "Pengembangan API",
          description: "Pengembang API"
        }
      ]
    },
    footer: {
      rights: 'Dibuat dengan React & Tailwind.'
    }
  }
};

export type Language = 'en' | 'id';