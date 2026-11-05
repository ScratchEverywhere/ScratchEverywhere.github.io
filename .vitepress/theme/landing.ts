export interface HeroAction {
  text: string;
  link: string;
  icon: IconName;
}

export interface Feature {
  title: string;
  details: string;
}

export interface NightlyBuild {
  name: string;
  workflow: string;
}

export interface CommunityLink {
  title: string;
  subtitle: string;
  link: string;
  icon: IconName;
  accent: string;
}

export type IconName =
  | "book"
  | "download"
  | "github"
  | "play"
  | "reddit"
  | "youtube";

const REPO = "https://github.com/ScratchEverywhere/ScratchEverywhere";

export const logo = `${REPO}/raw/main/gfx/menu/logo.png`;
export const demo = `${REPO}/raw/main/docs/demo.gif`;
export const tagline = "Custom Scratch Runtime made in C++!";

export const heroActions: HeroAction[] = [
  { text: "Get started", link: "/intro", icon: "book" },
  { text: "Installation", link: "/install", icon: "download" },
  {
    text: "Try it out on the web!",
    link: "https://scratcheverywhere.github.io/ScratchEverywhere",
    icon: "play",
  },
];

export const features: Feature[] = [
  {
    title: "Cross-Platform",
    details:
      "Scratch Everywhere! is designed to be a cross-platform Scratch runtime for old homebrew consoles.",
  },
  {
    title: "Fast",
    details:
      "Thanks to the programming language Scratch Everywhere! is written in (C++), it's extremely fast compared to normal Scratch.",
  },
  {
    title: "Easy to Use",
    details:
      "Scratch Everywhere! is extremely easy to use. Just download it from the app store, add your projects, and start playing!",
  },
];

export const nightlyBuilds: NightlyBuild[] = [
  { name: "GameCube", workflow: "nightly-gamecube" },
  { name: "DS(i)", workflow: "nightly-nds" },
  { name: "Wii", workflow: "nightly-wii" },
  { name: "3DS", workflow: "nightly-3ds" },
  { name: "Wii U", workflow: "nightly-wiiu" },
  { name: "Switch", workflow: "nightly-switch" },
  { name: "PSP", workflow: "nightly-psp" },
  { name: "Vita", workflow: "nightly-vita" },
  { name: "PS4", workflow: "nightly-ps4" },
  { name: "webOS", workflow: "nightly-webos" },
  { name: "Original Xbox", workflow: "nightly-xbox" },
  { name: "PC", workflow: "nightly-pc" },
  { name: "Libretro", workflow: "nightly-libretro" },
];

export const workflowUrl = (workflow: string) =>
  `${REPO}/actions/workflows/${workflow}.yml`;

export const badgeUrl = (workflow: string) =>
  `${workflowUrl(workflow)}/badge.svg`;

export const discord = {
  invite: "https://discord.gg/Y2gf5vZHpJ",
  widget: "https://discord.com/widget?id=1408875318248345612&theme=dark",
};

export const communityLinks: CommunityLink[] = [
  {
    title: "GitHub",
    subtitle: "ScratchEverywhere",
    link: "https://github.com/ScratchEverywhere",
    icon: "github",
    accent: "black",
  },
  {
    title: "Reddit",
    subtitle: "r/ScratchEverywhere",
    link: "https://reddit.com/r/ScratchEverywhere",
    icon: "reddit",
    accent: "#ff4500",
  },
  {
    title: "YouTube",
    subtitle: "NateXS",
    link: "https://youtube.com/@NateXS",
    icon: "youtube",
    accent: "red",
  },
];
