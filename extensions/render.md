# Render

## Types

### `render.renderTarget: "screen1" | "screen2"`

<!-- TODO: Add pen target once in SE! -->

Simply which screen to draw to, if a device only has one screen, you need to use
`"screen1"`.

## Functions

### `render.setColor(target: render.renderTarget, r: number, g: number, b: number)`

Sets the color to be used in subsequent operations.

### `render.drawRect(target: render.renderTarget, x: number, y: number, width: number, height: number)`

Draws a rectangle outline at the given position with the given size.

### `render.fillRect(target: render.renderTarget, x: number, y: number, width: number, height: number)`

Draws a filled rectangle at the given position with the given size.

### `render.drawCircle(target: render.renderTarget, x: number, y: number, radius: number)`

Draws a circle outline at the given position with the given radius.

### `render.fillCircle(target: render.renderTarget, x: number, y: number, radius: number)`

Draws a filled circle at the given position with the given radius.

### `render.drawLine(target: render.renderTarget, x1: number, y1: number, x2: number, y2: number)`

Draws a line between two points.

### `render.drawImage(target: render.renderTarget, x: number, y: number, dataUrl: string)`

Draws an image in the form of a data url.
