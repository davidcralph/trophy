const { readdir } = require('fs');

// Load themes
readdir('./resources/app/trophy/themes/', (err, files) => { // Start https://anidiots.guide/first-bot/a-basic-command-handler (MODIFIED)
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith('.css')) return;
        document.head.insertAdjacentHTML('beforeend', `<link rel='stylesheet' href='./trophy/themes/${file.split('.')[0]}.css'/>`);
    });
}); // End https://anidiots.guide/first-bot/a-basic-command-handler (MODIFIED)

// Load plugins
readdir('./resources/app/trophy/plugins/', (err, files) => { // Start https://anidiots.guide/first-bot/a-basic-command-handler (MODIFIED)
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        document.body.insertAdjacentHTML('beforeend', `<script src='./trophy/plugins/${file.split('.')[0]}.js'></script>`);
    });
}); // End https://anidiots.guide/first-bot/a-basic-command-handler (MODIFIED)
