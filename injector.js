const rimraf = require('rimraf');
const path = require('path');
const cheerio = require('cheerio');
const fs = require('fs');

const app  = `${path.join(process.env.LOCALAPPDATA, 'Medal')}\\app-4.273.0\\resources\\app`;

exports.inject = () => {
    // Create backup
    fs.copyFileSync(`${app}\\index.min.html`, './backup-index.min.html');
    // Create directories and copy loader
    fs.mkdirSync(`${app}\\trophy`);
    fs.mkdirSync(`${app}\\trophy\\themes`);
    fs.mkdirSync(`${app}\\trophy\\plugins`);
    fs.copyFileSync('./loader.js', `${app}\\trophy\\loader.js`);
    // Inject into the Medal HTML
    const file = fs.readFileSync(`${app}\\index.min.html`);
    let $ = cheerio.load(file);
    $('body').append('<script src=\'./trophy/loader.js\'></script>');
    writeFileSync(`${app}\\index.min.html`, $.html());
}

exports.uninject = () => {
    // Uninject everything and remove backup
    fs.copyFileSync('./backup-index.min.html', `${app}\\index.min.html`);
    fs.unlinkSync('./backup-index.min.html');
    rimraf.sync(`${app}\\trophy`);
}
