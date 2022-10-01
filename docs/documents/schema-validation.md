# Schema Validation

Tigris requires that all documents in a collection conform to a schema. A
schema defines all the fields that make up the document in a collection.

A schema is a blueprint for the application that outlines how data should be
structured. More importantly, schemas make data more accessible and less
prone to errors, making them an essential part of application architecture.

## Validation

Tigris performs schema validations during inserts and updates to the collection.
Schema validation is performed in the following ways:

- Newly inserted documents are checked for validation
- During an update, only the new field values specified in the update operation
  are checked for validation

## What happens when a document fails validation

When an insert or update operation fails schema validation, Tigris rejects
the operation and does not write the document to the collection.
