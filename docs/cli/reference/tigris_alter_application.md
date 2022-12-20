---
id: alter-application
title: Alter Application
slug: /cli/alter-application
---

Alter app key credentials

```shell
tigris alter app_key {id} {name} {description} [flags]
```

### Examples

```

./tigris alter app_key <client id> new_name1 "new descr1"

Output:
{
  "id": "<client id>",
  "name": "new_name1",
  "description": "new descr1",
  "secret": "<client secret here>",
  "created_at": 1663802082000,
  "created_by": "github|3436058"
}

```

### Options

```
  -h, --help   help for application
```
