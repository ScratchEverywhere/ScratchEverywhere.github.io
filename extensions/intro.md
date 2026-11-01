# Introduction to Custom Extensions

> [!WARNING]
> Custom extensions are a **work-in-progress**.

**Custom extensions** are a way to add new blocks and functionality to the
Scratch Everywhere! runtime that can be used in your projects.

Not all platforms support custom extensions. See the
[limitations page](/limitations.md#platform-specific) for a list of platforms
that do.

Custom extensions come in two forms: **Lua extensions** and **native
extensions**. Native extensions are more powerful, while Lua extensions are
simpler to use.

## Installation

### Lua Extensions

Lua extensions must be compiled before they are installed. Use
[seec](https://github.com/ScratchEverywhere/seec) to compile them:

```sh
seec -i /path/to/extension/main.lua -m /path/to/extension/meta.json -o /path/to/output/extension.see
```

Alternatively, to compile all of the available Lua extensions, use
`bun build.ts` in the root directory of the Lua extension repository:

```sh
git clone https://github.com/ScratchEverywhere/lua-extensions
cd lua-extensions/
bun build.ts
```

The resulting `.see` files can be found in the `bin` folder.

Place the `.see` files in your Scratch Everywhere! folder
(`scratch-everywhere/extensions`) and they will be automatically loaded when a
project uses them!
