# Configuration

Tigris CLI utility reads configuration both from config files and environment variables.

## Configuration files

Utility loads configuration from the following locations in the given order:

1. /etc/tigris/tigris-cli.yaml
2. $HOME/.tigris/tigris-cli.yaml
3. ./config/tigris-cli.yaml
4. ./tigris-cli.yaml

### Example configuration file

Here is an example of tigris-cli.yaml:

```yaml
url: tigris.example.com:8081
application_id: "your_app_id"
application_secret: "you_app_secret"
timeout: 2s
```

## Environment variables

Environment variables should have prefix `TIGRIS_` followed by the configuration variable name.
Nested variables delimited by underscore, meaning that variable which in the config file looks like the following:

```yaml
one:
  two: value
```

Can be set like:

```shell
TIGRIS_ONE_TWO=value
```

by the environment variable.

Environment variables have precedence over configuration files.

## Example environment configuration

```shell
export TIGRIS_APPLICATION_ID="your_app_id"
export TIGRIS_APPLICATION_SECRET="your_app_secret"
export TIGRIS_URL="tigris.example.com:8081"
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
