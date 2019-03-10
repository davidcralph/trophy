const injector = require('./injector.js');

if (process.argv[2] === 'inject') injector.inject();
else if (process.argv[2] === 'uninject') injector.uninject();
else {
    console.log(`Unknown argument "${process.argv[2]}", exiting`);
    process.exit(1);
}
