#!/usr/bin/env node
const checkBuild = require('./lib/check')
const commands = process.argv.slice(2);
const { nodb } = require('./lib/setups')
const { nodb_content } = require('./lib/fileContent')

const cmd = commands[0];
switch (cmd) {
    case 'nodb': {
        checkBuild(nodb, nodb_content)
        break;
    }

    case 'manualdb': {
        console.log('This is an example command');
        break;
    }

    case 'sequelize': {
        console.log('This is an example command');
        break;
    }

    default: {
        console.log(`
Usage:   buildcheck <command>
----------------------------------
Commands:


            `);
        break;
    }
}
