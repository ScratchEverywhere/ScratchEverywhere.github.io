# Extensions

## Variables

### `extensions.active: string[]`

A list of all extensions the current project uses.

### `extensions.installed: string[]`

A list of all extensions that are installed on the device. This does not include
extensions embedded in the project.

### `extensions.embedded: string[]`

A list of all embedded extensions. This includes both extensions embedded in the
project and the Scratch Everywhere! executable.

## Functions

### `extensions.send(id: string, message: string)`

Sends the specified message to a specific extension.

### `extensions.sendAll(message: string)`

Sends the specified message to all extensions.

### `extensions.receive(id: string, callback: fun(message: string))`

Takes in a callback that is called whenever a message is received from a
specific extension.

### `extensions.receiveAll(callback: fun(message: string))`

Takes in a callback that is called whenever a message is received from any
extension.
