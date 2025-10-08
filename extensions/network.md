# Networking

> [!IMPORTANT]
> The current version of the extension API does **not** support SSL. It is also
> currently missing a WebSockets API so you'll need to use raw TCP for now.

## Types

### `network.http.response: table`

#### `statusCode: integer`

The status code of the response.

#### `statusMessage: string`

The status message of the response.

#### `body: string`

The response's body.

#### `headers: table<string, string>`

The response headers.

## Variables

### `network.connected: boolean`

Whether or not we are currently connected to the internet.

## Functions

### `network.http.get(address: string, headers?: string | table<string, string> | string[]): network.http.response`

Makes a `GET` request to a specific URL.

### `network.http.head(address: string, headers?: string | table<string, string> | string[]): network.http.response`

Makes a `HEAD` request to a specific URL.

### `network.http.delete(address: string, headers?: string | table<string, string> | string[]): network.http.response`

Makes a `DELETE` request to a specific URL.

### `network.http.post(address: string, headers?: string | table<string, string> | string[], data: any): network.http.response`

Makes a `POST` request to a specific URL. Any data passed in will automatically
be converted to a string with tables being converted to JSON.

### `network.http.put(address: string, headers?: string | table<string, string> | string[], data: any): network.http.response`

Makes a `PUT` request to a specific URL. Any data passed in will automatically
be converted to a string with tables being converted to JSON.

### `network.http.patch(address: string, headers?: string | table<string, string> | string[], data: any): network.http.response`

Makes a `PATCH` request to a specific URL. Any data passed in will automatically
be converted to a string with tables being converted to JSON.
