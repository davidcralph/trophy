# Trophy
Lightweight client mod for the Medal.tv desktop app. Only supports Windows as Medal haven't ported the desktop app!

## Requirements
``Node.js (Either LTS or Latest)``

``Git``

``Windows 7+``

``Medal Desktop App`

## Installation 
1. ``git clone https://github.com/ohlookitsderpy/Trophy``
2. ``cd Trophy``
3. ``npm i`` (or ``yarn``)
4. ``node index.js inject``
5. Start modding!

## Uninstallation
1. Enter Trophy directory.
2. ``node index.js uninject``
3. Remove Trophy directory if needed.

## Modding
All files are stored in ``C:\Users\<User>\AppData\Local\Medal\app-4.273.0\resources\app\trophy\``. JS plugins go in **/plugins/** and CSS themes go in **/themes/**. Right click the Medal tray app and click toggle developer tools to make it easier to develop!