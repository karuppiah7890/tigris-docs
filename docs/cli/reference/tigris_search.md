---
id: search
title: Search
slug: /cli/search
---

Tigris offers a realtime search for documents in a collection.

### Synopsis

Executes a search query against a collection and returns the search results.

```shell
tigris search --project={tigris_project} {collection} [flags]
```

### Examples

```shell
# Default search without any parameters will return all documents
tigris search --project=test_project users

# Search for a text "Alice" in collection
tigris search --project=test_project users -q "Alice"

# Search for a text "Alice" either in "firstName" or "lastName" fields
tigris search --project=test_project users -q "Alice" -f "firstName,lastName"

# Filter for users with age > 23
tigris search --project=test_project users -q "Alice" -f "firstName,lastName" --filter '{"age": {"$gt": 23}}'

# Aggregate results by current city and get top 10 cities
tigris search --project=test_project users -q "Alice" -f "firstName,lastName" --filter '{"age": {"$gt": 23}}' --facet '{"currentCity": {"size": 10}}'

# Sort the results by age in increasing order
tigris search --project=test_project users -q "Alice" -f "firstName,lastName" --filter '{"age": {"$gt": 23}}' --facet '{"currentCity": {"size": 10}}' --sort '[{"age": "$asc"}]'

# Exclude sensitive information from results
tigris search --project=test_project users -q "Alice" -f "firstName,lastName" --filter '{"age": {"$gt": 23}}' --facet '{"currentCity": {"size": 10}}' --sort '[{"age": "$asc"}]' -x "phoneNumber,address"

# Paginate the results, with 15 per page
tigris search --project=test_project users -q "Alice" -f "firstName,lastName" --filter '{"age": {"$gt": 23}}' --facet '{"currentCity": {"size": 10}}' --sort '[{"age": "$asc"}]' -x "phoneNumber,address" -p 1 -c 15

# Find users with last name exactly matching "Wong"
tigris search --project=test_project users --filter '{"lastName": "Wong"}'

```

### Options

```
  -q, --query string            query string for searching across text fields
  -f, --searchFields strings    comma separated value of fields to project search query against
      --filter string           further refine the search results using filters (default "{}")
      --facet string            retrieve aggregate  (default "{}")
      --sort string             order to sort the results (default "{}")
  -i, --includeFields strings   comma separated value of document fields to include in results
  -x, --excludeFields strings   comma separated value of document fields to exclude in results
  -p, --page int32              page of results to retrieve (default 1)
  -c, --pageSize int32          count of results to be returned per page (default 20)
  -h, --help                    help for search
```
