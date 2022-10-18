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
      children: ['Grid'],
    },
    // {
    //   title: '输入',
    //   children: [
    //     'Input',
    //     'InputNumber',
    //     'Textarea',
    //     'Checkbox',
    //     'Select',
    //     'Switch',
    //     'Radio',
    //     'Slider',
    //     'Form',
    //   ],
    // },
    {
      title: '数据展示',
      children: ['Table', 'Pagination'],
    },
    {
      title: '消息提醒',
      children: ['Alert', 'Message'],
    },
    {
      title: '其它',
      children: ['Example'],
    },
  ],
};

export default menus;
