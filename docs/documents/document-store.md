---
slug: /documents/
---

# Document Store

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
