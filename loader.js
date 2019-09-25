//* Imports
const { readdir } = require('fs');

//* Loaders (Based on https://anidiots.guide/first-bot/a-basic-command-handler)
// Themes
readdir('./resources/app/trophy/themes/', (err, files) => {
    if (err) return console.log('[Trophy]' + err);
    files.forEach(file => {
        if (!file.endsWith('.css')) return;
        document.head.insertAdjacentHTML('beforeend', `<link rel='stylesheet' href='./trophy/themes/${file.split('.')[0]}.css'/>`);
    });
}); 

// Plugins
readdir('./resources/app/trophy/plugins/', (err, files) => {
    if (err) return console.log('[Trophy]' + err);
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        document.body.insertAdjacentHTML('beforeend', `<script src='./trophy/plugins/${file.split('.')[0]}.js'></script>`);
    });
}); 