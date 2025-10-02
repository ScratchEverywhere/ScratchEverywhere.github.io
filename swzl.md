# `.swzl`

`.swzl` is a custom raw image format used by Scratch Everywhere! on DS.

The file format uses little endian. Unless specified all strings are **not**
null-terminated.

## Magic String

`.swzl` files all start with the string `SWZL`.

## Source Dimensions

These are the dimensions that the actual `.swzl` file contains, both are stored
as unsigned 8-bit integers; width comes first, followed by height.

## Output Dimensions

These are the dimensions that the actual texture should be upscaled to when
rendering, both are stored as unsigned 16-bit integers; width comes first,
followed by height.

## Color Palette

The first byte of the color palette is the number of colors in the palette.
Following that is groups of 3 bytes representing (in this order) the RGB
channels of the color.

## Pixel Data

The pixel data is simply a ton of unsigned 8-bit integers correlating to colors
in the color palette. A value of `0` represents a transparent pixel. The number
of pixels is determined by the source width multiplied by the source height.
