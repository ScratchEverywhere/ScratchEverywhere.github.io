# Building

In order to embed a Scratch project in the executable, you'll need to compile
the source code.

## Docker

The recommended way to compile Scratch Everywhere! is with Docker. It does most
of the heavy lifting for you! Look at our [Building with Docker](/docker)
section for more info.

If you would rather compile manually, continue reading for how to do it.

> [!NOTE]
> Due to how complicated the environment for building the PS4 version of SE! is,
> we do not provide instructions for compiling it manually. Please use Docker
> instead, it will save you many headaches.

## Change App Information

If you would like to change the name of the app or any other information, you
can do so with the following compile flags (see the section below):

- `SE_APP_NAME`: The name of the app.
- `SE_APP_DESCRIPTION`: The description of the app.
- `SE_APP_AUTHOR`: The author of the app.
- `SE_APP_VERSION`: The version of the app.
- `SE_APP_TITLEID`: The title ID of the app. **Only applies to Vita and PS4.**

Images for the various banners and icons can be found in `gfx/`.

> [!NOTE]
> If you're going to use custom LiveArea images on Vita, you must run them
> through pngquant (install with your package manager) with --posterize set to 4
> first before packaging.

## Dependencies

If you are compiling with cloud variables, you will need to have DevkitPro's
SDKs and [Mist++](https://github.grady.link/mistpp) installed.

- **For PC**, the only thing you need is `cmake`, as all other dependencies will
  be automatically downloaded. However, if you'd like to manually install them,
  you'll need `SDL2`, `SDL2_ttf`, `SDL2_gfx`, `lunasvg`, `stb_image` (`stb`),
  and `libcurl` (`curl`) from your package manager.

  > [!NOTE]
  > On Arch Linux, `lunasvg` is not in the official package repos. You'll need
  > to use the AUR or let SE! automatically download and build it from source.
- **For the 3DS**, you will need the DevkitARM toolchain, and libctru.
  - If you want to compile with audio support, you will also need a 3DS compiled
    version of SDL3. See the
    [Nightly Build commands](https://github.com/ScratchEverywhere/ScratchEverywhere/blob/main/.github/workflows/nightly-3ds.yml)
    for a reference on how to compile SDL3 3DS for yourself.
- **For the Wii U**, you will need the DevkitPPC toolchain, WUT, and the
  following SDL2-wiiu libraries:
  - SDL2
  - sdl2_ttf
- **For the Wii**, you need the DevkitPPC toolchain, libogc, and the following
  SDL2-wii libraries:
  - SDL2
  - sdl2_ttf
- **For the GameCube**, you need the DevkitPPC toolchain, libogc, and the
  following SDL2-gamecube libraries:
  - SDL2
  - sdl2_ttf
- **For the Switch**, you need the DevkitA64 toolchain, libnx, and the following
  SDL2-switch libraries:
  - SDL2
  - sdl2_ttf
- **For the Vita**, all you need is the [vitasdk](https://vitasdk.org)
  toolchain. It includes every SDL2 thing you might need.
- **For the PSP**, all you need is the [PSPSDK](https://pspdev.github.io)
  toolchain. It includes every SDL2 thing you might need.
- **For webOS**, all you need is the webosbrew Native SDK installed to your home
  directory and ares-cli.

> [!NOTE]
> DevkitPro's install instructions are available at:
> https://devkitpro.org/wiki/Getting_Started

Download the source code from the
[Releases tab](https://github.com/ScratchEverywhere/ScratchEverywhere/releases)
and unzip it.

## Embedding a Scratch Project (optional)

Make a `romfs` folder inside the unzipped source code and put the Scratch
project inside of that.

- The Scratch project **MUST** be named `project.sb3`, all lowercase.
- For faster load times/less limitations, you can also unzip the sb3 project
  file and put the contents into a new folder called `project`.

## Compile Commands

Then you need to compile the projects into proper Homebrew packages. This is
done with `cmake`, though the exact commands differ between platforms:

- **For Windows**, you need to run
  `cmake -B build-windows && cmake --build build-windows`.
- **For macOS**, you need to run
  `cmake -B build-macOS && cmake --build build-macOS`.
- **For Linux**, you need to run
  `cmake -B build-linux && cmake --build build-linux`.
- **For the 3DS**, you need to run
  `cmake -B build-3ds && cmake --build build-3ds`.
- **For the Wii U**, you need to run
  `$DEVKITPRO/portlibs/wiiu/bin/powerpc-eabi-cmake -B build-wiiu && cmake --build build-wiiu && cmake --build build-wiiu --target package_wiiu`.
- **For the Wii**, you need to run
  `$DEVKITPRO/portlibs/wii/bin/powerpc-eabi-cmake -B build-wii && cmake --build build-wii`.
- **For the GameCube**, you need to run
  `$DEVKITPRO/libogc2/gamecube/bin/powerpc-eabi-cmake -B build-gamecube && cmake --build build-gamecube`.
- **For the Switch**, you need to run
  `cmake -DCMAKE_TOOLCHAIN_FILE=$DEVKITPRO/cmake/Switch.cmake -B build/switch && cmake --build build/switch`.
- **For the Vita**, you need to run
  `cmake -DCMAKE_TOOLCHAIN_FILE=$VITASDK/share/vita.toolchain.cmake -B build/vita && cmake --build build/vita`.
- **For the PSP**, run
  `psp-cmake -B build/psp -S . -DSE_SYSTEM=ON -DSE_CLOUDVARS=OFF && make -C build/psp`.
- **For webOS**, you need to run
  `cmake -B build/webos -S . -DCMAKE_TOOLCHAIN_FILE="~/arm-webos-linux-gnueabi_sdk-buildroot/share/buildroot/toolchainfile.cmake" -DSE_CLOUDVARS=OFF -DWEBOS=ON -DSE_RENDERER=sdl2 && make -C build/webos all package`.
  > [!NOTE]
  > webOS **requires** the `WEBOS=ON` flag. It will not compile without it.

## Final Packages

The final packages are found in the `build-<platform>` folder and can be
installed in the same way as the official releases (see the
[installation guide](/install.md)).

## Compilation Flags

Compilation flags are used to select which features will be enabled in the
compiled version of Scratch Everywhere!. To use a compilation flag simply add it
to the end of the `cmake` configure command (e.g.
`cmake -B build -DSE_LOADSCREEN=OFF`).

### `SE_APP_AUTHOR`

The author or developer of the outputted app. Defaults to
`"Scratch Everywhere! Contributors"`.

### `SE_APP_DESCRIPTION`

The description of the outputted app. Defaults to
`"Play Scratch games on anything!"`.

### `SE_APP_TITLEID`

The title ID of the outputted app (**only applies to Vita and PS4**). Defaults
to `"NTXS00053"` on Vita and `"NTXS10053"` on PS4.

### `SE_APP_VERSION`

The version of the outputted app. Defaults to the current SE! version.

### `SE_APP_NAME`

The name of the outputted app. Defaults to `"Scratch Everywhere!"`.

### `SE_AUDIO`

Whether or not audio is enabled. Defaults to `ON`.

### `SE_AUDIO_ENGINE`

The audio backend to be used. Can be one of `sdl2`, `sdl1`, `sdl3`, `nds`, or
`headless`.

#### Supported Audio Engines

| Platform | `sdl1` | `sdl2` | `sdl3` | `nds` | `headless` |
| -------- | ------ | ------ | ------ | ----- | ---------- |
| PC       | ✅     | ✅     | ✅     | ❌    | ✅         |
| 3DS      | ❌     | ✅     | ✅     | ❌    | ✅         |
| DS       | ❌     | ❌     | ❌     | ✅    | ✅         |
| Wii U    | ❌     | ✅     | ❌     | ❌    | ✅         |
| Wii      | ✅     | ✅     | ❌     | ❌    | ✅         |
| GameCube | ❌     | ✅     | ❌     | ❌    | ✅         |
| Switch   | ❌     | ✅     | ❌     | ❌    | ✅         |
| Vita     | ❌     | ✅     | ❌     | ❌    | ✅         |
| PSP      | ❌     | ✅     | ❌     | ❌    | ✅         |
| PS4      | ❌     | ✅     | ❌     | ❌    | ✅         |
| webOS    | ❌     | ✅     | ❌     | ❌    | ✅         |

The default value depends on the renderer being used (see below):

- `sdl1`: `sdl1`
- `sdl2`: `sdl2`
- `sdl3`: `sdl3`
- `opengl`: `sdl2`
- `citro2d`: `sdl3`
- `gl2d`: `nds`
- `headless`: `headless`

### `SE_BANNERTOOL`

The path to the `bannertool` executable. **Only relevant on 3DS.**

### `SE_BITMAP`

Whether or not bitmap images are supported. Defaults to `ON`.

### `SE_CACHING`

Whether or not to cache pointers in `Block`, `Monitor`, and `ParsedInput`
structs. This improves performance, but causes slightly longer load times and
more RAM usage. Defaults to `ON`.

### `SE_CLOUDVARS`

Whether or not cloud variables are supported. If set to `OFF`, cloud variables
are treated like normal variables.

If your project doesn't use cloud variables, it is recommended to leave this
turned off. If you run into errors while building, try turning this off and see
if it fixes the errors.

Defaults to `ON` on all supported platforms.

### `SE_DEPS`

Determines which mode the dependency loading system will use. Can be one of the
following:

- `source`: Dependencies are forced to be built from source.
- `system`: Dependencies are forced to be loaded from the system.
- `fallback`: Dependencies are sourced from the system if possible, otherwise
  they are built from source.

The allowed modes depend on the platform you are building for:

#### Supported Dependency Modes

| Platform | `source` | `system` | `fallback` |
| -------- | -------- | -------- | ---------- |
| PC       | ✅       | ✅       | ✅         |
| 3DS      | ❌       | ✅       | ✅         |
| DS       | ❌       | ✅       | ✅         |
| Wii U    | ❌       | ✅       | ✅         |
| Wii      | ✅       | ✅       | ✅         |
| GameCube | ❌       | ✅       | ✅         |
| Switch   | ❌       | ✅       | ✅         |
| Vita     | ❌       | ✅       | ✅         |
| PSP      | ❌       | ✅       | ✅         |
| PS4      | ❌       | ✅       | ✅         |
| webOS    | ❌       | ❌       | ✅         |

### `SE_DOWNLOAD`

Whether or not to allow downloading files. Currently, this is only used for
Text-to-Speech blocks. Defaults to `ON` on all supported platforms.

### `SE_INSPECTOR`

Whether or not the runtime inspector is enabled. Defaults to `ON`.

### `SE_LOADSCREEN`

Whether or not to show the leading screen while loading a project. If set to
`OFF`, the screen will simply be black while loading.

This option crashes on Wii and GameCube when trying to load large projects.

Defaults to `ON`.

### `SE_MAKEROM`

The path to the `makerom` executable. **Only relevant on 3DS.**

### `SE_MENU`

Whether or not the main menu will appear. Defaults to `ON`.

### `SE_OUTPUT_NAME`

The file name given to the final executable file. Defaults to
`scratch-everywhere`.

### `SE_RAM`

The amount of RAM that will be available to SE!, in MB. **Only on 3DS.**
Defaults to `72`.

### `SE_RENDERER`

The renderer backend to be used. Can be one of `sdl2`, `sdl3`, `opengl`,
`citro2d`, `gl2d`, or `headless`.

#### Supported Renderers

| Platform | `sdl1` | `sdl2` | `sdl3` | `opengl` | `citro2d` | `gl2d` | `headless` |
| -------- | ------ | ------ | ------ | -------- | --------- | ------ | ---------- |
| PC       | ✅     | ✅     | ✅     | ✅       | ❌        | ❌     | ✅         |
| 3DS      | ❌     | ❌     | ❌     | ❌       | ✅        | ❌     | ✅         |
| DS       | ❌     | ❌     | ❌     | ❌       | ❌        | ✅     | ✅         |
| Wii U    | ❌     | ✅     | ❌     | ❌       | ❌        | ❌     | ✅         |
| Wii      | ✅     | ✅     | ❌     | ❌       | ❌        | ❌     | ✅         |
| GameCube | ❌     | ✅     | ❌     | ❌       | ❌        | ❌     | ✅         |
| Switch   | ❌     | ✅     | ❌     | ❌       | ❌        | ❌     | ✅         |
| Vita     | ❌     | ✅     | ❌     | ❌       | ❌        | ❌     | ✅         |
| PSP      | ❌     | ✅     | ❌     | ❌       | ❌        | ❌     | ✅         |
| PS4      | ❌     | ✅     | ❌     | ❌       | ❌        | ❌     | ✅         |
| webOS    | ❌     | ✅     | ❌     | ❌       | ❌        | ❌     | ✅         |

Defaults to `citro2d` on 3DS, `gl2d` on NDS, and `sdl2` on everything else.

### `SE_SVG`

Determines whether or not vector (SVG) images are supported. Defaults to `ON`.

### `SE_WINDOWING`

The windowing backend to be used. Valid options are the same as `SE_RENDERER`
with some changes:

- `opengl` -> `glfw`
- `citro2d` -> `3ds`
- `gl2d` -> `nds`

#### Supported Windowing Backends

| Renderer   | `sdl1` | `sdl2` | `sdl3` | `glfw` | `3ds` | `nds` | `headless` |
| ---------- | ------ | ------ | ------ | ------ | ----- | ----- | ---------- |
| `sdl1`     | ✅     | ❌     | ❌     | ❌     | ❌    | ❌    | ❌         |
| `sdl2`     | ❌     | ✅     | ❌     | ❌     | ❌    | ❌    | ❌         |
| `sdl3`     | ❌     | ❌     | ✅     | ❌     | ❌    | ❌    | ❌         |
| `opengl`   | ✅     | ✅     | ✅     | ✅     | ❌    | ❌    | ❌         |
| `citro2d`  | ❌     | ❌     | ❌     | ❌     | ✅    | ❌    | ❌         |
| `gl2d`     | ❌     | ❌     | ❌     | ❌     | ❌    | ✅    | ❌         |
| `headless` | ❌     | ❌     | ❌     | ❌     | ❌    | ❌    | ✅         |
