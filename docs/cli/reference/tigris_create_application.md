---
id: create-application
title: Create Application
slug: /cli/create-application
---

Create application credentials

```shell
tigris create application {name} {description} [flags]
```

### Examples

```

./tigris create application new_name1 "new descr1"

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
