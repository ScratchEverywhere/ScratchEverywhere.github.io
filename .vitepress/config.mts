import { defineConfig } from "vitepress";
import { scratchblocksPlugin } from "sb-mdit";

export default defineConfig({
  title: "Scratch Everywhere!",
  description: "Custom Scratch Runtime made in C++!",
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }]
  ],
  themeConfig: {
    logo:
      "https://github.com/ScratchEverywhere/ScratchEverywhere/blob/main/gfx/menu/logo.png?raw=true",
    siteTitle: false,
    sidebar: [
      {
        items: [
          { text: "Introduction", link: "/intro" },
          { text: "Installation", link: "/install" },
          { text: "Building", link: "/build" },
          { text: "Roadmap", link: "/roadmap" },
          { text: "Features", link: "/features" },
          { text: "Limitations", link: "/limitations" },
          { text: "Controls", link: "/controls" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ScratchEverywhere/ScratchEverywhere" },
      { icon: "discord", link: "https://discord.gg/Y2gf5vZHpJ" },
    ],
    footer: {
      message:
        "This project is not affiliated with Scratch, the Scratch Team, or any of the supported platforms' parent companies or organizations.",
    },
    search: {
      provider: "local",
    },
  },
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
    config: (md) => md.use(scratchblocksPlugin),
  },
  cleanUrls: true,
  mpa: true,
});
