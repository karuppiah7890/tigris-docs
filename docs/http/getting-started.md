# Getting Started

This section explains how to interact with Tigris using HTTP APIs.

## The Base URL

All HTTP API endpoints exists under the base URL `http://localhost:8081/api/v1/`.

## Databases

All the databases related operations exists under `databases` which means to perform any operation on the database
you need to use the following structure `http://localhost:8081/api/v1/databases/<database-name>`.

[Here](https://docs.tigrisdata.com/apidocs/#tag/Databases) is a detail on all the supported operations on the `databases`.

### Creating a database

Using the above structure, the first step is to create a database.

```shell
curl 'http://localhost:8081/api/v1/databases/catalogdb/create' \
  -X POST \
  -H 'Content-Type: application/json'
```

## Collections

Similar to databases, operations performed on a collection exists under `collections` in the URL. This means the URL for
operations on a collection looks like this `http://localhost:8081/api/v1/databases/<database-name>/collections/<collection-name`.

[Here](https://docs.tigrisdata.com/apidocs/#tag/Collections) is a detail on all the supported operations on the `collections`.

### Creating a collection

Taking the URL structure from above, let's create a `catalog` collection under `catalogdb` database.

```shell
curl 'http://localhost:8081/api/v1/databases/catalogdb/collections/catalog/createOrUpdate' \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
  "schema":{
    "title":"catalog",
    "description":"A collection of products",
    "properties":{
      "id":{
        "description":"A unique identifier for the product",
        "type":"integer",
        "autoGenerate":true
      },
      "name":{
        "description":"Name of the product",
        "type":"string",
        "maxLength":128
      },
      "price":{
        "description":"Price of the product",
        "type":"number"
      },
      "brand":{
        "description":"The brand of the product",
        "type":"string"
      },
      "labels":{
        "description":"Labeling of the product",
        "type":"string"
      },
      "popularity":{
        "description":"Popularity score of the product",
        "type":"integer"
      }
    },
    "primary_key":[
      "id"
    ]
  }
}'
```

This will create a collection named `catalog` under database `catalogdb`.

The schema is needed to create a collection. In the next section, on [data modeling](datamodel/overview.mdx) let's take a deeper look
on how to model the collection.
