---
id: metrics
slug: observability/metrics
title: Metrics & Tracing
---

# Metrics

The metrics exposed by tigris server are counters and timers around various areas of the server. These can be groupped based on what layers are they measuring. These are the following:

- _Requests_: metrics about the high level GRPC/HTTP requests, issued by the users of tigris.
- _Fdb_: metrics about how tigris uses the underlying foundationdb.
- _Search_: metrics about how tigris uses the underlying typesense search engine.
- _Session_: metrics about query execution within tigris server.
- _Size_: metrics about the size of databases and collections.
- _Net_: metrics about the network traffic between the tigris server and it's clients.
- _Auth_: metrics about authentication.
- _Go_: standard go process level metrics.

Each of the metric groups are have tags, so we can easily drill down for example from global QPS (queries per second) to QPS on a certain database or collection. If you are using Tigris Cloud, these metrics are the sources of what is displayed on the web console.

A line only appears in the output of /metrics when it is accessed the first time. This is normal for services exposing metrics like this. Because of rich tagging, it's impossible to pre-populate all the metrics with 0 counters, because we have no way to know in advance which databases and collections will be created in the future.

# Tracing

Currently, only datadog is supported for tracing. In the future, this will be configurable, and anything can be used a process traces what supports opentelemetry. As of writing this document, tracing is only supported on the server side.

# Examining locally

While we provide a metrics on a standard endpoint, one needs to curl it to view the raw metrics. We are providing the `make run_all` command in the tigris server repository, which will also bring up a prometheus and a grafana container (apart from the standard ones), where the metrics can be examined using grafana.
