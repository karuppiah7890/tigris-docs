/* eslint-disable react/prop-types */
import React from "react";
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from "./HomepageComponents";

export default function GuidesSection({ title, className }) {
  return (
    <Section title={title} className={className}>
      <Card
        title="Tigris and Next.js"
        description="Using Tigris as the backend for Next.js applications"
        to="/guides/nextjs/"
      />
      <Card
        title="Tigris and Nuxt.js"
        description="Using Tigris as the backend for Nuxt.js applications"
        to="/guides/nuxtjs/"
      />
      <Card
        title="Deploying apps built with Tigris"
        description="Learn how easy it is to deploy applications built with Tigris"
        to="/guides/deploy-tigris-app/deploy-to-vercel/"
      />
      <Card
        title="Building a REST web app in TypeScript"
        description="A simple RESTful web application using Tigris as backend"
        to="/guides/rest-webapp-typescript"
      />
      <Card
        title="Building a REST web app in Go"
        description="A simple RESTful web application using Tigris as backend"
        to="/guides/rest-webapp-go"
      />
      <Card
        title="Building a REST web app in Java"
        description="A simple RESTful web application using Tigris as backend"
        to="/guides/rest-webapp-java"
      />
    </Section>
  );
}
