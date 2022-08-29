# Declaring Models

There are two basic constructs for TypeScript Tigris modeling.

1. Data containers - interface that holds the data model
2. Schema of Data containers - TigrisSchema definition of these data containers.

```typescript
// data container
interface Catalog extends TigrisCollectionType {
  id?: number;
  name: string;
  price: number;
  brand: string;
  labels: string;
  popularity: number;
}

// schema definition
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

:::info

- You must keep the data container and schema definition in sync.
- The primary key field is marked as autoGenerate=true which is why it
  is defined as an optional field.

:::
