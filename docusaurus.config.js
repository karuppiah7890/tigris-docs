// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/* eslint @typescript-eslint/no-var-requires: "off" */

// Needed for testing with environment variables locally
// On Vercel the environment variables are automatically injected
require("dotenv").config({ path: ".env.local" });

const tigrisConfig = require("./tigris.config");

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
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  trailingSlash: true,

  clientModules: [require.resolve("./src/util/augmentConsoleLinks.js")],

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
            route: "/references/api/",
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
      "posthog-docusaurus",
      {
        apiKey: process.env.NEXT_POSTHOG_APIKEY,
        enableInDevelopment: process.env.USE_POSTHOG_IN_DEVELOPMENT === "true",
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
        content: `🚀 <a target="_blank" href="${tigrisConfig.signupUrl}" >Signup</a> for the Tigris beta and ⭐️ give us a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/tigrisdata/tigris">GitHub</a>`,
        backgroundColor: "#5ecbad",
        textColor: "#262b31",
      },
      navbar: {
        hideOnScroll: false,
        logo: {
          href: tigrisConfig.websiteUrl,
          src: "/logo/light.png",
          srcDark: "/logo/dark.png",
          alt: "Tigris Docs",
          height: "26px",
          target: "_self",
        },
        items: [
          {
            label: "Docs",
            to: "/",
            position: "left",
          },
          {
            label: "Quickstarts",
            to: "quickstarts/",
            position: "left",
          },
          {
            label: "Concepts",
            to: "concepts/",
            position: "left",
          },
          {
            label: "SDKs & Tools",
            to: "sdkstools/",
            position: "left",
          },
          {
            label: "Guides",
            to: "guides/",
            position: "left",
          },
          {
            label: "References",
            to: "references/",
            position: "left",
          },
          {
            href: tigrisConfig.blogUrl,
            label: "Blog",
            position: "left",
            target: "_self",
            rel: "",
            className: "disable-external-icon",
          },
          {
            href: tigrisConfig.discordUrl,
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
            href: tigrisConfig.signupUrl,
            position: "right",
            className: "wc-portal-signup wc-portal-link",
          },
          {
            label: "Login",
            href: tigrisConfig.loginUrl,
            position: "right",
            className: "wc-portal-login wc-portal-link",
          },
        ],
      },
      footer: {
        logo: {
          href: tigrisConfig.websiteUrl,
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
                href: tigrisConfig.consoleUrl,
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "About Us",
                href: tigrisConfig.websiteUrl,
                target: "_self",
                rel: "",
                className: "footer__link-item disable-external-icon",
              },
              {
                label: "Terms of Service",
                href: `${tigrisConfig.websiteUrl}/service-terms`,
                target: "_self",
                rel: "",
                className: "footer__link-item disable-external-icon",
              },
              {
                label: "Privacy Policy",
                href: `${tigrisConfig.websiteUrl}/privacy-policy`,
                target: "_self",
                rel: "",
                className: "footer__link-item disable-external-icon",
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
                href: "/docs/",
              },
              {
                label: "Blog",
                href: tigrisConfig.blogUrl,
                target: "_self",
                rel: "",
                className: "footer__link-item disable-external-icon",
              },
              {
                label: "Videos",
                href: "https://www.youtube.com/channel/UCsCQ5Nl3JOh71UNCCNZ3q2g",
              },
              {
                label: "Community",
                href: tigrisConfig.discordUrl,
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
