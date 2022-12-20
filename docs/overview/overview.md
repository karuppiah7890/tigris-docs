# Overview

As developers ourselves, we have always wanted just to be able to focus on
building applications and scale up those services and not spend time maintaining
infrastructure. DevOps sure made "maintaining infrastructure" cool again. But
as a Developer, you would want to focus on your application, not Operations.

This is why we have built Tigris. Tigris is an open source developer data
platform that provides a cohesive, flexible set of data management services with
an API-like approach to interact with data just as apps interact with other
services such as Stripe. This allows you to build dynamic, data-driven applications
in an infrastructure-less way.

Tigris provides an instantaneous and code-first experience. For example,
suppose your application needs a database. In that case, all you need is the
following two lines of code, and the database is made available instantaneously
without you having to step out from your application code.

```ts
const client = new Tigris();
const db = client.getDatabase();
```

Today, we provide a transactional document database and a full-text search
engine for every project on Tigris. At the same time, we are working on adding
more commonly used data services to the platform.

Tigris is licensed under the terms of the
[Apache License v2.0](http://www.apache.org/licenses/LICENSE-2.0) and is
available as a hosted platform through [Tigris Cloud](https://console.preview.tigrisdata.cloud/)
so that you don't have to manage any infrastructure.

### Features

- 🪗 **Flexible Document Model**
  - Supports a wide variety of applications.
  - JSON-like structure makes it easy to map to the objects in your code.
  - Schema changes are performed in a lightweight manner without any
    downtime and do not require a collection rebuild.
- 🏝 **Simple APIs**
  - Quickly add data and easily retrieve or edit that data through simple
    and intuitive APIs.
  - Continue using your preferred programming language, there is no new
    database query language to learn.
- 🏦 **Transactions**
  - Transactions that work across collections and documents without any
    restrictions.
  - Strictly serializable isolation by default. Unlike some
    other document databases, there are no confusing read / write concerns to
    configure, and no cross-shard caveats.
- 🤖 **Automatic Index Maintenance & Management**
  - Easily query all your data without any database administration overhead.
  - The system makes query tuning a thing of the past with automatic index
    management and maintenance, meaning you will never have to worry about
    slow queries due to missing indexes.
- 🔍 **Real-time Search**
  - Search across all your collections at once using full text or faceted
    search.
  - Create rich user experiences with an integrated search engine
    that eliminates the need to run a separate search platform and
    synchronize data.
- 💚 **Open Source**
  - Tigris is truly open source, adhering to an Apache 2 license.
  - We continuously build to improve performance, reliability and
    flexibility of the platform.
- 🔒 **Data Sovereignty**
  - Keep control of your data.
  - Deploy Tigris on your own infrastructure whether on-prem or in the cloud
    and keep your data safe and secure. Perfect for ensuring compliance with
    all regulatory requirements.
