---
id: alter-application
title: Alter Application
slug: /cli/alter-application
---

Alter application credentials

```shell
tigris alter application {id} {name} {description} [flags]
```

### Examples

```

./tigris alter application <client id> new_name1 "new descr1"

Output:
{
  "id": "<client id>",
  "name": "new_name1",
  "description": "new descr1",
  "secret": "<client secrete here",
  "created_at": 1663802082000,
  "created_by": "github|3436058"
}

```

### Options

```
  -h, --help   help for application
```
