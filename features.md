# Unique Features

## 3DS Screen modes

- Any scratch project with an unmodified resolution setting will be displayed on
  the top screen only.
- If using a modded Scratch client like TurboWarp, you can go into the projects'
  Advanced Settings and change the resolution.
  - Setting it to `400x480` will enable both the top and bottom screen.
  - Setting it to `320x240` will enable only the bottom screen.
  - Setting it to `400x240` will make the project perfectly fit to the top
    screen.
  - NOTE: make sure to click `Store Settings In Project` on TurboWarp to
    properly apply the settings.

## Wii U Screen Modes

- Currently, projects display exactly the same on both the TV and the GamePad,
  and there's no way to change screen modes.

## Audio

- MP3, Ogg Vorbis, and WAV audio formats are supported.
- A sound will take time to load if playing it for the first time.
  - Known Bug: On 3DS, if a sound has to load while other sounds are playing,
    all sounds will stop playing until the sound is loaded.
- If you play any sound from the "Stage", the sound will play as a "Streamed
  Sound" and will not need to load.
- Only one "Streamed Sound" can be playing at a time, so this is good for things
  like background music.
- [Wii, GameCube, Vita] "Streamed Sound" is not supported. Any sounds in "Stage"
  will load and play like a normal sound.
- [3DS, Wii, GameCube] Sounds may fail to load if the length of the sound is too
  long, or if there's too many sounds loaded at once.

## Framerate

- When using a modded Scratch client like TurboWarp, you can enable the
  `60 FPS (Custom FPS)` advanced option, and change the FPS to any value.

## Differently Implemented Blocks

- The ::sb Username:: block returns the 3DS's nickname, and the Wii U's current
  Mii name.
- The ::sb Stop [All v]:: block brings you back to the project menu.
