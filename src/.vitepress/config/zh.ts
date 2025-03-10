import { defineConfig, type DefaultTheme } from "vitepress";

export const zh = defineConfig({
  lang: "zh-CN",
  description: "为AI构建的私有实时知识库",

  themeConfig: {
    // nav: nav(),

    sidebar: sidebarGuide(),

    editLink: {
      pattern: "https://github.com/docbase-cc/doc/edit/main/src/:path",
      text: "在 GitHub 上编辑此页面",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});

// function nav(): DefaultTheme.NavItem[] {
//   return [
//     {
//       text: '快速开始',
//       link: '/guide/start-install',
//       activeMatch: '/guide/'
//     },
//     {
//       text: '关于',
//       link: '/other/about',
//       activeMatch: '/other/about'
//     }
//   ]
// }

function sidebarGuide(): DefaultTheme.Sidebar {
  return [
    {
      text: '快速开始',
      base: '/docs',
      collapsed: true,
      items: [
        { text: '简介', link: '/introduce' },
        { text: '部署', link: '/start' },
        { text: 'API 文档', link: '/swagger' },
        { text: 'WebDAV 协议', link: '/webdav' },
        { text: '接入 Dify 打造你的第二大脑', link: '/dify' },
      ]
    }
  ]
}
