/* eslint-disable react/prop-types */
import React from "react";
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from "./HomepageComponents";

export default function NextjsGuidesSection({ title, className }) {
  return (
    <div>
      <Section title="Tutorials" className={className}>
        <Card
          title="Building your first Next.js + Tigris app"
          description="A to-do list application using Tigris as the backend"
          to="/guides/nextjs/todo-app"
        />
      </Section>

      <Section title="Deployment guides" className={className}>
        <Card
          title="Deploying to Vercel"
          description="Deploy your Next.js and Tigris application to Vercel"
          to="/guides/nextjs/deploy-to-vercel"
        />
        <Card
          title="Deploying to Netlify"
          description="Deploy your Next.js and Tigris application to Netlify"
          to="/guides/nextjs/deploy-to-netlify"
        />
      </Section>

      <Section title="Example GitHub repos" className={className}>
        <Card
          title="Next.js and Tigris starter app"
          description="A to-do list app built on Next.js and Tigris"
          to="https://github.com/tigrisdata/tigris-vercel-starter"
        />
        <Card
          title="Next.js 13 and Tigris starter app"
          description="A to-do list app built on Next.js 13 and Tigris"
          to="https://github.com/tigrisdata/tigris-nextjs13-starter-kit"
        />
      </Section>
    </div>
  );
}
