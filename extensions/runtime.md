# Runtime API

## Types

### `runtime.variable: table`

#### `id: string`

The ID of the variable.

#### `name: string`

The name of the variable.

#### `cloud: boolean`

`false` for normal variables and `true` for cloud variables.

#### `value: string | number | boolean`

The value of the variable.

### `runtime.list: table`

#### `id: string`

The ID of the list.

#### `name: string`

The name of the list.

#### `items: (string | number | boolean)[]`

The items of the list.

### `runtime.comment: table`

#### `id: string`

The ID of the comment.

#### `blockId: string?`

The ID of the block it is linked to.

#### `content: string`

The content of the comment.

#### `x: number`

The comment's X position.

#### `y: number`

The comment's Y position.

#### `width: number`

The comment's width.

#### `height: number`

The comment's height.

### `runtime.broadcast: table`

#### `id: string`

The ID of the broadcast.

#### `name: string`

The name of the broadcast.

### `runtime.blockField`

#### `id: string`

The ID of the field.

#### `value: string | number | boolean`

The parsed value of the field.

### `runtime.blockInput`

#### `type: "block" | "literal" | "reporter" | "variable"`

The type of input.

#### `literalValue: (number | string | boolean)?`

The value of the input if the input was a literal.

#### `variableId: string?`

The ID of the variable inputed, only present if the type is `"variable"`.

#### `blockId: string?`

The ID of the block inputed, only present if the type is `"block" | "boolean"`.

### `runtime.block: table`

#### `id: string`

The ID of the block.

#### `opcode: string`

The opcode of the block.

#### `next: string`

The ID of the next block.

#### `inputs: table<string, runtime.blockInput>`

A table representing all of the block's inputs.

#### `fields: table<string, runtime.blockField>`

A table representing all of the block's fields.

#### `shadow: boolean`

Whether or not the block is a shadow block.

### `runtime.monitor: table`

#### `id: string`

The ID of the monitor.

#### `mode: "default" | "large" | "slider" | "list"`

What view mode the monitor is currently in.

#### `opcode: string`

The block opcode this monitor belongs to.

#### `params: table<string, string>`

A table associating names of inputs of the block the monitor belongs to with
their values.

#### `sprite: string`

> [!NOTE]
> This field is only present if the target the monitor belongs to is a sprite.

The name of the sprite the monitor belongs to.

#### `value: string | boolean | number`

The value of the monitor.

#### `x: integer`

The X position of the monitor.

#### `y: integer`

The Y position of the monitor.

#### `visible: boolean`

Whether or not the monitor is visible.

#### `min: number`

The minimum value of the slider.

#### `max: number`

The maximum value of the slider.

#### `discrete: boolean`

Whether or not the slider snaps to integers.

### `runtime.costume: table`

#### `id: string`

The ID of the costume/backdrop.

#### `name: string`

The name of the costume/backdrop.

#### `dataFormat: string`

The format of the costume/backdrop.

#### `vector: boolean`

Whether or not the costume/backdrop is a vector image.

### `runtime.sound: table`

#### `id: string`

The ID of the sound.

#### `name: string`

The name of the sound.

#### `dataFormat: string`

The format of the sound.

#### `sampleRate: integer`

The sample rate of the audio file.

#### `sampleCount: integer`

The sample count of the audio file.

### `runtime.target: table`

#### `name: string`

Name of the target.

#### `id: string`

ID of the target.

#### `isStage: boolean`

`true` if the target is the stage, `false` if it's a sprite.

#### `draggable: boolean?`

> [!NOTE]
> This field is only present on sprites.

`true` if the target is draggable, `false` if it is not.

#### `visible: boolean?`

> [!NOTE]
> This field is only present on sprites.

`true` if the target is visible, `false` if it's hidden.

#### `isClone: boolean?`

> [!NOTE]
> This field is only present on sprites.

`true` if the target is a clone, `false` if it's the original sprite.

#### `currentCostume: integer`

The target's current costume/backdrop number.

#### `volume: number`

The target's current volume.

#### `x: number?`

> [!NOTE]
> This field is only present on sprites.

The target's current X position.

#### `y: number?`

> [!NOTE]
> This field is only present on sprites.

The target's current Y position.

#### `size: number?`

> [!NOTE]
> This field is only present on sprites.

The target's current Size.

#### `direction: number`

> [!NOTE]
> This field is only present on sprites.

The target's current direction.

#### `layer: number?`

> [!NOTE]
> This field is only present on sprites.

The target's current layer number.

#### `ghostEffect: number`

The target's current ghost effect.

#### `brightnessEffect: number`

The target's current brightness effect.

#### `colorEffect: number`

The target's current color effect.

#### `rotationStyle: ("None" | "All Around" | "Left Right")?`

> [!NOTE]
> This field is only present on sprites.

The target's current rotation style.

#### `variables: table<string, runtime.variable>`

A table representing all of the target's variables.

#### `lists: table<string, runtime.list>`

A table representing all of the target's lists.

#### `comments: table<string, runtime.comment>`

A table representing all of the target's comments, useful for loading configs.

#### `blocks: table<string, runtime.block>`

A table representing all of the target's blocks.

#### `costumes: runtime.costume[]`

An array of all costumes/backdrops for the target.

#### `sounds: table<string, runtime.sound>`

A table of sound's IDs and other data about the sound.

## Variables

### `runtime.broadcasts: table<string, runtime.broadcast>`

A table representing all broadcasts.

### `runtime.monitors: runtime.monitor[]`

An array of all monitors, in the order of how they are layered.

### `runtime.targets: runtime.target[]`

An array of all targets.

### `runtime.username: string`

The current username.

## Functions

### `runtime.clone(id: string)`

Creates a clone of a specific sprite.

> [!WARNING]
> The runtime API is currently missing some functions which will be added later.
