const { join }                                                              = require('path');
const { load }                                                              = require('cheerio');
const rimraf                                                                = require('rimraf');
const { unlinkSync, copyFileSync, writeFileSync, readFileSync, mkdirSync }  = require('fs');

const path = join(process.env.LOCALAPPDATA, 'Medal'); // This line is based on Powercord's Windows injector, which can be found at https://github.com/powercord-org/powercord/blob/v2/injectors/win32.js (MIT LICENSE)
const app = `${path}\\app-4.87.0\\resources\\app`;

exports.inject = async () => {
    // Create backup
    copyFileSync(`${app}\\index.min.html`, './backup-index.min.html');
    // Create directories and copy loader
    mkdirSync(`${app}\\trophy`);
    mkdirSync(`${app}\\trophy\\themes`);
    mkdirSync(`${app}\\trophy\\plugins`);
    copyFileSync('./jquery.slim.min.js', `${app}\\trophy\\jquery.slim.min.js`);
    copyFileSync('./loader.js', `${app}\\trophy\\loader.js`);
    // Inject into the Medal HTML
    const file = readFileSync(`${app}\\index.min.html`);
    let $ = load(file);
    $('body').append('<script src="./trophy/jquery.slim.min.js"></script>');
    $('body').append('<script src="./trophy/loader.js"></script>');
    await writeFileSync(`${app}\\index.min.html`, $.html());
}

exports.uninject = () => {
    // Uninject everything and remove backup
    copyFileSync('./backup-index.min.html', `${app}\\index.min.html`);
    unlinkSync('./backup-index.min.html');
    rimraf.sync(`${app}\\trophy`);
}
