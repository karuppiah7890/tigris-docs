# Event Streaming

Tigris has built-in support for event streaming that allows you to build
event-driven applications very quickly. Tigris automatically indexes the
event data for you. This differentiates Tigris from other event streaming
systems such as Kafka. As with Tigris, you can query and search events the
same way you query and search data in a regular database. All events are
transactionally stored within FoundationDB, ensuring data consistency and
availability.

Tigris refers to an event stream as a **topic**.

![Tigris Event Streaming](/img/event-streaming.png)

## Topic

A topic is analogous to a topic in Kafka. Events are stored as documents which are
analogous to JSON documents. Documents are composed of field-value pairs.

![Event](/img/message.jpg)

### Schema

A topic must have a pre-defined schema. Tigris enforces that all events in
the topic conform to a schema. The schema is defined as part of creating the
topic.

Since schemas are a way to structure your data according to the application
logic, they are described as part of your application code using the
programming language constructs.

Below is an example of defining a schema for a topic named `product_events`.
All the events in this topic will follow the defined schema.

```ts
interface ProductEvents extends TigrisTopicType {
  orderId: string;
  name: string;
  metadata: object;
}

// schema definition of the topic
const productEventsSchema: TigrisSchema<ProductEvents> = {
  orderId: {
    type: TigrisDataTypes.INT64,
  },
  name: {
    type: TigrisDataTypes.STRING,
  },
  metadata: {
    type: TigrisDataTypes.OBJECT,
  },
};

const topic: Topic<ProductEvents> = await db.createOrUpdateTopic(
  "product_events",
  productEventsSchema
);
```

### Supported field types

There are three categories of field types supported:

- **Primitive**: Strings, Numbers, Binary Data, Booleans, UUIDs, DateTime
- **Complex:** Arrays
- **Objects**: A container data type defined by the user that stores fields
  of primitive types, complex types as well as other Objects

### Partitions

A topic has, by default, 64 partitions. Ordering is guaranteed in a single
partition. You can control the number of partitions during topic creation.
There may be cases where you need to have global order of all the events
published to a topic. For these cases, you can set the number of partitions
to 1.

:::note

Reducing the number of partitions may impact write throughput to the topic.

:::

### Key

A key can be explicitly set to control the partitioning of events. When a
key is present in the topic schema, then Tigris uses this key for
partitioning. Otherwise, the default behavior is partitioning the events by
writing to partitions in a round-robin fashion.

## Supported operations

Tigris enables you to perform rich set of operations on documents. The
supported operations are covered below:

| Operations    | Description                                                                                                                                                                                                                            |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Publish**   | Publish one or more events to the topic.                                                                                                                                                                                               |
| **Subscribe** | Subscribe to a topic to either receive all the events or a subset of events based on a filtering condition.                                                                                                                            |
| **Query**     | Query events by filtering on any field of the event.                                                                                                                                                                                   |
| **Search**    | Events in topics are searchable in real-time. Search operations, similar to what are provided by standalone search platforms such as Elasticsearch, are supported out of the box. See the [Search](/searching/) section to learn more. |

## Common use cases

- Real-time event distribution
- Events streaming from applications, services, or devices
- Analytics on user interactions
- Cache invalidation
