module.exports = {
  title: "Factorial Frontend Stack",
  description: "Zero initial configuration",
  themeConfig: {
    repo: "factorial-io/factorial-frontend-stack",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    sidebarDepth: 0,
    displayAllHeaders: true,
    sidebar: "auto",
    nav: [
      { text: "Guide", link: "/guide/" },
      {
        text: "Packages",
        link: "/packages/",
        items: [
          { text: "core", link: "/packages/core/" },
          { text: "jest", link: "/packages/jest/" },
          { text: "pattern-lab", link: "/packages/pattern-lab/" }
        ]
      },
      { text: "FAQ", link: "/faq/" }
    ]
  }
};
