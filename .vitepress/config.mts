import { defineConfig } from "vitepress";
import { scratchblocksPlugin } from "sb-mdit";

export default defineConfig({
  title: "Scratch Everywhere!",
  description: "Custom Scratch Runtime made in C++!",
  themeConfig: {
    logo:
      "https://github.com/NateXS/Scratch-Everywhere/blob/main/gfx/logo.png?raw=true",
    siteTitle: false,
    sidebar: [
      {
        items: [
          { text: "Introduction", link: "/intro" },
          { text: "Roadmap", link: "/roadmap" },
          { text: "Features", link: "/features" },
          { text: "Limitations", link: "/limitations" },
          { text: "Controls", link: "/controls" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/NateXS/Scratch-Everywhere" },
      { icon: "discord", link: "https://discord.gg/Y2gf5vZHpJ" },
    ],
    footer: {
      message:
        "This project is not affiliated with Scratch, the Scratch Team, or any of the supported platforms' parent companies or organizations.",
    },
  },
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
    config: (md) => md.use(scratchblocksPlugin),
  },
});
