# Databases and Collections

Tigris stores data records as documents. Documents are analogous to JSON
objects but Tigris stores them in an optimized binary format. Documents are
grouped together in collections. Collections are grouped together in databases.

## Databases

A database is a group of one or more collections. Tigris supports two
types of collections (you will read about this below), and a database can
store any number of collections regardless of the type.

![Databases](/img/databases.jpg)

### Creating a database

A database can be created in an idempotent way as follows:

```ts
const db: DB = await tigris.createDatabaseIfNotExists("catalogdb");
```

## Collections

Tigris stores data records in collections. A collection always has a
pre-defined schema that enables you to structure the data. The schema can be
easily evolved in a lightweight way without costly rebuild operations.

![Collections](/img/collections.jpg)

### Collection types

Tigris offers two types of collections.

#### Documents Collection

A `documents` collection is analogous to tables in a relational database.
You interact with it using CRUD APIs. Tigris provides strictly serializable
transactions, enabling you to perform consistent operations on your data
records. See the [Documents](../documents) section to learn more about this
collection type.

#### Messages Collection

A `messages` collection is analogous to a topic in Kafka. You interact with
collections of this type using Publish/Subscribe APIs that enable you to
build event streaming applications. See the [Event Streaming](docs/events)
section to learn more about this collection type.

### Creating a collection

A collection is created as follows. This will create the collection if it
does not exist. If the collection exists, it updates its schema.

```ts
interface Review extends TigrisCollectionType {
  author: string;
  rating: number;
}

const reviewSchema: TigrisSchema<Review> = {
  author: {
    type: TigrisDataTypes.STRING,
  },
  rating: {
    type: TigrisDataTypes.NUMBER,
  },
};

const reviews: Collection<Review> = await db.createOrUpdateCollection(
  "reviews",
  reviewSchema
);
```

:::tip When would I need both?

Suppose you are building an order management platform. You will need a
collection of type **documents** to store products, orders, and users. But
some of the ordering functionality requires async processing - such as
sending an email when the order has been completed. You can accomplish this
by utilizing a collection type of **messages**. Publishing an event to it once
the order flow completes. Then in your email service you can subscribe to
the events in the collection and take the necessary action.

:::
