> [!NOTE]
> Most people shouldn't need to worry about this. This is for people
> implementing SE! extensions, and people working on compilers like seec.

# SEE (Scratch Everywhere! Extension)

All strings are UTF-8.

## Magic Strings

All `.see` files start with the magic string `SE! EXTENSION` (not
null-terminated.)

## Core Extensions

The core extensions flag is made up of 1 byte that is either `0` if the
extension is not a core extension, or `1` of the extension is a core extension.
Core extensions allow creating blocks that are not tied to the specific
extension ID.

## Extension Info

The extension info section contains information about the extension. It is made
up of 3 null-terminated strings in this order:

- Extension ID
- Extension Name
- Extension Description

## Permissions

The permissions section contains the necessary permissions the extension needs,
it is made up of a single unsigned 16-bit integer.

- 1st bit represents if the extension needs local file system access. This is
  what should be used the majority of the time.
- 2nd bit represents if the extension needs root file system access. This is not
  recommended for most extensions.
- 3rd bit represents if the extension needs internet access.
- 4th bit represents if the extension needs access to inputs.
- 5th bit represents if the extension needs access to rendering.
- 6th bit represents if the extension has update functions that need to be
  called each frame.
- 7th bit represents if the extension needs access to platform specific APIs
  (e.g. Amiibo or account information.)
- 8th bit represents if the extension needs access to the runtime (e.g. sprite
  position, costume, or variables.)
- 9th bit represents if the extension needs access to audio APIs.
- 10th bit represents if the extension needs access to be able to communicate
  with other extensions.

## Supported Platforms

The platforms section is just a single byte with its bits representing the
platforms that the extension works on. Most extensions should support all
platforms.

- 1st bit: 3DS
- 2nd bit: Wii U
- 3rd bit: Wii
- 4th bit: GameCube
- 5th bit: Switch
- 6th bit: PC
- 7th bit: Vita

## Blocks

The blocks section is actually split into two sub-sections, the block types
section and the block IDs section.

### Block Types

The block types section itself is null-terminated and is simply represented by 1
byte for each block which tells the runtime what type of block, each block is.

- `0x1`: Command
- `0x2`: Hat
- `0x3`: Event
- `0x4`: Reporter
- `0x5`: Boolean

### Block IDs

After the block types is the block IDs. Each ID is a null-terminated string.
There should be the same amount of IDs as types.
