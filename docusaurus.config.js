// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Adventures on Nexus',
  tagline: 'Stream of consciousness blog for programming scripts for IRE Nexus',
  url: 'https://keneanung.github.io',
  baseUrl: '/adventures-on-nexus/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'keneanung', // Usually your GitHub org/user name.
  projectName: 'adventures-on-nexzs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
// docs are not used right now, but may be as soon as there are some FAQs or other knowledge
//        docs: {
//          sidebarPath: require.resolve('./sidebars.js'),
//          // Please change this to your repo.
//          editUrl: 'https://github.com/keneanung/adventures-on-nexus/edit/main/website/',
//        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/keneanung/adventures-on-nexus/edit/main/website/blog/',
          routeBasePath: '/',
          path: './blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Adventures on Nexus',
        logo: {
          alt: 'Adventures on Nexus Logo',
          src: 'img/logo.svg',
        },
        items: [
//          {
//            type: 'doc',
//            docId: 'intro',
//            position: 'left',
//            label: 'Tutorial',
//          },
          {to: '/', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/keneanung/adventures-on-nexus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
//          {
//            title: 'Docs',
//            items: [
//              {
//                label: 'Tutorial',
//                to: '/docs/intro',
//              },
//            ],
//          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/keneanung/adventures-on-nexus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} keneanung, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
