/* eslint-disable react/prop-types */
import React from "react";
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from "./HomepageComponents";

export default function NextjsGuidesSection({ title, className }) {
  return (
    <Section title={title} className={className}>
      <Card
        title="Building your first Next.js + Tigris app"
        description="A to-do list application using Tigris as the backend"
        to="https://blog.tigrisdata.com/build-data-rich-apps-nextjs-tigris-vercel"
      />
      <Card
        title="Deploy Next.js + Tigris app on Netlify"
        description="Deployment steps for a to-do list app on Netlify"
        to="/guides/nextjs/next-todo-app-netlify-deployment"
      />
    </Section>
  );
}
