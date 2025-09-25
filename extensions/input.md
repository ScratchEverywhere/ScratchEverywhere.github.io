# Input

## Variables

### `input.mappings: table<string, string>`

A table representing mappings between controller buttons and keyboard keys.

## Functions

### `input.keyDown(key: string)`

> [!NOTE]
> Keys try to be as similar as possible to JavaScript's events.

Checks if a given key is currently pressed, returns a `boolean`, does **not**
include controller buttons mapped to keys.

### `input.buttonDown(button: string)`

Checks if a given controller button is currently pressed.

### `input.mouseDown(button: ("left" | "middle" | "right")?)`

Checks if a given mouse button is down. If no button is specified it defaults to
`left`.

### `input.onEvent(event: "click" | "keydown" | "keyup" | "buttondown" | "buttonup", handler: fun(data: string))`

Adds an event handler for a specific event.
