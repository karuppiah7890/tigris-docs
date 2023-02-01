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
        title="Deploying a Next.js Tigris Application to Vercel"
        description="Learn how to deploy a Next.js application built with Tigris to Vercel"
        to="/guides/deploy-tigris-app/deploy-existing-app-to-vercel/"
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
