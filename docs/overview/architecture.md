# Architecture

Tigris is built using cloud-native principles and provides a serverless
experience where it is able to seamlessly scale with your applications.

It separates Query, Index and the Storage layers and allows these layers
to be scaled independently based on the workload needs. By designing Tigris
using a cloud native architecture, it provides users with incredible
flexibility to run various types of workloads as well as the ability to
achieve massive scale.

![Cloud Native Architecture](/img/cloud-native-arch.png)

At the heart of the document store is FoundationDB. FoundationDB is a
distributed key-value store that enables nearly limitless scalability.

## FoundationDB as the data persistence layer

FoundationDB is used by Apple, Snowflake, and countless others as a
stand-alone, production-ready distributed key-value store with interactive
transactions. It provides the same consistency guarantees as Spanner (strict
serializability), and has an amazing correctness story through
[simulation testing](https://apple.github.io/foundationdb/testing.html).
FoundationDB exposes a key-value API, similar to RocksDB, but it scales to
support petabytes of data and millions of operations per second in a single
deployment on a modest amount of commodity hardware.

![FoundationDB Architecture](https://apple.github.io/foundationdb/_images/architecture-1.jpeg)

(reference: [https://apple.github.io/foundationdb/architecture.html](https://apple.github.io/foundationdb/architecture.html))

Tigris uses FoundationDB’s transactional key-value interface as its
underlying storage engine.

Tigris leverages FoundationDB to handle durability, replication, sharding,
transaction isolation, and load balancing. FoundationDB provides Tigris with
extremely powerful workload management features. The database is constantly
evaluating the load of the cluster to determine when it is “too busy”, and
when that happens it will artificially slow down starting new transactions
until the load is stable again. By forcing all the latency to the beginning
of your transaction, FoundationDB ensures every operation after that
experiences a consistent, low latency. Many other database systems lack any
workload management features at all, which manifests as overloaded clusters
requiring operators to shut down all the clients to get it back under control.

Read more about why we chose FoundationDB [here](https://blog.tigrisdata.com/building-a-database-using-foundationdb).

## Cloud native architecture

Tigris was designed to separate critical components into independently
scalable pieces. Tigris separates Query, Index and the Storage layers and
allows these layers to be scaled independently based on the workload needs.

By designing Tigris using a cloud native architecture, it provides users
with incredible flexibility to run various types of workloads as well as the
ability to achieve massive scale.

### Query processing

Applications using Tigris make use of its universal APIs to handle all
the complex data interactions. Tigris natively provides HTTP APIs and uses
JSON for transmitting data. Besides that, the Tigris API can be accessed
directly in your favorite languages. Currently, Typescript, Java and Go
libraries are available.

The user queries interact with the Tigris query layer that performs the
necessary validations (permissions, schema, quotas), generates a query plan
and then executes the query.

### Indexing

Under the hood, Tigris has implemented a fork of the popular open source
search tool Typesense and uses it to intelligently index the documents. This
means there is no need to worry about manually indexing documents or
collections and no need for detailed query tuning optimization exercises.
The indexing store can also be scaled independently of other components.

### Full-text search

Tigris has search built in, and you don't need a separate platform to access
robust search capabilities, it works out of the box. Both search and query
functionality share the same indexes and are serviced by the same indexing
store under the hood.

## Tigris in a nutshell

Tigris provides a cohesive, flexible set of tools for application developers
to take an idea from production without stepping into the sinkhole of data
pipelines, broken sync jobs, and complicated concurrency bugs present in
many modern application architectures. As your data grows, so does Tigris,
with a cloud-native architecture designed for scaling.
