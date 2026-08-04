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
      title: 'hush.',
      items: [
        {
          href: 'https://hushmoney.fun',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://hushmoney.fun/#waitlist',
          label: 'Join waitlist',
          position: 'right',
        },
        {
          href: 'https://x.com/HushProtocolHQ',
          label: 'Follow on X',
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
            {label: 'Waitlist', href: 'https://hushmoney.fun/#waitlist'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Join waitlist', href: 'https://hushmoney.fun/#waitlist'},
            {label: 'Follow on X', href: 'https://x.com/HushProtocolHQ'},
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
