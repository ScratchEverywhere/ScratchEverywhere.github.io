# Limitations

As this is in a very work in progress state, you will encounter many bugs,
crashes, and things that will just not work.

**List of Known Limitations:**

- Text will not show up on vector images containing it.
- Extensions (e.g. pen and music extensions) are not yet supported.
- Some blocks may lead to crashing/unintended behavior (Please open an issue if
  you know of a block that's causing problems).
- Performance is poor when using many (~30+) clones (memory management issue).
- **[Wii, Switch, Vita]** Cloud Variables aren't currently supported, but likely
  will be in the future.
- **[Wii, Wii U, GameCube, Switch]** The first controller connected will be the
  only one that will work.
- **[Wii]** If you're using a PAL Wii, you must use 50Hz.
- **[GameCube]** Cloud Variables will not be supported.
- **[GameCube]** The GameCube has very little memory, so try to keep projects
  small.
- **[3DS]** Performace is poor when lots of blocks are running at once.
- **[3DS]** If you have a bunch of large images, some may not load.
- **[3DS]** Some vector images will appear bigger than they should.
- **[Vita]** Back touch will not be supported.

## Unimplemented blocks

<!-- deno-fmt-ignore -->
- ::sb say ()::, ::sb think ()::, ::sb say () for () seconds::, and ::sb think () for () seconds::
- ::sb change [ v] effect by ():: and ::sb set [ v] effect to ():: (except for `Ghost` and `Brightness`)
- ::sb when [loudness v] > ()::
- ::sb touching color [#754D75]?:: and ::sb color [#754D75] is touching [#754D75]?::
- ::sb loudness::

## Differently Implemented Blocks

- The ::sb touching ( v):: block uses simpler box collision, which may lead to
  projects working incorrectly.
