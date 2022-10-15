const menus = {
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
};

export default menus;
