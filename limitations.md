# Limitations

As this is in a very work in progress state, you will encounter many bugs,
crashes, and things that will just not work.

## General Limitations

- Some blocks may lead to crashing/unintended behavior (please open an issue if
  you know of a block that's causing problems).
- Performance is poor when running complex projects, specifically those with
  many clones or lots of blocks running at once.
  - Some older platforms (NDS, GameCube, PSP) especially struggle with
    performance. Try to keep projects small on these platforms.
- Sounds may take time to load when playing them for the first time.

## Platform-Specific

Some platforms may not support some features. These tables describe which
features support specific features.

### Features

| Platform | Cloud Variables | Extensions |
| -------- | --------------- | ---------- |
| Windows  | ✅              | ❌         |
| macOS    | ✅              | ✅         |
| Linux    | ✅              | ✅         |
| 3DS      | ✅              | ❌         |
| DS       | ❌              | ❌         |
| Wii U    | ✅              | ❌         |
| Wii      | ❌              | ❌         |
| GameCube | ❌              | ❌         |
| Switch   | ❌              | ❌         |
| Vita     | ❌              | ❌         |
| PSP      | ❌              | ❌         |
| PS4      | ❌              | ❌         |

### Extensions

| Platform | Pen | Text to Speech | Translate |
| -------- | --- | -------------- | --------- |
| Windows  | ✅  | ✅             | ✅        |
| macOS    | ✅  | ❌             | ❌        |
| Linux    | ✅  | ✅             | ✅        |
| 3DS      | ✅  | ✅             | ✅        |
| DS       | ✅  | ❌             | ❌        |
| Wii U    | ✅  | ✅             | ✅        |
| Wii      | ✅  | ❌             | ❌        |
| GameCube | ✅  | ❌             | ❌        |
| Switch   | ✅  | ❌             | ❌        |
| Vita     | ✅  | ❌             | ❌        |
| PSP      | ✅  | ❌             | ❌        |
| PS4      | ✅  | ❌             | ❌        |

### Misc Notes

- **[Wii, Wii U, GameCube, Switch]** The first controller connected will be the
  only one that will work.
- **[Wii]** If you're using a PAL Wii, you must use 50Hz.
- **[PSP]** Images cannot be over 512x512.
- **[3DS]** If a project has a bunch of large images, some may not load.
- **[3DS]** Some vector images will appear bigger than they should.
- **[NDS]** Dual screen mode will not be supported.
- **[Vita]** Back touch will not be supported.
- **[PS4]** The software keyboard isn't currently supported.

## Unimplemented blocks

<!-- deno-fmt-ignore -->
- ::sb change [ v] effect by ():: and ::sb set [ v] effect to ():: (except for `Ghost` and `Brightness`)
- ::sb when [loudness v] > ()::
- ::sb touching color [#754D75]?:: and ::sb color [#754D75] is touching [#754D75]?::
- ::sb loudness::
