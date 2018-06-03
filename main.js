'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
    throw err;
});

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const appName = process.argv[2];
const appParentDir = process.cwd();
const appPath = path.join(appParentDir, appName);

// Copy the files for the user
const templatePath = path.join(__dirname, 'assets_system/templates');
if (fs.existsSync(templatePath)) {
    fs.copySync(templatePath, appPath);
} else {
    console.error(
        `Could not locate supplied template: ${chalk.green(templatePath)}`
    );
    return;
}