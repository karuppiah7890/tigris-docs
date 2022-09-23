# Getting Started

## Prerequisites

The Tigris client depends on
[Golang generics](https://go.dev/doc/tutorial/generics) which requires Go 1.18
or newer.

## Installation

```shell
go get -u github.com/tigrisdata/tigris-client-go@latest
```

## Connecting to the database

### Set up the data model

Models are regular Go structs composed of basic Go types or custom types.

```go
type Reviews struct {
    Author  string
    Ratings float64
}

type Catalog struct {
	Id         int `tigris:"primary_key,autoGenerate"`
	Name       string
	Price      float64
	Brand      string
	Labels     string
	Popularity int
	Reviews    *Reviews
}
```

This declaration will create a collection named `catalogs`.

For detailed documentation on data modeling refer to the
[data modeling](datamodel/overview.mdx) section.

### Connect and initialize the database

The `OpenDatabase` function connects to the Tigris backend, creates the
database and collections if they don't exist, otherwise updates the schema of
the collections if they already exist.

#### Local development configuration

```go
db, err := tigris.OpenDatabase(ctx,
	&config.Database{Driver: config.Driver{URL: "localhost:8081"}},
    "catalogdb", &Catalog{})
```

#### Cloud platform configuration

Tigris URL, ClientID and ClientSecret need to be set as follows,
in order to connect to the hosted platform:

```go
cfg := &config.Database{
	Driver: config.Driver{
		URL: "api.preview.tigrisdata.cloud"
		ClientID: "paste client_id here"
		ClientSecret: "paste client_secret here"
	}
}

db, err := tigris.OpenDatabase(ctx, cfg, "catalogdb", &Catalog{})
```

The ClientID and ClientSecret can be retrieved by creating an application
in the [CLI](../cli/authentication.md#application-credentials) or UI.
