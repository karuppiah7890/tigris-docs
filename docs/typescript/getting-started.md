# Getting Started

## Prerequisites

The Tigris client is compatible with Node version 12 onwards.

## Installation

```shell
npm install @tigrisdata/core
```

## Set up the data model

Tigris client uses interface for data container and developers define the schema
of their data container using TigrisSchema

```typescript title=DataContainer
interface Catalog extends TigrisCollectionType {
  id?: number;
  name: string;
  price: number;
  brand: string;
  labels: string;
  popularity: number;
}
```

```typescript title=SchemaDefinition
const catalogSchema: TigrisSchema<Catalog> = {
  id: {
    type: TigrisDataTypes.INT32,
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
  brand: {
    type: TigrisDataTypes.STRING,
  },
  labels: {
    type: TigrisDataTypes.STRING,
  },
  popularity: {
    type: TigrisDataTypes.INT32,
  },
};
```

For detailed documentation on schema representation refer to the
[data modeling](datamodel/overview.mdx) section.

## Connect and initialize the database

Configure Tigris client using configuration.

```typescript
const tigris: Tigris = new Tigris({
  serverUrl: "localhost:8081",
});
```

Create database (if not exists)

```typescript
const db: Database = await tigris.createDatabaseIfNotExists("catalogdb");
```

Create collection

```typescript
const catalog: Collection<Catalog> = await db.createOrUpdateCollection(
  "catalog",
  catalogSchema
);
```
