# Configuration

Tigris CLI utility reads configuration both from config files and environment variables.

## Configuration files

Utility loads configuration from the following locations in the given order:

1. /etc/tigris/tigris.yaml
2. $HOME/.tigris/tigris.yaml
3. ./config/tigris.yaml
4. ./tigris.yaml

### Example configuration file

Here is an example of tigris.yaml:

```yaml
url: tigris.example.com:8081
project: "your_tigris_project"
client_id: "your_client_id"
client_secret: "your_client_secret"
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
export TIGRIS_CLIENT_ID="your_client_id"
export TIGRIS_CLIENT_SECRET="your_client_secret"
export TIGRIS_URL="tigris.example.com:8081"
export TIGRIS_PRPOJECT="your_tigris_project"
```

## Available configuration variables

- `client_id` - Unique application identifier obtained in the web console
- `client_secret` - Application secret obtained in the web console
- `url` - URL pointing to the Tigris installation with optional port
- `project` - Tigris project.
- `timeout` - Request timeout
- `protocol` - Protocol GRPC or HTTP(S).

## Default configuration

```yaml
url: "localhost:8081"
project: ""
timeout: 5s
protocol: grpc
client_id: ""
client_secret: """
```
