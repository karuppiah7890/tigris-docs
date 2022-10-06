# Modifying Schema

Tigris provides a lightweight way to modify the schema. Within Tigris, the
schema change is a metadata operation and hence doesn't require rebuilding
the entire collection. The updated schema is made available immediately to
new write operations.

However, there are certain restrictions on the type of modifications allowed.
These restrictions are in place to ensure that we don't need to rebuild
collections on schema changes.

## Allowed modifications

The following schema changes are currently supported:

- Adding a new field to an existing collection
- Defining a maximum length constraint on existing string or byte type
  fields. The constraint will only apply to documents added after the
  constraint is defined
- Increasing the maximum length constraint on existing string or byte type
  fields.

## Unsupported modifications

The following schema changes are currently not supported:

- Changing the data type of a field
- Removing a field from the schema
- Adding or removing a field from the primary key definition

## How to modify the schema

Suppose you have the following collection schema defined:

```ts title="Existing Schema Definition"
interface Catalog extends TigrisCollectionType {
  id?: string;
  name: string;
  price: number;
  attributes: object;
}

// schema definition
const catalogSchema: TigrisSchema<Catalog> = {
  id: {
    type: TigrisDataTypes.INT64,
    primary_key: {
      order: 1,
      autoGenerate: true,
    },
  },
  name: {
    type: TigrisDataTypes.STRING,
  },
  price: {
    type: TigrisDataTypes.NUMBER,
  },
  attributes: {
    type: TigrisDataTypes.OBJECT,
  },
};
```

And you would like to modify the schema and add a new field `brand` of type
`string`. The steps to make this change are as follows:

### 1. Update the schema definition in your application code

```ts title="New Schema Definition"
interface Catalog extends TigrisCollectionType {
  id?: string;
  name: string;
  price: number;
  attributes: object;
  brand: string;
}

// schema definition
const catalogSchema: TigrisSchema<Catalog> = {
  id: {
    type: TigrisDataTypes.INT64,
    primary_key: {
      order: 1,
      autoGenerate: true,
    },
  },
  name: {
    type: TigrisDataTypes.STRING,
  },
  price: {
    type: TigrisDataTypes.NUMBER,
  },
  attributes: {
    type: TigrisDataTypes.OBJECT,
  },
  brand: {
    type: TigrisDataTypes.STRING,
  },
};
```

### 2. Use the createOrUpdateCollection API in your application code

Just as you use the `createOrUpdateCollection` API in your application code
to create the collection. The same API will update the schema of the
collection to reflect the new schema.

```ts
const catalog: Collection<Catalog> = await db.createOrUpdateCollection(
  "catalog",
  catalogSchema
);
```

At this point, the collection's schema is modified. The collection is
instantaneously available with the new schema and any write requests after
this point will be validated with the new schema.
