module.exports = {
  title: "karl-cli",
  description: "vuepress-template",
  base: "/", 
  themeConfig: {
    sidebarDepth: 2,
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