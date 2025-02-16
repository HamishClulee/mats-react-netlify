// Schema
// {
//     linkTo: {}: Link,
//     postTitle: String,
//     date: String,
//     mdFileName: String,
//     brief: String,
// }

export const POSTS = [
  {
    linkTo: {
      urlName: "the-developer-cost-fallacy",
      mdFileName: "devcost.md",
    },
    title: "The Developer Cost Fallacy",
    date: "11 May 2024",
    brief:
      "Why cost expectations for quality work could actually be over inflated.",
  },
  {
    linkTo: {
      urlName: "one-build-system-to-rule-them",
      mdFileName: "sharedcode.md",
    },
    title: "One Build System - Multiple Apps - Shared Components",
    date: "12 Sept 2020",
    brief:
      "How to achieve this and how to maintain developer experience while doing so. One linter, one typescript config, one build system for all your frontend repositories and a shared components/files directory within the same ecosystem.",
  },
  {
    linkTo: {
      urlName: "wildcard-subdomains",
      mdFileName: "wildcard.md",
    },
    title:
      "Wildcard subdomains on digitalocean using Express and Nginx with Let's Encrypt for SSL.",
    date: "29 Aug 2020",
    brief:
      "A quick explanation of the steps I took to get wildcard subdomains working for welcomeqr.codes",
  },
  {
    linkTo: {
      urlName: "tips-for-new-players",
      mdFileName: "tipsfornewplayers.md",
    },
    title: "Tips For New VueJs Players",
    date: "29 Aug 2020",
    brief:
      "Some common mistakes I observe from juniors devs and how to correct them, primarily focused on VueJs applications.",
  },
  {
    linkTo: {
      urlName: "style-organisation-in-chaotic-places",
      mdFileName: "betterstyles.md",
    },
    title: "Organising Style Out Of Chaos",
    date: "9 May 2020",
    brief: `How I organise style hierarchy in the ever changing world of SPA's SFC and NPM packages.`,
  },
];
