# Primary Key

A primary key uniquely identifies a document in the collection and enforces
the unique constraint. In the absence of a user-defined primary key, it is
auto-generated.

## Defining a Primary Key

The example below demonstrates how the primary key is defined. The `primary_key` in the schema is used to explicitly
define the fields that you need to be part of the primary key. A primary key field can also be marked as auto-generated
by setting the `autoGenerate` key as true. The following example is setting the `id` field as the primary key and also
marking it as auto generated.

```json
{
  "title": "users",
  "properties": {
    "id": {
      "type": "string",
      "autoGenerate": true
    },
    "name": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    }
  },
  "primary_key": ["id"]
}
```

## Composite Primary Key

Composite primary keys are also supported but in the case of composite keys
order of the fields is important. The example below demonstrates how the order of the
fields is defined in the case of a composite primary key

```json
{
  "title": "users",
  "properties": {
    "id": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    }
  },
  "primary_key": ["id", "email"]
}
```

## Auto Generated Primary Key

The `id` is the default primary key of a collection. If the `id`
field is present in the schema then Tigris will automatically use it otherwise it will be of type `UUID`.

```json
{
  "title": "users",
  "properties": {
    "email": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    }
  }
}
```
