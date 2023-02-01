---
id: delete
title: Delete
slug: /sdkstools/cli/delete
---

Deletes document(s)

### Synopsis

Deletes documents according to the provided filter.

```shell
tigris delete --project={tigris_project} {collection} {filter} [flags]
```

### Examples

```shell

  # Delete a user where the value of the id field is 2
  tigris delete --project=test_project users '{"id": 2}'

  # Delete users where the value of id field is 1 or 3
  tigris delete --project=test_project users '{"$or": [{"id": 1}, {"id": 3}]}'

```

### Options

```
  -h, --help   help for delete
```
