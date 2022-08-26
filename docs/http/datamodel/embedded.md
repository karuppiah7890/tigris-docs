# Embedded Data Model

Tigris offers rich documents that enable embedding related data in a single
document. Embedded models allow applications to complete database operations
with fewer queries or updates, thus reducing query activity and increasing
efficiency.

Below is an example of an embedded data model. We have `product_items` where each item has
`id`, `name`, `quantity`, and `price`. This array is embedded inside the `users` collection.

```json
{
  "title": "users",
  "properties": {
    "id": {
      "type": "integer"
    },
    "name": {
      "type": "string"
    },
    "product_items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "quantity": {
            "type": "integer"
          },
          "price": {
            "type": "number"
          }
        }
      }
    }
  },
  "primary_key": ["id"]
}
```
