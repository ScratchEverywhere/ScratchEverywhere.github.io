# Building

In order to embed a Scratch project in the executable, you'll need to compile
the source code.

If you would like to change the name of the app or any other information you can
edit one of the Makefiles.

- **For the 3DS**, you need to edit `Makefile_3ds` and change `APP_TITLE`,
  `APP_DESCRIPTION` and `APP_AUTHOR` to whatever you please.
- **For the Wii U**, you need to edit `Makefile_wiiu` and change `APP_NAME`,
  `APP_SHORT_DESCRIPTION`, `APP_LONG_DESCRIPTION` and `APP_AUTHOR` to whatever
  you please.
- **For the Wii**, you need to edit `Makefile_wii` and change anything under
  `# Application Info` to whatever you please.
- **For the Vita**, you need to edit the properties under `# METADATA/CONFIG` to
  whatever you please. Do note however, if you're going to use custom LiveArea
  images, you must run them through `pngquant` (install with your package
  manager) with `--posterize` set to 4 first before packaging.

## Docker

The recommended way to compile Scratch Everywhere! is with Docker. To compile
with Docker all you need installed is Docker and Buildx.

- To compile for the **3DS**, run
  `docker build -f docker/Dockerfile.3ds --target exporter -o . .`.

- To compile for the **Wii U**, run
  `docker build -f docker/Dockerfile.wiiu --target exporter -o . .`.

- To compile for the **Wii**, run
  `docker build -f docker/Dockerfile.wii --target exporter -o . .`.

- To compile for the **GameCube**, run
  `docker build -f docker/Dockerfile.gamecube --target exporter -o . .`.

- To compile for the **Nintendo Switch** run
  `docker build -f docker/Dockerfile.switch --target exporter -o . .`.

- To compile for the **Vita**, run
  `docker build -f docker/Dockerfile.vita --target exporter -o . .`.

## Manual

If you are compiling with cloud variables, you will need to have DevkitPro's
SDKs, [Mist++](https://github.grady.link/mistpp), and a modified version of
libcurl (instructions in mistpp-packages repo) installed.

- **For the 3DS**, you will need the DevkitARM toolchain and libctru.
  - If you want to compile with audio support, you will also need a 3DS compiled
    version of SDL2 and SDL2_mixer. See the
    [Nightly Build commands](https://github.com/ScratchEverywhere/ScratchEverywhere/blob/main/.github/workflows/nightly-3ds.yml)
    for a reference on how to compile SDL2 3DS for yourself.
- **For the Wii U**, you will need the DevkitPPC toolchain, WUT, all SDL2-wiiu
  libraries, and [libromfs-wiiu.](https://github.com/yawut/libromfs-wiiu).
- **For the Wii**, you need the DevkitPPC toolchain, libogc, all SDL2-wii
  libraries, and [libromfs-ogc.](https://github.com/NateXS/libromfs-ogc).
- **For the GameCube**, you need the DevkitPPC toolchain, libogc, all
  SDL2-gamecube libraries, and
  [libromfs-ogc.](https://github.com/NateXS/libromfs-ogc).
- **For the Switch**, you need the DevkitA64 toolchain, libnx, and all
  SDL2-switch libraries.
- **For the Vita**, all you need is the [vitasdk](https://vitasdk.org)
  toolchain. It includes every SDL2 thing you might need.

> [!NOTE]
> DevkitPro's install instructions are available at:
> https://devkitpro.org/wiki/Getting_Started

Download the source code from the releases tab and unzip it.

Make a `romfs` folder inside the unzipped source code and put the Scratch
project inside of that.

- The Scratch project MUST be named `project.sb3`, all lowercase.
- For faster load times/less limitations, you can also unzip the sb3 project
  file and put the contents into a new folder called `project`.

Then you need to compile the projects into proper Homebrew packages.

- **For the 3DS**, you simply need to run `make`. Then copy the
  `Scratch-3DS.3dsx` file like you normally would.
- **For the Wii U**, you need to run `make PLATFORM=wiiu` and then copy the
  `build/wiiu/scratch-wiiu` folder into the `sdcard:/wiiu/apps` folder on your
  sd card.
- **For the Wii**, you need to run `make PLATFORM=wii package`, then find the
  zipped file in `build/wii/scratch-wii.zip`. Unzip it and put the `apps` folder
  inside the root of your Wii SD card.
- **For the GameCube**, you need to run `make PLATFORM=gamecube`, then find the
  `.dol` file at `build/gamecube/scratch-gamecube.dol`.
- **For the Switch**, you need to run `make PLATFORM=switch`, then find the
  `.nro` file at `build/switch/scratch-nx.nro`.
- **For the Vita**, run `make PLATFORM=vita`, then transfer the VPK at
  `build/vita/scratch-vita.vpk` over to your Vita.

## Compilation Flags

Compilation flags are used to select which features will be enabled in the
compiled version of Scratch Everywhere!. To use a compilation flag simply add it
to the end of the make command (e.g. `make ENABLE_BUBBLES=0`).

- `ENABLE_LOADSCREEN` (default: `0` on Wii and Gamecube, `1` otherwise): If set
  to `1`, the loading screen is enabled, if set to `0` the screen is simply
  black during that time. This option crashes on Wii and GameCube when trying to
  load large projects.
- `ENABLE_AUDIO` (default: `1`): If set to `1`, Audio will be enabled. If set to
  `0`, it will be disabled.
- `ENABLE_CLOUDVARS` (default: `0`): If set to `1`, cloud variable support is
  enabled, if set to `0` cloud variables are treated like normal variables. If
  your project doesn't use cloud variables, it is recommended to leave this
  turned off. If you run into errors while building try turning this off and see
  if that fixes the errors.
- **[Old 3DS]** `RAM_AMOUNT` (default: `72`): the amount of RAM, in megabytes,
  the old 3DS should be using. Can be set to `32`, `64`, `72`, `80`, or `96`.
