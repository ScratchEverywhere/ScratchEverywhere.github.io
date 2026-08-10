# Limitations

As this is in a very work in progress state, you will encounter many bugs,
crashes, and things that will just not work.

## General Limitations

- Some blocks may lead to crashing/unintended behavior (please open an issue if
  you know of a block that's causing problems).
- Performance is poor when running complex projects, specifically those with
  many clones or lots of blocks running at once.
  - Some older platforms (NDS, GameCube, PSP, PS2) especially struggle due to memory
    constraints. Try to keep projects small on these platforms.
- Sounds may take time to load when playing them for the first time.

## Unimplemented Blocks

<!-- deno-fmt-ignore -->
- ::sb change [ v] effect by ():: and ::sb set [ v] effect to ():: (except for
`Ghost` and `Brightness`)
- ::sb when [loudness v] > ()::
- ::sb touching color [#754D75]?:: and ::sb color [#754D75] is touching [#754D75]?::
- ::sb loudness::

### Unimplemented Extensions

- Video Sensing
- Face Sensing
- micro:bit
- LEGO MINDSTORMS EV3
- LEGO BOOST
- LEGO Education WeDo 2.0
- Go Direct Force & Acceleration

## Platform-Specific

Some platforms may not support some features. These tables describe which
features support specific features.

### Features

| Platform | Cloud Variables | Native Extensions | Lua Extensions |
| -------- | --------------- | ----------------- | -------------- |
| Windows  | ✅              | ❌                | ✅             |
| macOS    | ✅              | ✅                | ✅             |
| Linux    | ✅              | ✅                | ✅             |
| 3DS      | ✅              | ❌                | ✅             |
| DS       | ❌              | ❌                | ❌             |
| Wii U    | ✅              | ❌                | ✅             |
| Wii      | ❌              | ❌                | ✅             |
| GameCube | ❌              | ❌                | ✅             |
| Switch   | ❌              | ❌                | ✅             |
| Vita     | ❌              | ❌                | ✅             |
| PSP      | ❌              | ❌                | ❌             |
| PS4      | ❌              | ❌                | ❌             |
| PS2      | ❌              | ❌                | ❌             |
| Libretro | ✅              | ❌                | ❌             |

### Extensions

| Platform | Pen | Text to Speech | Makey Makey | Translate |
| -------- | --- | -------------- | ----------- | --------- |
| Windows  | ✅  | ✅            | ✅          | ✅       |
| macOS    | ✅  | ✅            | ✅          | ✅       |
| Linux    | ✅  | ✅            | ✅          | ✅       |
| 3DS      | ✅  | ✅            | ✅          | ✅       |
| DS       | ❌  | ❌            | ✅          | ❌       |
| Wii U    | ✅  | ✅            | ✅          | ✅       |
| Wii      | ✅  | 🟡            | ✅          | ❌       |
| GameCube | ✅  | 🟡            | ✅          | ❌       |
| Switch   | ✅  | 🟡            | ✅          | ❌       |
| Vita     | ✅  | 🟡            | ✅          | ❌       |
| PSP      | ✅  | 🟡            | ✅          | ❌       |
| PS4      | ✅  | 🟡            | ✅          | ❌       |
| PS2      | ✅  | 🟡            | ✅          | ❌       |
| Libretro | ✅  | ✅            | ✅          | ✅       |

Text-to-Speech can use either the official Scratch servers (if the platform
supports it), or DECtalk, which runs locally but is not 100% accurate. Platforms
marked with a 🟡 support DECtalk only, while those with a ✅ support both.

### Misc Notes

- **[Wii, Wii U, GameCube, PS2, Switch]** The first controller connected will be the
  only one that will work.
- **[Wii]** If you're using a PAL Wii, you must use 50Hz.
- **[PSP]** Images cannot be over 512x512.
- **[3DS]** If a project has a bunch of large images, some may not load.
- **[3DS]** Some vector images will appear bigger than they should.
- **[NDS]** Dual screen mode will not be supported.
- **[Vita]** Back touch will not be supported.
- **[PS4]** The software keyboard isn't currently supported.
- **[DS]** Audio is currently broken.
