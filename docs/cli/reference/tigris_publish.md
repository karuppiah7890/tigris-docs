---
id: publish
title: Publish events
slug: /cli/publish
---

Publish event(s)

### Synopsis

Publishes one or more events into a collection.

```shell
tigris publish {db} {collection} {event}...|- [flags]
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
