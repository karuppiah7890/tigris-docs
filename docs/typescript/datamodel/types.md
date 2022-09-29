# Supported TypeScript Types

Tigris supports the majority of the primitive TypeScript types while also
providing support for custom types.

- primitive types: `string`, `boolean`, `number`, `bigint`, `object`.
- Custom types: user-defined class to define custom types.
- Array and object of all of above is supported.

## Note:

if there is a field with int64 value. Due to Javascript's limitation
to handle `bigint` in `JSON.stringify()` and `JSON.parse()` user may either
run into error or rounding of value - to avoid this Tigris supports passing
`bigint` values in the form of `string`.

If the application uses custom JSON parser (e.g. [json-bigint](https://github.com/sidorares/json-bigint)) and wants to
continue using `bigint` within the Tigris SDK. User can set the flag in client
configuration `{supportBigInt: true}`
