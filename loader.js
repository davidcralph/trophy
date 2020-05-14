//* Imports
const fs = require('fs');

//* Loaders
console.log('[Trophy] Injecting...');
// Themes
if (!fs.existsSync('./resources/app/trophy/themes')) console.log('[Trophy] Themes directory doesn\'t exist!');
fs.readdir('./resources/app/trophy/themes/', (err, files) => {
    if (err) return console.log('[Trophy]' + err);
    files.forEach(file => {
        if (!file.endsWith('.css')) return;
        document.head.insertAdjacentHTML('beforeend', `<link rel='stylesheet' href='./trophy/themes/${file.split('.')[0]}.css'/>`);
    });
}); 

// Plugins
if (!fs.existsSync('./resources/app/trophy/themes')) console.log('[Trophy] Plugins directory doesn\'t exist!');
fs.readdir('./resources/app/trophy/plugins/', (err, files) => {
    if (err) return console.log('[Trophy]' + err);
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        document.body.insertAdjacentHTML('beforeend', `<script src='./trophy/plugins/${file.split('.')[0]}.js'></script>`);
    });
}); 