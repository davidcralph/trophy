const rimraf = require('rimraf');
const path = require('path');
const cheerio = require('cheerio');
const fs = require('fs');

// Get path
let appFolder;
const medalFolder = fs.readdirSync(`${path.join(process.env.LOCALAPPDATA, 'Medal')}`);
for (let i = 0; i < medalFolder.length; i++) { 
    if (medalFolder[i].startsWith('app-')) {
        appFolder = medalFolder[i];
        break;
    }
}

const app = `${path.join(process.env.LOCALAPPDATA, 'Medal')}\\${appFolder}\\resources\\app`;

module.exports.inject = () => {
    // Create directories and copy loader
    if (fs.existsSync(`${app}\\trophy`)) {
        return console.log('Looks like you already have a Trophy installation! Please remove it and try again.');
    }

    fs.mkdirSync(`${app}\\trophy\\themes`, { recursive: true });
    fs.mkdirSync(`${app}\\trophy\\plugins`);
    fs.copyFileSync('./loader.js', `${app}\\trophy\\loader.js`);
    // Create backup of Medal HTML
    fs.copyFileSync(`${app}\\index.min.html`, './backup-index.min.html');
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
