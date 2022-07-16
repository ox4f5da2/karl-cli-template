module.exports = {
  title: "karl-cli",
  description: "vuepress-template",
  base: "/", 
  head: [
    [
      // 这里是网页的小图标，href填写自己的logo的路径
      'link', { rel: 'icon', href: '/images/common/logo.png' }
    ]
  ],
  themeConfig: {
    sidebarDepth: 2,
    // 这里是侧边栏的图标，填写自己的logo的路径
    logo: '/images/common/logo.png', 
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        items: [
          {
            text: '分支1',
            items: [
              { text: 'branch1', link: '/guide/branch1' },
            ]
          },
          {
            text: '分支2',
            items: [
              { text: 'branch2', link: '/guide/branch2' },
            ]
          }
        ]
      },
      { text: 'Github', link: 'https://github.com/ox4f5da2' }
    ],
    sidebar: {
      '/': [
        '',
        '使用文档'
      ]
    }
  }
}