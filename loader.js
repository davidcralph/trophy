const { readdir } = require('fs');

// Load themes
readdir('./resources/app/trophy/themes/', (err, files) => { // Start https://anidiots.guide/first-bot/a-basic-command-handler (MODIFIED)
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith('.css')) return;
        let name = file.split('.')[0];
        $('head').append(`<link rel='stylesheet' href='./trophy/themes/${name}.css'/>`);
    });
}); // End https://anidiots.guide/first-bot/a-basic-command-handler (MODIFIED)

// Load plugins
readdir('./resources/app/trophy/plugins/', (err, files) => { // Start https://anidiots.guide/first-bot/a-basic-command-handler (MODIFIED)
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let name = file.split('.')[0];
        $('body').append(`<script src='./trophy/plugins/${name}.js'></script>`);
    });
}); // End https://anidiots.guide/first-bot/a-basic-command-handler (MODIFIED)
