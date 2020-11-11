# stretch-reminder

A simple extension to remind you developers to stretch once in a while during coding sessions. Gotta keep that sweet posture going good.

## Features

When you boot up VSCode, this extension will start a 30 minutes (by default) timer, visible in the status bar. Once this timer expires, a modal will pop, reminding you to stretch a bit. If you don't want to right now, you can snooze the modal and add 5 minutes (by default) to the timer. Or you can stretch and then restart a new timer using the `Restart Timer` button or by just closing closing the modal.

## Extension Settings

This extension has the following settings:

* `stretchReminder.intervalBetweenStretch`: Set the interval between stretching sessions (in minutes). Default is 30 minutes.
* `stretchReminder.snooze`: Set the value of the snooze (in minutes). Default is 5 minutes.

## Roadmap

* Add a way to configure some less intrusive alerts (notifications instead of modal)
* Add commands to pause/restart the timer from the command palette
* Any cool ideas you want to suggest

Icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/)

