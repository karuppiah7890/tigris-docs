# Observability

Tigris server provides diagnostic information for the users in two ways:

- Exposes metrics in openmetrics/prometheus format on the `/metrics` endpoint.

These can be examined on the local server (if tracing is enabled in
configuration) on `http://localhost:8081/metrics`.

- Supports tracing (only datadog support right now and only server side). In
  the near future, tigris server will support _opentelemetry/openmetrics_. As
  well as client side tracing, so the tigris level metrics can be tied to
  meaningful user sessions at the application level.
