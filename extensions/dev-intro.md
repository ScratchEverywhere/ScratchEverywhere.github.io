# Developer Intro to Custom Extensions

Custom extensions come in two forms: **Lua extensions** and **native
extensions**. Native extensions are more powerful as they have direct access to
the SE! source code, and are best used for complex blocks or those with strict
performance requirements. Lua extensions are better for simple blocks, as they
are easy to program.

## Lua Extensions

Lua extensions are broken into two parts: the Lua code itself and a metadata
JSON file. As an example, here's the `meta.json` for the JSON extension:

```json
{
  "$schema": "https://raw.githubusercontent.com/ScratchEverywhere/seec/refs/heads/main/schema.json",
  "core": false,
  "id": "skyhigh173JSON",
  "name": "JSON",
  "description": "Handle JSON strings and arrarys.",
  "permissions": []
}
```

The format of this file can be found in the schema file.

Compiling a Lua extension is done with
[seec](https://github.com/ScratchEverywhere/seec).

## Native Extensions

Native extensions require that you are able to compile SE! itself. In order for
a native extension to work on Scratch Everywhere!, it must be built on the
**same system**, using the **same compiler** and the **same arguments**, with
the **same version of Scratch Everywhere!**.
