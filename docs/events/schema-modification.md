# Modifying Schema

Tigris provides a lightweight way to modify the schema of a topic. Within
Tigris, the schema change is a metadata operation. The updated schema is
made available immediately to new publish operations.

However, there are certain restrictions on the type of modifications allowed.
These restrictions are in place to provide backward compatibility to
subscribers.

## Allowed modifications

The following schema changes are currently supported:

- Adding a new field to the schema of an existing topic
- Defining a maximum length constraint on existing string or byte type
  fields. The constraint will only apply to events added after the
  constraint is defined
- Increasing the maximum length constraint on existing string or byte type
  fields.

## Unsupported modifications

The following schema changes are currently not supported:

- Changing the data type of a field
- Removing a field from the schema

## How to modify the schema

Suppose you have the following schema defined:

```ts title="Existing Schema Definition"
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
```

And you would like to modify the schema and add a new field `status` of type
`string`. The steps to make this change are as follows:

### 1. Update the schema definition in your application code

```ts title="New Schema Definition"
interface ProductEvents extends TigrisTopicType {
  orderId: string;
  name: string;
  metadata: object;
  status: string;
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
  status: {
    type: TigrisDataTypes.STRING,
  },
};
```

### 2. Use the createOrUpdateTopic API in your application code

Just as you use the `createOrUpdateTopic` API in your application code
to create the topic. The same API will update the schema of the topic to
reflect the new schema.

```ts
const topic: Topic<ProductEvents> = await db.createOrUpdateTopic(
  "product_events",
  productEventsSchema
);
```

At this point, the topic's schema is modified. The topic is instantaneously
available with the new schema and any new events after this point will be
validated with the new schema.
