# Field Types

Tigris supports the majority of the primitive TypeScript types while also
providing support for custom types.

- primitive types: `string`, `boolean`, `number`, `bigint`, `object`.
- Custom types: user-defined class to define custom types.
- Array and object of all of above is supported.

```ts
import {
  TigrisDataTypes,
  TigrisSchema,
  TigrisTopicType,
} from "@tigrisdata/core/dist/types";

// data container
interface ProductEvents extends TigrisTopicType {
  orderId?: string;
  name: string;
  status: string;
  enabled: boolean;
  total: number;
  entryDate: string;
  uuid: string;
  labels: string[];
  raw: object;
}

// schema definition of the topic
const productEventsSchema: TigrisSchema<ProductEvents> = {
  orderId: {
    type: TigrisDataTypes.INT64,
  },
  name: {
    type: TigrisDataTypes.STRING,
  },
  status: {
    type: TigrisDataTypes.STRING,
  },
  enabled: {
    type: TigrisDataTypes.BOOLEAN,
  },
  total: {
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
  raw: {
    type: TigrisDataTypes.OBJECT,
  },
};
```

## Note:

if there is a field with int64 value. Due to Javascript's limitation
to handle `bigint` in `JSON.stringify()` and `JSON.parse()` user may either
run into error or rounding of value - to avoid this Tigris supports passing
`bigint` values in the form of `string`.

If the application uses custom JSON parser (e.g. [json-bigint](https://github.com/sidorares/json-bigint)) and wants to
continue using `bigint` within the Tigris SDK. User can set the flag in client
configuration `{supportBigInt: true}`
