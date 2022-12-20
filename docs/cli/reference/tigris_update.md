---
id: update
title: Update
slug: /cli/update
---

Updates document(s)

### Synopsis

Updates the field values in documents according to provided filter.

```shell
tigris update --project={tigris_project} {collection} {filter} {fields} [flags]
```

### Examples

```shell

  # Update the field "name" of user where the value of the id field is 2
  tigris update --project=test_project users '{"id": 19}' '{"$set": {"name": "Updated New User"}}'

```

### Options

```
  -h, --help   help for update
```
