import DefaultTheme from "vitepress/theme";
import "@catppuccin/palette/css/catppuccin.css";
import "@catppuccin/vitepress/theme/mocha/yellow.css";
import "./custom.css";
import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout,
};
