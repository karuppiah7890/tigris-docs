# Authentication

## User authentication

Every request on the cloud Tigris platform must be authenticated.
To authenticate yourself using CLI, run the following command:

```shell
tigris login api.preview.tigrisdata.cloud
```

The command initiates login flow by opening authentication page
in the browser.

First step is to enter organization name (can be found in the beta invitaion e-mail)

![Enter organization](/img/screenshots/auth_enter_org.png "Enter organization prompt")

Enter organization name and click "Continue" button.
You'll be redirected to OpenID Connect provider selection page.
Tigris support "Google" and "GitHub" providers.

![Select OIDC provider](/img/screenshots/auth_select_oidc.png "Select OIDC provider")

Once selected, you may be asked to login to your Google or GitHub account, if you
are not logged in yet.

On successful authentication you'll see the following message in the browser:

![Successfully authenticated](/img/screenshots/auth_success_browser.png "Select authenticated")

Now you can close the page and switch back to the terminal, where you initiated
the login flow.

In the terminal you'll see success message as well:

![Successfully authenticated](/img/screenshots/auth_success_terminal.png "Select authenticated")

You are authenticated now and can start executing CLI [commands](reference) against the Tigris instance.

## Checking current authentication information

Curent authentication configuration can be checked by running:

```shell
tigris config show
```

The output would look like this:

```yaml
token: <token value>
url: api.preview.tigrisdata.cloud
```

** Warning **
Please make sure to keep the token secure. Whoever possess the token
can execute any command on your name.

The token can be provided as authorization header to authenticate bare [HTTP APIs](/apidocs):

```
Authorization: Bearer <token value>
```

## Application credentials

To authenticate applications written using Tigris SDKs, credentials
need to be created, by running:

```shell
tigris create application your_app_name "human readable description"
```

The output contains id and secret, which need to be set in the SDKs
authentication configuration:

```json
{
  "id": "<client id>",
  "name": "your_app_name",
  "description": "human readable description",
  "secret": "<client secrete here",
  "created_at": 1663802082000,
  "created_by": "github|3436058"
}
```

** Warning **
Please make sure to keep the client id and secret in a safe place.
