---
id: subscribe
title: Subscribe for messages
slug: /cli/subscribe
---

Subscribes to published messages

### Synopsis

Streams messages in real-time until cancelled.

```shell
tigris subscribe {db} {collection} {filter} [flags]
```

### Examples

```shell
tigris subscribe testdb
```

### Options

```
  -h, --help          help for subscribe
  -l, --limit int32   limit number of results returned
```
