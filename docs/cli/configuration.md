# Configuration

Tigris CLI utility reads configuration both from config files and environment variables.

## Configuration files

Utility loads configuration from the following locations in the given order:

1. /etc/tigris/tigris.yaml
2. $HOME/.tigris/tigris.yaml
3. ./config/tigris.yaml
4. ./tigris.yaml

### Example configuration file

```yaml
url: prod.tigrisdata.cloud:8081
application_id: "your_app_id"
application_secret: "you_app_secret"
timeout: 2s
```

## Environment variables

Environment variables should have prefix `TIGRIS_` followed by the configuration variable name.
Nested variables delimited by underscore.

Environment variables have precedence over configuration files.

## Example environment configuration

```shell
export TIGRIS_APPLICATION_ID="your_app_id"
export TIGRIS_APPLICATION_SECRET="your_app_secret"
export TIGRIS_URL="prod.tigrisdata.cloud:8081
```

## Available configuration variables

- `application_id` - Unique application identifier obtained in the web console
- `application_secret` - Application secret obtained in the web console
- `url` - URL pointing to the Tigris installation with optional port
- `timeout` - Request timeout
- `protocol` - Protocol GRPC or HTTP(S).

## Default configuration

```yaml
url: "localhost:8081"
timeout: 5s
protocol: grpc
application_id: ""
application_secret: """
```
