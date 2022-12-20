---
id: metrics
---

# Metrics and Tracing

In addition to the reports and charts built into the [Tigris Cloud Console](https://console.preview.tigrisdata.cloud/),
Tigris provides a [OpenMetrics](https://openmetrics.io/) / [Prometheus](https://prometheus.io/)
compatible metrics endpoint `/metrics` which can be used to gather
insights into the health, performance and usage of your projects.

Tigris also supports tracing (only datadog support right now and only server side).
In the near future, tigris server will support _opentelemetry/openmetrics_. As
well as client side tracing, so the tigris level metrics can be tied to
meaningful user sessions at the application level.

## Metrics

The metrics exposed by tigris server are counters and timers around various areas of the server. These can be groupped based on what layers are they measuring. These are the following:

- _Requests_: metrics about the high level GRPC/HTTP requests, issued by the users of tigris.
- _Fdb_: metrics about how tigris uses the underlying foundationdb.
- _Search_: metrics about how tigris uses the underlying typesense search engine.
- _Session_: metrics about query execution within tigris server.
- _Size_: metrics about the size of databases and collections.
- _Net_: metrics about the network traffic between the tigris server and it's clients.
- _Auth_: metrics about authentication.
- _Go_: standard go process level metrics.

Each of the metric groups are have tags, so we can easily drill down for example
from global QPS (queries per second) to QPS on a certain database or collection.
If you are using Tigris Cloud, these metrics are the sources of what is displayed
on the web console.

A line only appears in the output of /metrics when it is accessed the first time.
This is normal for services exposing metrics like this. Because of rich tagging,
it's impossible to pre-populate all the metrics with 0 counters, because we have
no way to know in advance which databases and collections will be created in the
future.
