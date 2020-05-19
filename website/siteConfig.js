const siteConfig = {
  title: 'Fast Not Fat',
  tagline: 'Documentation for Fast Not Fat project',
  url: 'https://your-docusaurus-test-site.com', // TODO: Set
  baseUrl: '/',
  projectName: 'fast-not-fat',
  organizationName: 'Fast Not Fat',
  headerLinks: [
    { doc: 'sockets/game', label: 'Docs' },
    { href: "https://github.com/Fast-Not-Fat", label: "GitHub" },
    /**
     * TODO: Add blog
     * {blog: true, label: 'Blog'},
     */
  ],
  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#2e424b',
    secondaryColor: '#202e34',
  },
  copyright: `Copyright © ${new Date().getFullYear()} Fast Not Fat`,
  highlight: {
    theme: 'default',
  },
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
};

module.exports = siteConfig;
