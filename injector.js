const { join }                = require('path');
const { readFile, writeFile } = require('fs-cheerio');

(async() => {
    const path = join(process.env.LOCALAPPDATA, 'Medal'); // This line is based on Powercord's Windows injector, which can be found at https://github.com/powercord-org/powercord/blob/v2/injectors/win32.js (MIT LICENSE)
    let $ = await readFile(`${path}\\app-4.87.0\\resources\\app\\index.min.html`);
    $('head').append('<link rel="stylesheet" href="./style.css" type="text/css"/>');
    await writeFile(`${path}\\app-4.87.0\\resources\\app\\index.min.html`, $);
})();
