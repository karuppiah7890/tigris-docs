---
id: tags
slug: observability/tags
---

# Tags

Each metric and tracing span is annotated with one or more tags. This is to help identifying the request in an environment. Many metrics share tags, so this chapter describes all the possible tags across all metrics, so these tags can be referenced by the various metrics. If a tag has no known value, and it is still present, the value will be unknown, unless it's indicated otherwise here. For example the ListDatabases request will always have an `unknown` `collection` and `db` tags.

This page describe some of the basic tags that almost every metric has.

| Tag name          | Description                                                                                                                                                                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| grpc_method       | The GRPC method issues by the client the given metric belongs to. When Tigris is used via http, it is still counted as the corresponding GRPC method (the same api is available both on HTTP and GRPC).                                                                       |
| grpc_service      | The GRPC service the request belongs to. Most of normal requests would belong to `tigrisdata.v1.Tigris` at the time of writing the documentation.                                                                                                                             |
| tigris_tenant     | The tenant in Tigris that issued the request.                                                                                                                                                                                                                                 |
| grpc_service_type | It can be `unary` or `stream`. Most of the methods are `unary`, the `Read` methods are using `stream`. This means that the response to the request may consist of multiple packets.                                                                                           |
| env               | The environment the tigris server is in. Configurable. This is a standard tag used by many systems that are consuming these metrics.                                                                                                                                          |
| version           | The version of the tigris server. The version is determined during build time. If the version cannot be determined (for example using go build locally without specifying the version), this will have the value `dev`.                                                       |
| db                | The database that the request belongs to. For some requests, for example for `ListDatabases`, the value will be `unknown`, as those can't be tied to a particular database. Anything that is reading or writing data that is part of a database will have this tag populated. |
| collection        | The collection that the request belongs to. For some requests, for example `ListCollections`, the value will be `unknown` as those can't be tied to a particular collection. Anything that is reading from a collection or writing data to it, will have this tag populated.  |

## Successful requests

Metrics of traces belonging to successful requests has a different set of tags than the ones that resulted in an error. Successful requests are tracked for various parts of server. The metrics beginning with `requests` for example are describing the requests issues by the client directly.

Example of a successful request metric:

```
requests_count_ok{collection="test_collection",db="test_db",env="test",grpc_method="Read",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown"} 1
```

The above metric belongs to a Read request. Successful requests will have the normal set of tags.

## Errors

Metrics and traces belonging to non-successful requests can have additional tags compared to successful ones. For example, if one tries to list the collections from a database that does not exist, it results in an error.

```
$ tigris list collections invalid
database doesn't exist 'invalid'
```

Requests with errors are traced and measured differently compared to successful requests.

Example counter after this particular request:

```
requests_error_response_time_count{collection="unknown",db="invalid",env="test",error_source="tigris_server",error_value="NOT_FOUND",grpc_method="ListCollections",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown"} 1
```

Not that the `db` tag will still be populated with the invalid database name, but the `collection` tag will be unknown, because the request itself is `ListCollections`.

Example response time metrics after this particular request:

```
requests_error_response_time{collection="unknown",db="invalid",env="test",error_source="tigris_server",error_value="NOT_FOUND",grpc_method="ListCollections",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown",quantile="0.5"} 0.003786879
requests_error_response_time{collection="unknown",db="invalid",env="test",error_source="tigris_server",error_value="NOT_FOUND",grpc_method="ListCollections",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown",quantile="0.75"} 0.003786879
requests_error_response_time{collection="unknown",db="invalid",env="test",error_source="tigris_server",error_value="NOT_FOUND",grpc_method="ListCollections",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown",quantile="0.95"} 0.003786879
requests_error_response_time{collection="unknown",db="invalid",env="test",error_source="tigris_server",error_value="NOT_FOUND",grpc_method="ListCollections",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown",quantile="0.99"} 0.003786879
requests_error_response_time{collection="unknown",db="invalid",env="test",error_source="tigris_server",error_value="NOT_FOUND",grpc_method="ListCollections",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown",quantile="0.999"} 0.003786879
requests_error_response_time_sum{collection="unknown",db="invalid",env="test",error_source="tigris_server",error_value="NOT_FOUND",grpc_method="ListCollections",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown"} 0.003786879
```

Compared to successful requests, these metrics and traces can have the `error_source` and the `error_value` tags populated.

## Latency

Latencies are measured for error and non-errored requests separately. Some examples for response time metrics measuring successful requests.

```
requests_response_time{collection="test_collection",db="test_db",env="test",grpc_method="Read",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown",quantile="0.5"} 0.000971136
requests_response_time{collection="test_collection",db="test_db",env="test",grpc_method="Read",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown",quantile="0.75"} 0.001772447
requests_response_time{collection="test_collection",db="test_db",env="test",grpc_method="Read",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown",quantile="0.95"} 0.001772447
requests_response_time{collection="test_collection",db="test_db",env="test",grpc_method="Read",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown",quantile="0.99"} 0.001772447
requests_response_time{collection="test_collection",db="test_db",env="test",grpc_method="Read",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown",quantile="0.999"} 0.001772447
requests_response_time_sum{collection="test_collection",db="test_db",env="test",grpc_method="Read",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown"} 0.008247391
requests_response_time_count{collection="test_collection",db="test_db",env="test",grpc_method="Read",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown"} 3
```

The response time metrics have an additional `quantile` tag if the metrics describes a quantile of the response time. Apart from that, a `sum` and a `count` metrics are maintained by the response time.

Error requests are tracked separately. Same example for `ListCollections` requests that are trying to list collections for databases that doesn't exist.

```
requests_error_response_time{collection="unknown",db="invalid",env="test",error_source="tigris_server",error_value="NOT_FOUND",grpc_method="ListCollections",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown",quantile="0.5"} 0.003786879
requests_error_response_time{collection="unknown",db="invalid",env="test",error_source="tigris_server",error_value="NOT_FOUND",grpc_method="ListCollections",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown",quantile="0.75"} 0.003786879
requests_error_response_time{collection="unknown",db="invalid",env="test",error_source="tigris_server",error_value="NOT_FOUND",grpc_method="ListCollections",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown",quantile="0.95"} 0.003786879
requests_error_response_time{collection="unknown",db="invalid",env="test",error_source="tigris_server",error_value="NOT_FOUND",grpc_method="ListCollections",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown",quantile="0.99"} 0.003786879
requests_error_response_time{collection="unknown",db="invalid",env="test",error_source="tigris_server",error_value="NOT_FOUND",grpc_method="ListCollections",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown",quantile="0.999"} 0.003786879
requests_error_response_time_sum{collection="unknown",db="invalid",env="test",error_source="tigris_server",error_value="NOT_FOUND",grpc_method="ListCollections",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown"} 0.003786879
requests_error_response_time_count{collection="unknown",db="invalid",env="test",error_source="tigris_server",error_value="NOT_FOUND",grpc_method="ListCollections",grpc_service="tigrisdata.v1.Tigris",grpc_service_type="unary",read_type="unknown",search_type="unknown",service="tigris-server",sort="unknown",tigris_tenant="default_namespace",version="dev",write_type="unknown"} 1
```

Errors can be a lot faster of a lot slower than normal request, it's important to track them separately. Apart from the tags of the normal requests, the error response time tags have the `error_source` and the `error_value` tags.
