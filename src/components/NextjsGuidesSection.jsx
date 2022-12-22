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
          title="Add Tigris to an existing Next.js Application"
          description="This guide will help you add Tigris to an existing Next.js application"
          to="/guides/nextjs/add-existing-app/"
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
