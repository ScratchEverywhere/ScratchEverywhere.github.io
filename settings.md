# Settings

Scratch Everywhere! has several options for configuring the behavior of the
runtime.

## Project Settings

These settings can be changed on a per-project basis.

### Change Controls

Allows you to change the mapping of buttons to key presses in the project.

### Unpack Project

Allows a project to be unzipped.

Unpacked projects allow the project and its assets to exist outside of RAM,
while still increasing performance. They do take up slightly more space, and
they must be unpacked again if the original project file changes.

### Bottom Screen

Whether to show the project on the bottom screen instead of the top.

**Exclusive to 3DS/DS.** Disabled by default.

### Pen Mode

Determines whether the pen has rounded edges or flat edges. Rounded edges are
more accurate, but cause a significant performance hit.

- `Fast`: The pen has flat edges.
- `Accurate`: The pen has round edges.

Defaults to `Fast`.

### Collision Mode

Determines the behavior of the ::sb touching [ v]:: block.

- `Accurate`: The standard behavior that matches Scratch. Collisions are
  pixel-perfect, but are slower.
- `Fast`: Collisions are determined by the bounding box (edges) of the sprite's
  costume. Increases performance at the cost of potentially breaking projects
  that use it.

Defaults to `Accurate`.

### Show FPS

Whether or not to display FPS info when running a project. Disabled by default.

### Keep Project in RAM

Whether or not to store the project in RAM. This can boost performance when
loading a new costume or sound, but may cause problems on lower-end platforms.
Enabled by default on all platforms except for DS, GameCube, and PSP.

### Warp Timer

If this is enabled, scripts will check if they've been running for a long time
(500 ms), and run at a low framerate instead of getting stuck until the loop
finishes.

This can fix crashes/freezes related to infinite loops, but it may also cause a
performance impact. It is enabled by default.

## Global Settings

These settings can be found on the main menu. They apply to all projects.

### Username

Whether or not to replace the default username (your user/device name) with a
custom one when using the ::sb username:: block.

#### Name

The custom username to be displayed.

### Custom Path

Allows changing the path where Scratch Everywhere! looks for project files and
stores settings. This is usually a path relative to the root of the default
storage device (such as the console's SD card).

#### Change Path

Change the path that Scratch Everywhere! uses.

### Menu Music

Whether or not to play music while in the main menu. Requires a restart to take
effect. Enabled by default.
