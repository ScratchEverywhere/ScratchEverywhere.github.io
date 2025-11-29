# Extensions

## Types

### `extensions.info: table`

#### `core: boolean`

Whether or not the extension is a core extension.

#### `id: string`

The ID of the extension.

#### `name: string`

The name of the extension.

#### `description: string`

The extension's description.

#### `permissions: ("localfs" | "rootfs" | "network" | "input" | "render" | "update" | "platform-specific" | "runtime" | "audio" | "extensions")[]`

A list of all the permissions the extension has.

#### `platforms: ("3ds" | "wiiu" | "wii" | "gamecube" | "switch" | "vita" | "pc")[]`

A list of all the platforms the extension supports.

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

### `extensions.getInfo(id: string)`

Gets info about a specific custom extension. Returns a [`extensions.info`]()
table.
