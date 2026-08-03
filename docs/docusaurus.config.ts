import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'hush docs',
  tagline: 'Confidential execution for open markets.',
  favicon: 'img/hush-mark.svg',
  url: 'https://hushmoney.fun',
  baseUrl: '/docs/',
  organizationName: 'Chainscore',
  projectName: 'hush-landing',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'hush',
      logo: {
        alt: 'hush mark',
        src: 'img/hush-mark.svg',
      },
      items: [
        {
          href: 'https://hushmoney.fun',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://discord.com/',
          label: 'Join Discord',
          position: 'right',
        },
        {
          href: 'https://twitter.com/',
          label: 'Follow Twitter',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            {label: 'Website', href: 'https://hushmoney.fun'},
            {label: 'Community', to: '/community'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Join Discord', href: 'https://discord.com/'},
            {label: 'Follow Twitter', href: 'https://twitter.com/'},
          ],
        },
      ],
      copyright: 'hush · Confidential execution for open markets',
    },
    prism: {
      theme: {
        plain: {
          color: '#f1f0ec',
          backgroundColor: '#121315',
        },
        styles: [],
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
