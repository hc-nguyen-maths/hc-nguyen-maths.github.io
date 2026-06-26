// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications by category and reverse time order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-enseignement-teaching",
          title: "Enseignement (Teaching)",
          description: "Cours, ressources et références pour mon enseignement et activités de diffusion.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-fr-champs-de-vecteurs-ou-fonctions",
        
          title: "[FR] Champs de vecteurs ou fonctions?",
        
        description: "Les champs de vecteurs sont introduits souvent comme des fonctions, mais cette présentation est trompeuse et surtout incohérente avec l&#39;usage que l&#39;on en a en physique. L&#39;objectif de ce billet de blog est de rétablir la différence entre ces deux concepts proches et aussi d&#39;expliquer pourquoi ces confusions sont faites.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/champs-fonctions/";
          
        },
      },{id: "post-fr-limites-inductive-et-projective-deux-objets-limites-différents",
        
          title: "[FR] Limites inductive et projective -- Deux objets limites différents",
        
        description: "Contrairement à la limite des suites de nombres, la notion de limites d&#39;une famille d&#39;objets plus riches -- ensembles, espaces vectoriels, anneaux -- la situation devient plus subtile.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/limites/";
          
        },
      },{id: "post-fr-la-trace-des-endomorphismes",
        
          title: "[FR] La trace des endomorphismes",
        
        description: "Le programme de MPSI introduit le déterminant d&#39;un endomorphisme par une propriété indépendante du choix de base. L&#39;objectif de ce billet est de l&#39;obtenir pour la trace.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/trace/";
          
        },
      },{id: "post-fr-le-miracle-de-la-table-de-multiplication",
        
          title: "[FR] Le miracle de la table de multiplication",
        
        description: "Pourquoi un enfant peut connaître sa table de 6 sans connaître sa table de 8 - et pourquoi il a moins tort qu&#39;on ne le croit.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/multiplication/";
          
        },
      },{id: "post-fr-espaces-de-configuration-physique-musique-et-toblerone",
        
          title: "[FR] Espaces de configuration : physique, musique et toblerone",
        
        description: "Comment un accord de trois notes devient naturellement un toblerone?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/configuration-spaces/";
          
        },
      },{id: "news-site-personnel-mis-en-ligne-et-mise-en-ligne-du-premier-post-fr-espaces-de-configuration-physique-musique-et-toblerone-personal-website-online-and-first-blog-post-uploaded-fr-espaces-de-configuration-physique-musique-et-toblerone",
          title: '🇫🇷 Site personnel mis en ligne et mise en ligne du premier post...',
          description: "",
          section: "News",},{id: "news-deuxième-billet-de-blog-fr-le-miracle-de-la-table-de-multiplication-second-blog-post-fr-le-miracle-de-la-table-de-multiplication",
          title: '🇫🇷 Deuxième billet de blog : [FR] Le miracle de la table de...',
          description: "",
          section: "News",},{id: "news-premier-preprint-déposé-sur-arxiv-equivariant-poisson-2-algebra-bundles-over-configuration-spaces-first-preprint-submitted-on-arxiv-equivariant-poisson-2-algebra-bundles-over-configuration-spaces",
          title: '🇫🇷 Premier preprint déposé sur arXiv : Equivariant Poisson 2-Algebra Bundles over Configuration...',
          description: "",
          section: "News",},{id: "news-troisième-billet-de-blog-fr-la-trace-des-endomorphismes-third-blog-post-fr-la-trace-des-endomorphismes",
          title: '🇫🇷 Troisième billet de blog : [FR] La trace des endomorphismes. 🇬🇧 Third...',
          description: "",
          section: "News",},{id: "news-quatrième-billet-de-blog-fr-limites-inductive-et-projective-deux-objets-limites-différents-fourth-blog-post-fr-limites-inductive-et-projective-deux-objets-limites-différents",
          title: '🇫🇷 Quatrième billet de blog : [FR] Limites inductive et projective – Deux...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%6E%67%75%79%65%6E@%6D%61%74%68.%75%6E%69%76-%6C%79%6F%6E%31.%66%72", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/hc-nguyen-maths", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hai-châu-nguyên-964239145", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv_fr.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
