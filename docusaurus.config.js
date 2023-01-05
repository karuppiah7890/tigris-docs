// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/* eslint @typescript-eslint/no-var-requires: "off" */

// Needed for testing with environment variables locally
// On Vercel the environment variables are automatically injected
require("dotenv").config({ path: ".env.local" });

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tigris",
  tagline:
    "For developers who want to build scalable web and mobile apps fast!",
  url: "https://www.tigrisdata.com",
  baseUrl: "/docs/",
  favicon: "img/favicon.ico",
  organizationName: "tigrisdata",
  projectName: "tigris-docs",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: true,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          breadcrumbs: false,
          editUrl: "https://github.com/tigrisdata/tigris-docs/blob/main",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-GW2DNH9EW4",
          anonymizeIP: true,
        },
      }),
    ],
    [
      "docusaurus-protobuffet",
      {
        protobuffet: {
          fileDescriptorsPath: "./fixtures/proto_workspace.json",
          protoDocsPath: "./protodocs",
          sidebarPath: "./generatedSidebarsProtodocs.js",
        },
        docs: {
          sidebarPath: "./sidebarsProtodocs.js",
        },
      },
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: "external/tigris-api/server/v1/openapi.yaml",
            route: "/apidocs/",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#38ac8c",
        },
      },
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-segment",
      {
        apiKey: process.env.NEXT_PUBLIC_ANALYTICS_ID,
        page: {
          category: "docs",
        },
      },
    ],
    [
      "posthog-docusaurus",
      {
        apiKey: process.env.NEXT_POSTHOG_APIKEY,
        enableInDevelopment: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      announcementBar: {
        id: "announcementBar-1", // increment on change
        content: `🚀 <a target="_blank" href="https://www.tigrisdata.com/beta" >Signup</a> for the Tigris beta and ⭐️ give us a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/tigrisdata/tigris">GitHub</a>`,
        backgroundColor: "#5ecbad",
        textColor: "#262b31",
      },
      navbar: {
        hideOnScroll: false,
        logo: {
          href: "https://www.tigrisdata.com/",
          src: "/logo/light.png",
          srcDark: "/logo/dark.png",
          alt: "Tigris Docs",
          height: "26px",
        },
        items: [
          {
            label: "Docs",
            to: "/",
            position: "left",
          },
          {
            label: "API Reference",
            to: "apidocs/",
            position: "left",
          },
          {
            label: "Guides",
            to: "guides/",
            position: "left",
          },
          {
            href: "https://www.tigrisdata.com/blog/",
            label: "Blog",
            position: "left",
          },
          {
            href: "http://discord.tigrisdata.com",
            className: "pseudo-icon discord-icon",
            position: "right",
          },
          {
            href: "https://github.com/tigrisdata/tigris",
            className: "pseudo-icon github-icon",
            position: "right",
          },
          {
            href: "https://twitter.com/TigrisData",
            className: "pseudo-icon twitter-icon",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
          {
            label: "Sign Up",
            href: "https://www.tigrisdata.com/beta#signup-form",
            position: "right",
            className: "wc-portal-signup wc-portal-link",
          },
          {
            label: "Login",
            href: "https://console.preview.tigrisdata.cloud/",
            position: "right",
            className: "wc-portal-login wc-portal-link",
          },
        ],
      },
      footer: {
        logo: {
          href: "https://www.tigrisdata.com/",
          src: "/logo/light.png",
          srcDark: "/logo/dark.png",
          alt: "Tigris Docs",
          height: "26px",
        },
        links: [
          {
            title: "Product",
            items: [
              {
                label: "Cloud Console",
                href: "https://console.preview.tigrisdata.cloud",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "About Us",
                href: "https://www.tigrisdata.com",
              },
              {
                label: "Terms of Service",
                href: "https://www.tigrisdata.com/service-terms",
              },
              {
                label: "Privacy Policy",
                href: "https://www.tigrisdata.com/privacy-policy",
              },
              {
                label: "Contact Us",
                href: "mailto:support@tigrisdata.com",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Documentation",
                href: "https://docs.tigrisdata.com",
              },
              {
                label: "Blog",
                href: "https://blog.tigrisdata.com",
              },
              {
                label: "Videos",
                href: "https://www.youtube.com/channel/UCsCQ5Nl3JOh71UNCCNZ3q2g",
              },
              {
                label: "Community",
                href: "http://discord.tigrisdata.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tigris Data, Inc. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java", "scala"],
      },
      liveCodeBlock: {
        playgroundPosition: "bottom",
      },
      algolia: {
        appId: process.env.NEXT_ALGOLIA_APPID,
        apiKey: process.env.NEXT_ALGOLIA_APIKEY,
        indexName: "tigrisdata",
        contextualSearch: true,
      },
    }),
};

module.exports = config;
