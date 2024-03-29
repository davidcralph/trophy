# Trophy
Lightweight client mod for the [Medal.tv](https://medal.tv) desktop app. Only supports Windows as Medal haven't ported the desktop app!

## Requirements
``Node.js``

``Git (Optional)``

``Windows 7+``

``Medal Desktop App``

## Installation 
1. ``git clone https://github.com/davidcralph/Trophy`` (If you don't have Git just go to **Clone or download** and click **Download ZIP**)
2. ``cd Trophy``
3. ``npm i`` (or ``yarn``)
4. ``npm inject`` (or ``node index.js inject``)
5. Start modding!

## Uninstallation
1. Enter Trophy directory
2. ``npm uninject`` (or ``node index.js uninject``)
3. Remove Trophy directory if needed

## Updating
(With Git)
1. Enter Trophy directory.
2. ``git pull``
3. ``npm i`` (or ``yarn``)
4. ``npm uninject`` & ``npm inject`` (or ``node index.js uninject`` & ``node index.js inject``)

(Without Git)
1. Download Trophy folder and replace over old one
3. Repeat steps 3-4

## Modding
All files are stored in ``C:\Users\<User>\AppData\Local\Medal\app-4.<Version>.0\resources\app\trophy\``. JS plugins go in **/plugins/** and CSS themes go in **/themes/**. Right click the Medal tray app and click **Toggle Developer Tools** to make it easier to develop!

## License
[MIT](LICENSE)
