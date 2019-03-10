const { join }                                                   = require('path');
const { load }                                                   = require('cheerio');
const { unlinkSync, copyFileSync, writeFileSync, readFileSync }  = require('fs');

const path = join(process.env.LOCALAPPDATA, 'Medal'); // This line is based on Powercord's Windows injector, which can be found at https://github.com/powercord-org/powercord/blob/v2/injectors/win32.js (MIT LICENSE)
const html = `${path}\\app-4.87.0\\resources\\app\\index.min.html`;

exports.inject = async () => {
    copyFileSync(html, './backup-index.min.html');
    const file = readFileSync(html);
    let $ = load(file);
    $('head').append('<link rel="stylesheet" href="./style.css" type="text/css"/>');
    await writeFileSync(html, $.html());
}

exports.uninject = () => {
    copyFileSync('./backup-index.min.html', html);
    unlinkSync('./backup-index.min.html');
}
