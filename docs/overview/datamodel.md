# Data Modeling

Most applications expect the data they store to conform to some kind of
schema. A schema is a blueprint for the application that outlines how data
should be structured. More importantly, schemas make data more accessible and
less prone to errors, making them an essential part of application architecture.

For Tigris, schemas are an integral part and form the basis for our declarative
approach to database infrastructure.

## Flexible Document Model

Tigris enforces that all documents stored in a collection conform to the
collection's schema. But you have the flexibility to evolve your data model as
the application evolves.

Tigris offers this flexibility by allowing the schema to be evolved
in a lightweight manner without any downtime. The schema changes are
performed in a transactional manner, take only a few milliseconds to
complete and do not require a collection rebuild. The updated schema is
immediately made available to any new transactions. The schema of old records
will be updated automatically when the record is updated.

## Data Types

There are three categories of data types supported:

- **Primitive**: Strings, Numbers, Binary Data, Booleans, UUIDs, DateTime
- **Complex:** Arrays
- **Objects**: A container data type defined by the user that stores fields
  of primitive types, complex types as well as other Objects

## Defining the Data Models

The data models encompassing collections and their schema are declared
as part of the application code using the same programming language. By
incorporating this data model into your application code, you can ensure
that it remains consistent and up-to-date with the application's business logic.

The language specific reference sections cover defining the data models and
schemas in the supported programming languages:

- **[Data modeling in HTTP](../http/datamodel/declare)**
- **[Data modeling in Go](../golang/datamodel/declare)**
- **[Data modeling in Java](../java/datamodel/declare)**
- **[Data modeling in TypeScript](../typescript/datamodel/declare)**

## Evolving the Data Models

The following schema changes are currently supported:

- Add a new field to an existing collection without any restrictions.
- Define a maximum length constraint for string or byte field types. This
  constraint will only be applicable for documents added after the
  constraint is defined.
- Increase the maximum length constraint for string or byte field types.

The following schema changes are currently not supported:

- Change the data type of the field.
- Remove a field from the schema.
- Add or remove a field from the primary key definition.

## Embedded Data Model

Tigris offers rich documents that enable embedding related data in a single
document. Embedded models allow applications to complete database operations
with fewer queries or updates, thus reducing query activity and increasing
efficiency. Following examples demonstrate a collection that leverages this pattern by
storing related data in a single data model.

```json
{
  "id": 1,
  "name": "janice",
  "balance": 99,
  "product_items": [{ "name": "shoes", "quantity": 1, "price": 201 }]
}
```

## Relational Data Model

Tigris allows you to design your schema in multiple ways. Sometimes there is a
need to normalize your data model and split related data across multiple
collections. This can be easily accomplished as follows:

```shell
# users collection
{
  "user_id": 1,
  "name": "Janice James",
  "nick_name": "janice",
  "email": "janice@somedomain.com"
}

# memberships collection which stores a reference to the document in the
# users collection
{
  "membership_id": 123,
  "user_id": 1,
  "plan": "preview",
  "balance": 99
}
```

## Null Values

`null` is an allowed value that can be used with any of the fields in the
schema except for the ones that are part of the primary key definition. If a
field is set to the null value, then the document stored in the database
will have that field set to the null value. If you are looking for the
behavior where you would like fields without any values to not be stored as
part of the document, then simply skip setting them to any value.
