# Database

Every Tigris projects comes with a transactional document database built on
[FoundationDB](https://blog.tigrisdata.com/building-a-database-using-foundationdb),
one of the most resilient and battle-tested open source distributed
key-value store.

Tigris stores data records as documents. Documents are analogous to JSON
objects but Tigris stores them in an optimized binary format. Documents are
grouped together in collections. Collections are grouped together in database.

A database is created automatically for you when you create a project.

## Collections

Tigris stores data records in collections. A collection is analogous
to tables in a relational database. A collection always has a
pre-defined schema that enables you to structure the data. The schema can be
easily evolved in a lightweight way without costly rebuild operations. You interact with it using CRUD APIs.
Tigris provides strictly serializable transactions, enabling you to perform consistent
operations on your data records.

![Collections](/img/collections.jpg)

### Creating a collection

A collection is created as follows. This will create the collection if it
does not exist. If the collection exists, it updates its schema.

```ts
import {
  Field,
  PrimaryKey,
  Tigris,
  TigrisCollection,
  TigrisDataTypes,
} from "@tigrisdata/core";

@TigrisCollection("reviews")
export class Review {
  @PrimaryKey(TigrisDataTypes.INT64, { order: 1, autoGenerate: true })
  id!: bigint;

  @Field()
  author!: string;

  @Field()
  rating!: number;
}

(async () => {
  const client = new Tigris();
  const db = client.getDatabase();

  await db.createOrUpdateCollection<Review>(Review);
})();
```
