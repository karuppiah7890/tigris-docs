---
id: login
title: Login
slug: /sdkstools/cli/login
---

Authenticate to the Tigris instance

### Synopsis

Performs authentication to the Tigris instance

- Run "tigris login [url]",
- It opens a login page in the browser
- Click "Continue with Google" or "Continue with Github",
  depending on which OIDC provider you prefer.
- You will be asked for you Google or Github password,
  if are not already signed in to the account
- You'll see "Successfully authenticated" on success
- You can now return to the terminal and start using the CLI

```shell
tigris login {url} [flags]
```

### Examples

#### Login to Tigris Cloud

```shell
tigris login api.preview.tigrisdata.cloud
```

#### Login to locally running Tigris container

```shell
tigris login dev
```

### Options

```
  -h, --help   help for login
```
