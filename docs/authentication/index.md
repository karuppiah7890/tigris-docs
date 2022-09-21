---
id: authentication
slug: /overview/authentication
---

# Authentication & Authorization

Tigris supports pluggable authentication and authorization provider. For
authentication Tigris uses OpenID connect ([OIDC](https://openid.net/connect/)) built on top of OAuth 2.
0 and
for authorization it uses stateless JSON Web Token ([JWT](https://jwt.io/introduction)).

Tigris support multi tenancy out of the box. Based on the organization's
authentication mechanism Tigris can customize the authentication flow (For
example: Use Google, Github or LDAP, SSO etc...).

Tigris has two types of users from authn & authz perspective. Users
and applications. Users authenticate themselves through the web console or the Tigris CLI and obtain a JWT.
Once authenticated, the user can create applications. Each application has a
`client_id` and `client_secret` associated with it. These credentials are then
used to communicate with the Tigris via the supported TypeScript, Go and Java
SDKs.

Authentication process is described here:

- [CLI](../cli/authentication.md)
- UI

## Supported auth providers

### Auth0

Tigris has built in integration for Auth0 as one of the authn/z provider.
For the preview environment Tigris uses rotating JWT. It uses Auth0 as the
signature authority with RS256 signature algorithm.
