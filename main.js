'use strict';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
    throw err;
});

const path = require('path');
const getInput = require('./input_system');
const saveOutput = require('./output_system');
const createApp = require('./core');

// Copy the files for the user
const templatePath = path.join(__dirname, 'assets_system/templates');

saveOutput(
    createApp(getInput(), { templatePath })
);