# Supported Types

## Data types

The data types are derived from the types defined in the JSON schema
[specification](https://json-schema.org/specification.html).

The `type` and `format` properties in schemas are used to determine the
data type of the field. The `type` property indicates the type of the field.
The `format` property provides additional information about the underlying type.
Fields will always have a `type` property, but some may also have a `format`
property. The JSON schema
[specification](https://json-schema.org/specification.html) already defines
a set of common formats. We support these formats and define others as well.

For optimal performance and efficient data layout, we also impose some
restrictions on what data types can be used for primary key fields.

The full list of supported `type` and `format` are listed below.

| Type    | Format    | Description                                                                                                                      | Supported for Key Fields | Supported for autoGenerate |
| ------- | --------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------------------------- |
| integer |           | A 64-bit integral number. Optionally, format can be specified as `int64`.                                                        | Yes                      | Yes                        |
| integer | int32     | A 32-bit integral number.                                                                                                        | Yes                      | Yes                        |
| number  |           | A double-precision 64-bit IEEE 754 floating point. Optionally, format can be specified as `double`.                              | No                       | No                         |
| number  | float     | A single-precision 32-bit IEEE 754 floating point.                                                                               | No                       | No                         |
| string  |           | An arbitrary string. It may contain Unicode characters.                                                                          | Yes                      | Yes                        |
| string  | byte      | Binary data in an undifferentiated byte stream.                                                                                  | Yes                      | Yes                        |
| string  | uuid      | Universally unique identifiers (UUIDs). UUIDs are 16-byte numbers used to uniquely identify records.                             | Yes                      | Yes                        |
| string  | date-time | An RFC3339 timestamp in UTC time. This in the format of yyyy-MM-ddTHH:mm:ss.SSSZ. The milliseconds portion (".SSS") is optional. | Yes                      | Yes                        |
| boolean |           | A boolean value, either "true" or "false".                                                                                       | No                       | No                         |
| array   |           | An array of values. The items property indicates the schema for the array values.                                                | No                       | No                         |
| object  |           | A container type that stores other fields. The properties key defines the schema for the object.                                 | No                       | No                         |

### int64

Representing 64-bit integral numbers.

```json
{
  "age": {
    "type": "integer"
  }
}
```

### int32

Representing 32-bit integral numbers.

```json
{
  "age": {
    "type": "integer",
    "format": "int32"
  }
}
```

### double

Representing double-precision 64-bit IEEE 754 floating point values.

```json
{
  "balance": {
    "type": "number"
  }
}
```

### float

Representing single-precision 32-bit IEEE 754 floating point values.

```json
{
  "balance": {
    "type": "number",
    "format": "float"
  }
}
```

### byte

Representing binary data in an undifferentiated byte stream.

```json
{
  "data": {
    "type": "string",
    "format": "byte"
  }
}
```

### string

Representing strings of text that may contain Unicode characters.

```json
{
  "name": {
    "type": "string"
  }
}
```

### uuid

Representing universally unique identifiers (UUIDs). UUIDs are 16-byte
numbers used to uniquely identify records.

```json
{
  "cart_id": {
    "type": "string",
    "format": "uuid"
  }
}
```

### date-time

Representing an RFC3339 timestamp in UTC time.

```json
{
  "order_date": {
    "type": "string",
    "format": "date-time"
  }
}
```

### boolean

Representing a boolean value, either "true" or "false".

```json
{
  "is_active": {
    "type": "boolean"
  }
}
```

### array

Representing an array of values. The `items` property indicates the data type
for the array values.

```json
{
  "languages": {
    "type": "array",
    "items": {
      "type": "string"
    }
  }
}
```

### object

Representing a container type that stores other fields. The `properties` key
defines the schema for the object.

```json
{
  "address": {
    "type": "object",
    "properties": {
      "street": {
        "type": "string"
      },
      "city": {
        "type": "string"
      },
      "state": {
        "type": "string"
      },
      "zip": {
        "type": "integer"
      }
    }
  }
}
```

## Nested data

This section demonstrates schema with nested data.

### Array

Data of type array requires the **items** keyword to be expressed as JSON key.
This defines the type of items that will be in the array.

The example below extends the schema for the user collection by adding the
field `languages`

```json
{
  "languages": {
    "type": "array",
    "items": {
      "type": "string"
    }
  }
}
```

### Object

Data of type object requires the **properties** keyword to be expressed as JSON
key. This is similar to the top-level **properties** key and specifies the
fields that make up the object.

The example below extends the schema for the user collection by adding the field
`address`

```json
{
  "address": {
    "type": "object",
    "properties": {
      "street": {
        "type": "string"
      },
      "city": {
        "type": "string"
      },
      "state": {
        "type": "string"
      },
      "zip": {
        "type": "integer"
      }
    }
  }
}
```

Below is what the complete schema looks like with the addition of the two new
fields _languages_ and _address_

```json
{
  "title": "users",
  "properties": {
    "id": {
      "type": "integer"
    },
    "name": {
      "type": "string",
      "maxLength": 100
    },
    "balance": {
      "type": "number"
    },
    "languages": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "address": {
      "type": "object",
      "properties": {
        "street": {
          "type": "string"
        },
        "city": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "zip": {
          "type": "integer"
        }
      }
    }
  },
  "primary_key": ["id"]
}
```

## Null Values

`null` is an allowed value that can be used with any of the fields in the
schema except for the ones that are part of the primary key definition. If a
field is set to the `null` value, then the document stored in the database
will have that field set to the `null` value. If you are looking for the
behavior where you would like fields without any values to not be stored as
part of the document, then simply skip setting them to any value.
