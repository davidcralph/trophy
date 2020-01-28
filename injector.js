//* Imports
const rimraf = require('rimraf');
const path = require('path');
const cheerio = require('cheerio');
const fs = require('fs');

const app = `${path.join(process.env.LOCALAPPDATA, 'Medal')}\\app-4.439.0\\resources\\app`;

module.exports.inject = () => {
    // Create backup
    fs.copyFileSync(`${app}\\index.min.html`, './backup-index.min.html');
    // Create directories and copy loader
    fs.mkdirSync(`${app}\\trophy`);
    fs.mkdirSync(`${app}\\trophy\\themes`);
    fs.mkdirSync(`${app}\\trophy\\plugins`);
    fs.copyFileSync('./loader.js', `${app}\\trophy\\loader.js`);
    // Inject into the Medal HTML
    let $ = cheerio.load(fs.readFileSync(`${app}\\index.min.html`));
    $('body').append('<script src=\'./trophy/loader.js\'></script>');
    fs.writeFileSync(`${app}\\index.min.html`, $.html());
    console.log('Successfully injected!');
}

module.exports.uninject = () => {
    // Uninject everything and remove backup
    fs.copyFileSync('./backup-index.min.html', `${app}\\index.min.html`);
    fs.unlinkSync('./backup-index.min.html');
    rimraf.sync(`${app}\\trophy`);
    console.log('Successfully uninjected!');
}
