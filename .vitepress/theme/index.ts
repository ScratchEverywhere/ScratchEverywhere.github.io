import DefaultTheme from "vitepress/theme";
import BlankLayout from '../layouts/BlankLayout.vue'
import "@catppuccin/vitepress/theme/mocha/yellow.css";
import "./custom.css";

import { useData } from "vitepress";
import { h } from "vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { frontmatter } = useData();

    if (frontmatter.value.layout === 'blank') {
      return h(BlankLayout);
    }

    return h(DefaultTheme.Layout);
  }
};
