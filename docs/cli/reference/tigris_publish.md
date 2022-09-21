---
id: publish
title: Publish messages
slug: /cli/publish
---

Publish message(s)

### Synopsis

Publishes one or more messages into a collection.

```shell
tigris publish {db} {collection} {message}...|- [flags]
```

### Examples

```shell

  # Publish a single message into the users collection
  tigris publish testdb users '{"id": 1, "name": "Alice Alan"}'

```

### Options

```
  -h, --help   help for publish
```
