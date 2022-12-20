import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from "../components/HomepageComponents";
import {
  RedStar,
  APIReferenceIcon,
  YellowStar,
  GreenStar,
  GoIcon,
  JavaIcon,
  TSIcon,
  TerminalIcon,
  GreenCheck,
} from "../icons";
import GuidesSection from "../components/GuidesSection";

export default function Homepage() {
  return (
    <Layout
      description="Data platform built for developers 🚀"
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div id="hero">
            <h2>Tigris Docs</h2>
            <p>Tigris is the easiest way to build data-rich apps!</p>
            <p>
              Use it as a scalable, ACID transactional, real-time backend for
              your serverless applications. Build data-rich features without
              worrying about slow queries or missing indexes. Seamlessly
              implement search within your applications with its embedded search
              engine. Connect serverless functions with its event streams to
              build highly responsive applications that scale automatically.
            </p>
            <p>
              <Link className="homepage-button" href="/overview">
                Get Started
              </Link>
            </p>
          </div>

          <Section title="Get to know Tigris">
            <Card
              title="Quickstart"
              description="Essential guide to get you up and running quickly"
              to="/quickstart"
            />
            <Card
              title="Guides"
              description="Take a look at the guides we have prepared to get you started"
              to="/guides/"
            />
            <Card
              title="Tigris + Next.js"
              description="Guides to help you easily build a dynamic data-rich Next.js app with Tigris."
              to="/guides/nextjs/"
            />
            <Card
              title="Tigris + Nuxt.js"
              description="Guides to help you easily build a dynamic data-rich Nuxt.js app with Tigris."
              to="/guides/nuxtjs/"
            />
          </Section>

          <Section title="Core Features" id="core-features" HeadingTag="h3">
            <Card
              title="Scalable Document Database"
              description="Supports a wide variety of applications with JSON-like structure that makes it easy to map to the objects in your code. Core data storage built on FoundationDB, a distributed data store that enables nearly limitless scalability."
              to="/database/"
              icon={<YellowStar />}
            />
            <Card
              title="Full-text Search Engine"
              description="By integrating the database, search engine, and sync mechanism into a unified, and fully managed platform, Tigris Search is the fastest and easiest way to build search capabilities into your applications."
              to="/searching/"
              icon={<YellowStar />}
            />
            <Card
              title="Transactions"
              description="Transactions that work across collections and documents without any restrictions. Unlike MongoDB, there are no confusing read/write concerns to configure, no cross-shard restrictions, and no data inconsistencies."
              to="/database/transaction"
              icon={<GreenStar />}
            />
          </Section>

          <Section title="SDKs" id="core-sdks">
            <Card
              title="TypeScript"
              description="Integrate Tigris in your TypeScript App"
              to="/typescript/"
              icon={<TSIcon />}
            />
            <Card
              title="Golang"
              description="Integrate Tigris in your Golang App"
              to="/golang/"
              icon={<GoIcon />}
            />
            <Card
              title="Java"
              description="Integrate Tigris in your Java App"
              to="/java/database"
              icon={<JavaIcon />}
            />
          </Section>

          <Section title="Tools">
            <Card
              title="Tigris CLI"
              description="A command line tool to get things done quick"
              to="/cli/"
              icon={<TerminalIcon />}
            />
            <Card
              title="Create Tigris App"
              description="The easiest way to get started in TypeScript"
              to="/create-tigris-app/"
              icon={<TerminalIcon />}
            />
          </Section>

          <Section title="API Reference">
            <Card
              title="API Reference"
              description="Tigris HTTP API Reference"
              to="/apidocs/"
              icon={<APIReferenceIcon />}
            />
          </Section>

          <GuidesSection title="Advanced Guides" />
        </div>
      </div>
    </Layout>
  );
}
