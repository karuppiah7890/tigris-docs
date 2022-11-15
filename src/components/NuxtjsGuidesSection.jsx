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
          title="Building your first Nuxt.js + Tigris app"
          description="An e-commerce application using Tigris as the backend"
          to="/guides/nuxtjs/ecommerce"
        />
      </Section>

      <Section title="Example GitHub repos" className={className}>
        <Card
          title="Nuxt.js and Tigris starter app"
          description="An e-commerce store built on Next.js and Tigris"
          to="https://github.com/tigrisdata/tigris-netlify-ecommerce"
        />
      </Section>
    </div>
  );
}
