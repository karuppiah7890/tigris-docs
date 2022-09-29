# Declaring Models

There are two basic constructs for TypeScript Tigris modeling.

1. Data containers - interface that holds the data model
2. Schema of Data containers - TigrisSchema definition of these data containers.

```typescript
// data container
interface Catalog extends TigrisCollectionType {
  id?: string;
  name: string;
  price: number;
  brand: string;
  labels: string;
  popularity: number;
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
  brand: {
    type: TigrisDataTypes.STRING,
  },
  labels: {
    type: TigrisDataTypes.STRING,
  },
  popularity: {
    type: TigrisDataTypes.INT32,
  },
  attribute: {
    type: TigrisDataTypes.OBJECT,
  },
};
```

:::info

- You must keep the data container and schema definition in sync.
- The primary key field is marked as autoGenerate=true which is why it
  is defined as an optional field.
- Due to Javascript's limitation if you want to use `int64` with values
  greater than 53 bits then use `bigint` or `string` in your model (data
  container interface) schema will still say `INT64`. If you are using
  default serializer/deserializer in your application use it as `string`.
  server will still keep it as `int64`. If you have no serde else where in
  the app or all the serde are handling `bigint` properly then use `bigint`.
  :::
