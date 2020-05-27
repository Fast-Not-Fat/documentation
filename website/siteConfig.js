const siteConfig = {
  title: 'colobobo',
  tagline: 'Documentation for colobobo project',
  url: 'https://colobobo.github.io/documentation/',
  baseUrl: '/documentation/',
  projectName: 'documentation',
  organizationName: 'colobobo',
  headerLinks: [
    { doc: 'sockets/game', label: 'Docs' },
    { href: "https://github.com/colobobo", label: "GitHub" },
    /**
     * TODO: Add blog
     * {blog: true, label: 'Blog'},
     */
  ],
  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#526AF7',
    secondaryColor: '#FCDF4D',
  },
  copyright: `Copyright © ${new Date().getFullYear()} colobobo`,
  highlight: {
    theme: 'default',
  },
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
};

module.exports = siteConfig;
