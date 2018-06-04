'use strict';

// # Input System
// Placeholder: Get app name from command prompt
// Return app name and app path
const path = require('path');

module.exports = function getInput() {
    const appName = process.argv[2];
    const appPath = path.join(process.cwd(), appName);
    
    return {
        appName,
        appPath
    };
};