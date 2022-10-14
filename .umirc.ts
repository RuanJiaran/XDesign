import { defineConfig } from 'dumi';
import { clsPrefix } from './src/_config';

export default defineConfig({
  title: 'Design',
  favicon: '/XDesign/favicon.png',
  logo: '/XDesign/logo.png',
  base: '/XDesign',
  publicPath: '/XDesign/',
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: ['docs', 'src'],
  },
  locales: [['zh-CN', '中文']],
  // theme: {
  //   // 配置 less 变量
  //   // '@theme': 'default', // 主题样式
  //   // '@cls-prefix': clsPrefix, // 所有组件样式前缀
  // },
  apiParser: {},
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '设计',
      path: '/design',
    },
    {
      title: '指南',
      path: '/guide',
    },
    {
      title: '组件',
      path: '/components',
    },
  ],
  menus: {
    '/guide': [
      {
        title: '快速开始',
        path: '/guide',
      },
    ],
    '/design': [
      {
        title: 'Color 色彩',
        path: '/design',
      },
    ],
    '/components': [
      {
        title: '基础',
        children: ['Button', 'Space', 'Icon'],
      },
      {
        title: '布局',
        children: ['Layout/index.md', 'Grid/index.md'],
      },
      {
        title: '输入',
        children: [
          'Input/index.md',
          'InputNumber/index.md',
          'Textarea/index.md',
          'Checkbox/index.md',
          'Select/index.md',
          'Switch/index.md',
          'Radio/index.md',
          'Slider/index.md',
          'Form/index.md',
        ],
      },
      {
        title: '数据展示',
        children: ['Table/index.md'],
      },
      {
        title: '消息提醒',
        children: [],
      },
    ],
  },
});
