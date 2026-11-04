# Limitations

As this is in a very work in progress state, you will encounter many bugs,
crashes, and things that will just not work.

## General Limitations

- Some blocks may lead to crashing/unintended behavior (please open an issue if
  you know of a block that's causing problems).
- Performance is poor when running complex projects, specifically those with
  many clones or lots of blocks running at once.
  - Some older platforms (Original Xbox, DS(i), GameCube, PSP) especially
    struggle due to memory constraints. Try to keep projects small on these
    platforms.
- Sounds may take time to load when playing them for the first time.

## Unimplemented Blocks

<!-- deno-fmt-ignore -->
- ::sb change [ v] effect by ():: and ::sb set [ v] effect to ():: (except for
`Ghost` and `Brightness`)
  - All Looks effects are supported using the `opengl_core`, `d3d9`, and `gx2` renderers. See the
  [compile flag documentation](/build.md#supported-renderers) to see which
  platforms support these renderers.

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

| Platform      | Cloud Variables | Native Extensions | Lua Extensions | Just-in-Time Compiler |
| ------------- | --------------- | ----------------- | -------------- | --------------------- |
| GameCube      | ❌              | ❌                | ✅             | ✅[^3]                |
| DS(i)         | ❌              | ❌                | ❌             | ❌                    |
| Wii           | ❌              | ❌                | ✅             | ✅                    |
| Wii U         | ✅              | ❌                | ✅             | ✅                    |
| 3DS           | ✅              | ❌                | ✅             | ✅                    |
| Switch        | ❌              | ❌                | ✅             | ✅                    |
| PSP           | ❌              | ❌                | ❌             | ❌                    |
| Vita          | ❌              | ❌                | ✅             | ✅                    |
| PS4           | ✅              | ❌                | ❌             | ✅                    |
| webOS         | ❌              | ❌                | ✅             | ✅[^2]                |
| Original Xbox | ❌              | ❌                | ✅             | ✅                    |
| Windows       | ✅              | ❌                | ✅             | ✅[^1]                |
| macOS         | ✅              | ✅                | ✅             | ✅[^1]                |
| Linux         | ✅              | ✅                | ✅             | ✅[^1]                |
| Libretro      | ✅              | ❌                | ❌             | ✅[^1]                |
| WASM          | ❌              | ❌                | ✅             | ❌                    |

[^1]: PC and Libretro only support JIT on `x86_64` (`amd64`), `aarch64`
    (`arm64`), `i386` and `i686` (`x86`), and `riscv64`.

[^2]: webOS only supports JIT on `aarch64` (`arm64`).

[^3]: GameCube currently has the JIT compiler disabled by default. You will need
    to manually enable it in the project settings.

### Extensions

| Platform      | Pen | Text to Speech[^4] | Makey Makey | Translate |
| ------------- | --- | ------------------ | ----------- | --------- |
| GameCube      | ✅  | 🟡                 | ✅          | ❌        |
| DS(i)         | ❌  | ❌                 | ✅          | ❌        |
| Wii           | ✅  | 🟡                 | ✅          | ❌        |
| 3DS           | ✅  | ✅                 | ✅          | ✅        |
| Wii U         | ✅  | ✅                 | ✅          | ✅        |
| Switch        | ✅  | 🟡                 | ✅          | ❌        |
| PSP           | ✅  | 🟡                 | ✅          | ❌        |
| Vita          | ✅  | 🟡                 | ✅          | ❌        |
| PS4           | ✅  | ✅                 | ✅          | ✅        |
| webOS         | ✅  | ✅                 | ✅          | ✅        |
| Original Xbox | ✅  | ✅                 | ✅          | ✅        |
| Windows       | ✅  | ✅                 | ✅          | ✅        |
| macOS         | ✅  | ✅                 | ✅          | ✅        |
| Linux         | ✅  | ✅                 | ✅          | ✅        |
| Libretro      | ✅  | ✅                 | ✅          | ✅        |
| WASM          | ✅  | 🟡                 | ✅          | ❌        |

[^4]: Text-to-Speech can use either the official Scratch servers (if the
    platform supports it), or DECtalk, which runs locally but is not 100%
    accurate. Platforms marked with a 🟡 support DECtalk only, while those with
    a ✅ support both.

### Misc Notes

- **[Wii, Wii U, GameCube, Switch, PS4, Original Xbox]** The first controller
  connected will be the only one that will work.
- **[DS(i)]** Dual screen mode will not be supported.
- **[DS(i)]** Only WAV audio is supported at the moment.
- **[DS(i)/3DS]** ::sb touching color [#754D75]?:: and <!-- deno-fmt-ignore -->
  :sb color [#754D75] is touching [#754D75]?:: are unimplemented.
- **[Wii]** If you're using a PAL Wii, you must use 50Hz.
- **[3DS]** If a project has a bunch of large images, some may not load.
- **[3DS]** Some vector images will appear bigger than they should.
- **[PSP]** Images cannot be over 512x512.
- **[Vita]** Back touch will not be supported.
- **[Original Xbox]** UI and projects might fail to load graphical assets from
  time to time. Rebooting your Xbox should fix this.
- **[Original Xbox]** It is recommended to upgrade your hard drive to run at
  7200 RPM, or upgrade to an SSD.
- **[Original Xbox]** Not all projects will look correct upon launch. "Fuzzy"
  assets is a known quirk of the renderer, and will be addressed in future
  releases.
