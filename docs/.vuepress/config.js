module.exports = {
  base: "/factorial-frontend-stack/",
  title: "Factorial Frontend Stack",
  description: "Modern frontend tooling with minimal configuration",
  themeConfig: {
    repo: "factorial-io/factorial-frontend-stack",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    sidebarDepth: 0,
    displayAllHeaders: true,
    docsDir: 'docs',
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
