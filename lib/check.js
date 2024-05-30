const fs = require('fs').promises;

async function checkBuild(setup, content) {
    const msg = []
    const fileMsg = []

    const checkPath = async ({ path, failMsg }) => {
        try {
            await fs.access(path);
        } catch (error) {
            msg.push(failMsg);
        }
    };

    const checkFileContent = async ({ path, snippet, failMsg }) => {
        try {
            let fileContent = await fs.readFile(path, 'utf-8')
            if (!fileContent.includes(snippet)) {
                fileMsg.push(failMsg);
            }
        } catch (error) {
            console.log(`FILE DOES NOT EXIST: ${path}`);
        }
    };

    for await (const item of setup) {
        await checkPath(item);
    }

    for await (const item of content) {
        await checkFileContent(item);
    }

    if (msg.length > 0) {
        console.log(`
----------------
ITEMS NOT FOUND:
        `);
        msg.forEach(el => {
            console.log(el);
        });
    } else {
        console.log("All items and snippets found successfully.");
    }

    if (fileMsg.length > 0) {
        console.log(`
----------------
CODES NOT FOUND:
        `);
        fileMsg.forEach(el => {
            console.log(el);
        })
    }
}
module.exports = checkBuild