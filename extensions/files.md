# File System

> [!NOTE]
> The file system API requires either the root or local file system permissions.

## Root Location

If the root file system permission is present the file system root will be
`sdmc:/` on console, `/` on Unix-like systems (Linux, macOS, BSD), and `C:\` on
Windows.

For the local file system permission the root location will be the
`se:/extension-data/<EXTENSION_ID>`.

If both are present then the root file system permission takes priority.

## Current Directory

If the root file system permission is present then the current directory will be
the root of the Scratch Everywhere! directory.

If the local file system permission is present then the current directory is
`se:/extension-data/<EXTENSION_ID>`.

If both are present then the local file system permission takes priority.

## `files.read(path: string)`

Reads the entire file at the inputed path into a string.

## `files.write(path: string, content: string)`

Overwrites the specified file's content with the provided content.

## `files.append(path: string, content: string)`

Appends the specified content the specified file.

## `files.mkdir(path: string)`

Creates a directory at the given path.

## `files.ls(path: string)`

Lists all files in a directory, including dot files.

## `files.mainDirectory`

> [!NOTE]
> This variable is only available with the root file system permission.

The path of the Scratch Everywhere! directory.
