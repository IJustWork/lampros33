// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'IJustWork', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/lampros33/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'TBM',
          description:
            'The bees mountian (TBM) is a personal project of mine to improve my skills and help me make my future games as optimized as possible.',
          imageUrl:
            'https://i.ibb.co/kJrFJZh/Screenshot-22.jpg',
          link: '',
        },
        {
          title: 'Boxing training simulator',
          description:
            'I was commissioned to make the game, well what can I say.. it was fun!',
          imageUrl:
            'https://i.ibb.co/5Y7NHjL/image.png',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of lampros33',
    description: 'https://avatars.githubusercontent.com/u/129218181?v=4',
    imageURL: '',
  },
  social: {
    // linkedin: 'ariful-alam',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // facebook: '',
    // instagram: '',
    // youtube: '', // example: 'pewdiepie'
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    // website: 'https://www.arifszn.com',
    // phone: '',
    // email: 'arifulalamszn@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Lua',
    'Html',
    'Graphics Design',
    'UI Design',
  ],
  experiences: [
    {
      company: 'Ducki Games',
      position: 'Project manager & primary scripter.',
      from: 'Past',
      to: 'Recent past',
      companyLink: 'https://www.roblox.com/groups/13783362',
    },
    {
      company: 'Verge Studio (Xanti Dev)',
      position: 'Secondary scripter.',
      from: 'Unknown Data',
      to: '2022',
      companyLink: 'https://www.roblox.com/groups/10847461',
    },
  ],
  certifications: [
    
  ],
  educations: [
    
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and love`,

  enablePWA: true,
};

export default CONFIG;
