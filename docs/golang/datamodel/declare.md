# Declaring Models

Models are regular Go structs composed of basic Go types or custom types.
Field properties can be modified using optional "tigris" tag.

```go
type Catalog struct {
	Id         int `tigris:"primary_key,autoGenerate"`
	Name       string
	Price      float64
	Brand      string
	Labels     string
	Popularity int
}
```

This declaration will create a collection named `catalogs`.

### Collection Names

The name of the collection is derived from the struct name. The struct
name is pluralized to snake_cases as collection name. For example, the
struct name `Catalog` is converted to `catalogs` as the collection name. While
the struct name `CatalogDetail` is converted to `catalog_details` as the
collection name.

### Field Names

The name of the fields in the struct are used as the field names in the
collection's schema. There is no conversion performed by default. To have
fields in the collection schema with a different name, you can configure
**json** field tags as can be seen below

```go
type Catalog struct {
	Id         int `json:"id" tigris:"primaryKey,autoGenerate"`
	Name       string
	Price      float64
	Brand      string
	Labels     string
	Popularity int
}
```
