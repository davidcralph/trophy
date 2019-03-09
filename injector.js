const { join }                = require('path');
const copyFileSync            = require('fs-copy-file-sync');
const { readFile, writeFile } = require('fs-cheerio');

(async() => {
    const path = join(process.env.LOCALAPPDATA, 'Medal'); // This line is based on Powercord's Windows injector, which can be found at https://github.com/powercord-org/powercord/blob/v2/injectors/win32.js (MIT LICENSE)
    const html = `${path}\\app-4.87.0\\resources\\app\\index.min.html`;
    copyFileSync(html, './backup-index.min.html');
    let $ = await readFile(html);
    $('head').append('<link rel="stylesheet" href="./style.css" type="text/css"/>');
    await writeFile(html, $);
})();
