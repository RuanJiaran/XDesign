import { defineConfig } from 'dumi';
import { menus } from './src/_config';

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
  //   // '@cls-prefix': 'xd', // 所有组件样式前缀
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
  menus: menus,
});
