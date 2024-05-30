const path = require('path');
const rootDir = path.dirname(require.main.filename);

module.exports = {
    nodb: [
        {
            path: path.join(rootDir, 'app.js'),
            failMsg: 'file      : app.js'
        },
        {
            path: path.join(rootDir, 'views'),
            failMsg: 'directory : views'
        },
        {
            path: path.join(rootDir, 'views', 'view.js'),
            failMsg: 'file      : view.js'
        },
        {
            path: path.join(rootDir, 'controllers'),
            failMsg: 'directory : controllers'
        },
        {
            path: path.join(rootDir, 'controllers', 'controller.js'),
            failMsg: 'file      : controller.js'
        },
        {
            path: path.join(rootDir, 'models'),
            failMsg: 'directory : models'
        },
        {
            path: path.join(rootDir, 'models', 'model.js'),
            failMsg: 'file      : model.js'
        },
        {
            path: path.join(rootDir, 'models', 'class.js'),
            failMsg: 'file      : class.js'
        },
    ],

    manual_db: [
        
    ],

    sequelize: [

    ]
}
