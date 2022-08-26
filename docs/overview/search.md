# Searching

Tigris offers a realtime search for documents in a collection. Search is built in, you don’t need to separate services
to access robust search capabilities, it works out of the box. As Tigris indexes all your data automatically both search
and query functionality share the same indexes, eliminating the need for complex query tuning and optimization
exercises normally required in other databases.

This guide section will walk through how to use Tigris search in different scenarios.

## Features

- <b>Full Text Search</b>: Full text search is automatically enabled for your collection.
- <b>Facet Search</b>: You can do facet query to aggregate results on any field.
- <b>Nested fields</b>: Similar to query, you can search on nested fields.
- <b>Projection</b>: You can also include/exclude the fields that are not needed in the result.
- <b>Pagination</b>: You can explicitly control the page you need or by default can stream all the pages with search results.
  The pagination can be controlled using <i>page number</i> and <i>page size</i> which is explained in the language specific sections .

The language specific reference sections cover the details on the usage of search.

- **[Search in HTTP](../http/search.mdx)**
- **[Search in Go](../golang/search.mdx)**
- **[Search in Java](../java/search.mdx)**
- **[Search in TypeScript](../typescript/search.mdx)**

## Filter

Similar to querying, [filtering](query#filter) can be applied on the search results using the same syntax.
