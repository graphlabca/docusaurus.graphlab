// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// Import Types
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';
import type {Options as PageOptions} from '@docusaurus/plugin-content-pages';
// Import the Docusaurus version.
const { DOCUSAURUS_VERSION } = require("@docusaurus/utils");
// Setup our Prism themes.
import { themes } from 'prism-react-renderer';
const lightCodeTheme = themes.vsLight;
const darkCodeTheme = themes.vsDark;
// Define our admonitions config.
const admonitionsConfig = {
  admonitions: {
    keywords: [
      'discord',
      'info',
      'success',
      'danger',
      'note',
      'tip',
      'warning',
      'important',
      'caution',
      'powershell',
      'security',
      'ninja',
      'release',
      'credit'
    ],
  },
}
// Import our remark plugins.
import npm2yarn from '@docusaurus/remark-plugin-npm2yarn';
import tabBlocks from 'docusaurus-remark-plugin-tab-blocks';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkDefList from 'remark-deflist';

// Setup our common remark plugin config.
const remarkPluginsConfig = {
  remarkPlugins: [
    [ npm2yarn, { sync: true } ],
    tabBlocks,
    remarkMath,
    rehypeKatex,
    remarkDefList,
  ]
}
// Setup our common config options for docs plugin instances.
const commonDocsPluginConfig = {
  showLastUpdateAuthor: false,
  showLastUpdateTime: true,
  sidebarCollapsible: true,
  sidebarCollapsed: true,
  ...admonitionsConfig,
  ...remarkPluginsConfig,
}

import plausiblePlugin from 'docusaurus-plugin-plausible';

/** @type {import('@docusaurus/types').Config} */
const config: Config = {
  title: 'GraphLab Consulting Docs',
  tagline: 'Graphic Lab Web Services Documentation Node ',
  favicon: 'img/favicon.ico',
  url: 'https://docs.graphlab.ca',
  baseUrl: '/',
  organizationName: 'graphlabca', // Usually your GitHub org/user name.
  projectName: 'docusaurus.graphlab', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: 'knowledge',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/graphlabca/docusaurus.graphlab/edit/main/',
          ...commonDocsPluginConfig,
        } satisfies DocsOptions,
        blog: false,
        pages: {
          ...admonitionsConfig,
          ...remarkPluginsConfig
        } satisfies PageOptions,
        theme: {
          customCss: './src/scss/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'GraphLab Documentation Node',
        logo: {
          alt: 'Graphic Lab Web Services Logo',
          src: 'img/graphlab_logo.svg',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Knowledge',
          },
          {
            to: 'plugindirectory',
            position: 'left',
            label: 'Plugin Directory',
          },
          {
            to: 'https://sponsor.graphlab.ca',
            label: 'Sponsor',
            position: 'right',
            target: '_blank',
            className: 'sponsorship-link',
          },
          {
            to: 'https://discord.graphlab.ca',
            label: 'Discord',
            position: 'right',
            target: '_blank',
            className: 'discord-link',
          },
          {
            to: 'https://github.graphlab.ca',
            label: 'GitHub',
            position: 'right',
            target: '_blank',
            className: 'github-link',
          },
        ],
      },
      footer: {
        logo: {
          alt: 'Graphlab Logo',
          src: 'img/Graphlab.svg',
          href: 'https://graphlab.ca',
          height: 50,
          width: 50,
        },
        style: 'dark',
        links: [
          {
            title: 'Guides',
            items: [
              {
                label: 'Knowledge',
                to: '/knowledge/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                to: 'https://stackoverflow.graphlab.ca',
              },
              {
                label: 'Discord',
                to: 'https://discord.graphlab.ca',
              },
              {
                label: 'X',
                to: 'https://x.graphlab.ca',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Graphlab Blog',
                to: 'https://blog.graphlab.ca',
              },
              {
                label: 'Graphlab GitHub',
                to: 'https://github.graphlab.ca',
              },
            ],
          },
        ],
        copyright: `Built with <a href="https://docusaurus.io">Docusaurus v${DOCUSAURUS_VERSION}</a>.<br /><span class="designedBy">Compiled with <svg xmlns="http://www.w3.org/2000/svg" class="heart" width="24" height="24" viewBox="0 0 24 24"><path d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"/></svg>
        by <a href="https://senih.dev">senihucar</a></span>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell','bash','docker', 'diff', 'json']
      },
    } satisfies Preset.ThemeConfig,
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').Options} */
      {
        quality: 100,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
    'docusaurus-plugin-sass',
    [
      plausiblePlugin,
      {
        domain: 'docusaurus.community',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: 'contributing',
        path: 'contributing',
        routeBasePath: 'contributing',
        sidebarPath: './sidebars.js',
        editUrl: 'https://https://github.com/graphlabca/docusaurus.graphlab/tree/main/',
        ...commonDocsPluginConfig,
      } satisfies DocsOptions,
    ]
  ],
  webpack: {
    jsLoader: (isServer: boolean) => ({
      loader: 'swc-loader',
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            }
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
  markdown: {
    format: 'detect',
    mermaid: true,
    mdx1Compat: {
      comments: false,
      headingIds: false,
      admonitions: false,
    }
  },
};
export default config;
