'use strict';

// # Output System
// Placeholder: Save app to app path
const fs = require('fs-extra');

module.exports = function saveToDisk({ tempAppPath, appPath }) {
    fs.copySync(tempAppPath, appPath);
    console.log('Successfully created your app!');
};