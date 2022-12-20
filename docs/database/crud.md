# CRUD Operations

CRUD operations create, read, update and delete [documents](documents). The
operations are all atomic and provide strong data consistency guarantees.

## Create operations

There are two flavors of create operations - insert, and replace.

### Insert

Insert operations add new documents to a collection. Insert operations honor
the primary key constraint and throw a duplicate key error if a document
with the same primary key already exists.

![Insert](/img/insert.jpg)

Tigris TypeScript SDK provides the following two APIs to insert documents
into a collection:

- [insertOne()](../typescript/database/insert#insert-a-single-document):
  insert single document
- [insertMany()](../typescript/database/insert#insert-multiple-documents):
  batch insert documents

See the language-specific sections for more examples of Insert operations:

- [Insert Document in TypeScript](../typescript/database/insert)
- [Insert Document in Go](../golang/database/insert)
- [Insert Document in Java](../java/insert)

### Replace

Replace operations provide the following behavior:

- replace a document with matching primary key value
- insert a new document if no document with matching primary key value found

![Replace](/img/replace.jpg)

Tigris TypeScript SDK provides the following two APIs to replace documents
in a collection:

- [insertOrReplaceOne()](../typescript/database/insert#upsert-a-single-document):
  replace single document
- [insertOrReplaceMany()](../typescript/database/insert#upsert-multiple-documents):
  batch replace documents

See the language-specific sections for more examples of Replace operations:

- [Replace Document in TypeScript](../typescript/database/insert)
- [Replace Document in Go](../golang/database/insert)
- [Replace Document in Java](../java/insert)

## Read Operations

Read operations retrieve documents from a collection. Tigris by default
indexes all the fields of the document allowing you to retrieve documents
matching zero or more conditions on any field.

![Read](/img/findmany.jpg)

Tigris TypeScript SDK provides the following two APIs to read documents
from a collection:

- [findOne()](../typescript/database/query#simple-read-query): read a single document
- [findMany()](../typescript/database/query#filtering-on-multiple-fields): read
  multiple documents

See the [Filters](filters) section to learn more about the filters supported in
read operations.

See the language-specific sections for more examples of Read operations:

- [Read Document in TypeScript](../typescript/database/query)
- [Read Document in Go](../golang/database/query)
- [Read Document in Java](../java/query)

## Update Operations

Update operations modify existing documents in a collection. These
operations give you the flexibility to update documents matching conditions on
any field.

![Update](/img/update.jpg)

Tigris TypeScript SDK provides the following API to update documents in a
collection:

- [update()](../typescript/database/update#simple-update): update one or more
  documents that match the filtering condition

See the [Filters](filters) section to learn more about the filters supported in
update operations.

See the language-specific sections for more examples of Update operations:

- [Update Document in TypeScript](../typescript/database/update)
- [Update Document in Go](../golang/database/update)
- [Update Document in Java](../java/update)

## Delete Operations

Delete operations remove documents from a collection. These operations give
you the flexibility to delete documents matching conditions on any field.

![Delete](/img/delete.jpg)

Tigris TypeScript SDK provides the following API to delete documents from a
collection:

- [delete()](../typescript/database/delete#simple-delete)

See the [Filters](filters) section to learn more about the filters supported in
delete operations.

See the language-specific sections for more examples of Delete operations:

- [Delete Document in TypeScript](../typescript/database/delete)
- [Delete Document in Go](../golang/database/delete)
- [Delete Document in Java](../java/database/delete)
