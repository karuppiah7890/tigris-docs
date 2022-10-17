# Field Types

Tigris supports the majority of the primitive TypeScript types while also
providing support for custom types.

- primitive types: `string`, `boolean`, `number`, `bigint`, `object`.
- Custom types: user-defined class to define custom types.
- Array and object of all of above is supported.

```ts
import {
  TigrisCollectionType,
  TigrisDataTypes,
  TigrisSchema,
} from "@tigrisdata/core/dist/types";

// data container
export interface CatalogCategory {
  name: string;
  code: string;
}

export const categorySchema: TigrisSchema<CatalogCategory> = {
  name: {
    type: TigrisDataTypes.STRING,
  },
  code: {
    type: TigrisDataTypes.STRING,
  },
};

export interface Catalog extends TigrisCollectionType {
  id?: string;
  name: string;
  enabled: boolean;
  popularity: number;
  price: number;
  entryDate: string;
  uuid: string;
  labels: string[];
  category: CatalogCategory;
}

// schema definition
export const catalogSchema: TigrisSchema<Catalog> = {
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
  enabled: {
    type: TigrisDataTypes.BOOLEAN,
  },
  popularity: {
    type: TigrisDataTypes.INT32,
  },
  price: {
    type: TigrisDataTypes.NUMBER,
  },
  entryDate: {
    type: TigrisDataTypes.DATE_TIME,
  },
  uuid: {
    type: TigrisDataTypes.UUID,
  },
  labels: {
    type: TigrisDataTypes.ARRAY,
    items: {
      type: TigrisDataTypes.STRING,
    },
  },
  category: {
    type: categorySchema,
  },
};
```

## A note about bigint

if there is a field with int64 value. Due to Javascript's limitation
to handle `bigint` in `JSON.stringify()` and `JSON.parse()` user may either
run into error or rounding of value - to avoid this Tigris supports passing
`bigint` values in the form of `string`.

If the application uses custom JSON parser (e.g. [json-bigint](https://github.com/sidorares/json-bigint)) and wants to
continue using `bigint` within the Tigris SDK. User can set the flag in client
configuration `{supportBigInt: true}`
