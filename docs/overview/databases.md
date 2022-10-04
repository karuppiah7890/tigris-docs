# Databases

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

Tigris has two offerings collections and topics.

## Collections

Tigris stores data records in collections. A collection is analogous
to tables in a relational database. A collection always has a
pre-defined schema that enables you to structure the data. The schema can be
easily evolved in a lightweight way without costly rebuild operations. You interact with it using CRUD APIs.
Tigris provides strictly serializable transactions, enabling you to perform consistent
operations on your data records. See the [Documents](../documents) section to learn more about collections.

![Collections](/img/collections.jpg)

See the [Documents](../documents) section to learn more about collections.

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

## Topics

A topic is analogous to a topic in Kafka. You interact with
topic using Publish/Subscribe APIs that enable you to
build event streaming applications. See the [Event Streaming](../events)
section to learn more about this collection type.

:::tip When would I need both?

Suppose you are building an order management platform. You will need a
collection to store products, orders, and users. But some of the ordering
functionality requires async processing - such as sending an email when the
order has been completed. You can accomplish this by utilizing a topic.
Publishing an event to it once the order flow ends. Then in your email service,
you can subscribe to the events in the topic and take the necessary action.

:::
