# Search Operations

Tigris automatically indexes documents in collections and provides real-time
search capability out-of-the-box.

Search operations support the following features:

- **Full-text search**: Ability to perform full-text search queries on the
  collections
- **Faceted search**: Ability to perform facet query to aggregate search
  results by fields.
- **Searching on nested fields**: Ability to perform search on nested fields
- **Projection**: Ability to include or exclude fields that are not needed in
  the result

Tigris TypeScript SDK provides the following API to search documents
in a collection:

- [search()](../typescript/documents/search#searching-for-documents): search for one
  or more documents in a collection

See the [Filters](filters) section to learn more about the filters supported in
search operations.

See the language-specific sections for more examples of Search operations:

- [Search in TypeScript](../typescript/documents/search)
- [Search in Go](../golang/database/search)
- [Search in Java](../java/database/search)
