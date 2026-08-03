import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {type: 'doc', id: 'intro'},
    {
      type: 'category',
      label: 'Protocol',
      items: ['protocol/overview'],
    },
    {
      type: 'category',
      label: 'Developers',
      items: ['developers/workflow'],
    },
    {type: 'doc', id: 'community'},
  ],
};

export default sidebars;
