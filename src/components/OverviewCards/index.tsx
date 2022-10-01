/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";

const OverviewCards = [
  {
    name: "Quickstart",
    url: {
      page: "/quickstart",
    },
    description: (
      <Translate id="quickstart.description">
        Explore our Quickstart to build an application using Tigris Cloud or in
        your local environment.
      </Translate>
    ),
    buttonDescription: "Get started with QuickStart",
  },
  {
    name: "Documents",
    url: {
      page: "/overview/documents",
    },
    description: (
      <Translate id="document.description">
        Simple and intuitive transactional APIs for storing, querying, and
        searching JSON documents.
      </Translate>
    ),
    buttonDescription: "Get started with Documents Collection",
  },
  {
    name: "Event Streaming",
    url: {
      page: "/overview/events/event",
    },
    description: (
      <Translate id="event.description">
        Build an event streaming application using our publish-subscribe APIs.
      </Translate>
    ),
    buttonDescription: "Get started with Event Streaming",
  },
  {
    name: "Search",
    url: {
      page: "/overview/search",
    },
    description: (
      <Translate id="search.description">
        Automatically search all your data. Explore the functionality and
        examples.
      </Translate>
    ),
    buttonDescription: "Get started with built-in Search",
  },
  {
    name: "Flexible Data Model",
    url: {
      page: "/overview/documents/datamodel",
    },
    description: (
      <Translate id="model.description">
        Supports a wide variety of applications. JSON-like structure makes it
        easy to map to the objects in your code.
      </Translate>
    ),
    buttonDescription: "Get started with Data Modeling",
  },
];
const LanguageCards = [
  {
    name: "Typescript",
    url: {
      page: "/typescript",
    },
    buttonDescription: "Typescript References",
  },
  {
    name: "HTTP",
    url: {
      page: "/http",
    },
    buttonDescription: "HTTP References",
  },
  {
    name: "Go",
    url: {
      page: "/golang",
    },
    buttonDescription: "Go References",
  },
  {
    name: "Java",
    url: {
      page: "/java",
    },
    buttonDescription: "Java References",
  },
];
const SampleAppCards = [
  {
    name: "Building an Application in Typescript",
    url: {
      page: "/guides/rest-webapp-typescript",
    },
    buttonDescription: "Typescript RESTful Web App",
  },
  {
    name: "Building an Application in Go",
    url: {
      page: "/rest-webapp-go",
    },
    buttonDescription: "Go RESTful Web App",
  },
  {
    name: "Building an Application in Java",
    url: {
      page: "/rest-webapp-java",
    },
    buttonDescription: "Java RESTful Web App",
  },
];

interface Props {
  name: string;
  image?: string;
  url: {
    page?: string;
  };
  description?: JSX.Element;
  buttonDescription: string;
}

function OverviewCard({
  name,
  image,
  url,
  description,
  buttonDescription,
}: Props) {
  return (
    <div className="col col--5 margin-bottom--lg">
      <div className={clsx("card")}>
        <div className={clsx("card__image")}>
          <Link to={url.page}>
            <img src={image}></img>
          </Link>
        </div>
        <div className="card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url.page}>
              <Translate id="special.tryItButton">
                {buttonDescription}
              </Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OverviewCardsRow(): JSX.Element {
  return (
    <div className="row">
      {OverviewCards.map((special) => (
        <OverviewCard key={special.name} {...special} />
      ))}
    </div>
  );
}

function LanguageCard({
  name,
  image,
  url,
  description,
  buttonDescription,
}: Props) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className={clsx("card")}>
        <div className={clsx("card__image")}>
          <Link to={url.page}>
            <img src={image}></img>
          </Link>
        </div>
        <div className="card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url.page}>
              <Translate id="special.tryItButton">
                {buttonDescription}
              </Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LanguageCardsRow(): JSX.Element {
  return (
    <div className="row">
      {LanguageCards.map((special) => (
        <LanguageCard key={special.name} {...special} />
      ))}
    </div>
  );
}

function SampleAppCard({
  name,
  image,
  url,
  description,
  buttonDescription,
}: Props) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className={clsx("card")}>
        <div className={clsx("card__image")}>
          <Link to={url.page}>
            <img src={image}></img>
          </Link>
        </div>
        <div className="card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url.page}>
              <Translate id="special.tryItButton">
                {buttonDescription}
              </Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SampleAppCardsRow(): JSX.Element {
  return (
    <div className="row">
      {SampleAppCards.map((special) => (
        <SampleAppCard key={special.name} {...special} />
      ))}
    </div>
  );
}
