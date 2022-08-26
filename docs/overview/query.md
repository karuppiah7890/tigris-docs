# Querying

Tigris provides powerful query functionality for specifying which documents you want to retrieve.
There is no need to index any field as Tigris allows querying on any field of a document, eliminating the need
for complex query tuning and optimization exercises normally required in other databases.

## Features

- <b>Exact Matches</b>: You can perform equality match on any field.
- <b>Range Queries</b>: You can do range queries on any numeric field. Tigris also enables by default range queries on
  created or updated at timestamp of the document.
- <b>Nested fields</b>: You can also query on nested fields.
- <b>Projection</b>: You can also include/exclude the fields that are not needed in the result.
- <b>Pagination</b>: Without having to manually paginate result Tigris offers streaming out of the box but if there
  is a need to control the pagination the language specific reference section explains the usage of <i>limit</i> and <i>offset</i>.

## Filter

Filter provides the following comparison operators with the same semantics as in virtually all programming languages.

- <b>EQ</b>: equal to is used for exact matching.
- <b>LT</b>: less than is used for matching documents using less than criteria.
- <b>LTE</b>: less than or equal to is similar to <b>LT</b> but also matches for equality.
- <b>GT</b>: greater than is used for matching documents using greater than criteria.
- <b>GTE</b>: greater than or equal to is similar to <b>GT</b> but also matches for equality.

For multiple conditions, there are two logical operators supported.

- <b>OR</b>: Combines multiple filter operators and returns documents when either condition is met.
- <b>AND</b>: Combines multiple filter operators and returns documents when all the conditions are met.

The language specific reference sections cover the details on the usage of the filters:

- **[Using filter in HTTP](../http/query#filter)**
- **[Using filter in Go](../golang/query#filter)**
- **[Using filter in Java](../java/query#filter)**
- **[Using filter in TypeScript](../typescript/query#filter)**
