const path = require('path');
const rootDir = path.dirname(require.main.filename);

module.exports = {
    nodb_content: [
        {
            path: path.join(rootDir, 'app.js'),
            snippets: "./controllers/controller.js",
            failMsg: "App.js      : const Controller = require('./controllers/controller.js')"
        },
        {
            path: path.join(rootDir, 'app.js'),
            snippets: "process.argv.slice(2)",
            failMsg: "App.js      : const commands = process.argv.slice(2)"
        },
        {
            path: path.join(rootDir, 'app.js'),
            snippets: "[0]",
            failMsg: "App.js      : const cmd = commands[0]"
        },
    ],

    manual_db_content: [
        
    ],

    sequelize_content: [

    ]
}
