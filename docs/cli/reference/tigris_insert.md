---
id: insert
title: Insert
slug: /cli/insert
---

Inserts document(s)

### Synopsis

Inserts one or more documents into a collection.

```shell
tigris insert --project={tigris_project} {collection} {document}...|- [flags]
```

### Examples

```shell

  # Insert a single document into the users collection
  tigris insert --project=test_project users '{"id": 1, "name": "Alice Alan"}'

  # Insert multiple documents into the users collection
  tigris insert --project=test_project users \
  '[
    {"id": 20, "name": "Jania McGrory"},
    {"id": 21, "name": "Bunny Instone"}
  ]'

  # Pass documents to insert via stdin
  # $ cat /home/alice/user_records.json
  # [
  #  {"id": 20, "name": "Jania McGrory"},
  #  {"id": 21, "name": "Bunny Instone"}
  # ]
  cat /home/alice/user_records.json | tigris insert testdb users -

```

### Options

```
  -b, --batch_size int32   set batch size (default 100)
  -h, --help               help for insert
```
