# Unique Features

## 3DS Screen modes

- Any project with an unmodified resolution setting will be displayed on the top
  screen only.
- If using a modded Scratch client like TurboWarp, you can go into the project's
  Advanced Settings and change the resolution.
  - Setting it to `400x480` will enable both the top and bottom screen.
  - Setting it to `320x240` will enable only the bottom screen.
  - Setting it to `400x240` will make the project perfectly fit to the top
    screen.
  > [!NOTE]
  > Make sure to click `Store Settings In Project` on TurboWarp to properly
  > apply the settings.

## Differently Implemented Blocks

- The ::sb username:: block returns the username of the device.
  - The username differs between platforms, but generally uses the name of the
    currently active user (or the console's name if the platform does not have a
    user system).
- The ::sb stop [all v]:: block brings you back to the project menu.
- The ::sb touching [ v]:: block has two different modes:
  - `Accurate`: The standard behavior that matches Scratch.
  - `Fast`: Uses (non-rotated!) rectangles for collision.
  - You can switch between these with the Project Settings menu (see the
    [settings page](/settings)).

## Special Custom Blocks

Like TurboWarp, we have special custom blocks that only work on SE! You can find
a project containing and explaining them here:
https://scratchbox.dev/project/K26OtTN2WDJ9

## Project Settings

Some settings related to the runtime can be changed on a per-project basis. See
the [settings page](/settings).
