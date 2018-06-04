'use strict';

// # Integrator
// This module exports a singleton.
// Public instance methods are:
//  - init: initializes the instance with a string representing the app name. Returns `this`.
//  - integrate: takes an array of strings representing the components paths to be integrated into the app. Returns `this`.
//  - into: specifies path to the architeure templates to be used for creating where the components are to be integrated into. Returns a string representing a temporary path to the new integrated app.

const fs = require('fs-extra');
const chalk = require('chalk');
const tmp = require('tmp');

class Integrator {
    init(appName) {
        this.appName = appName;
        return this;
    }

    integrate(components) {
        this.components = components;
        return this;
    }

    into(templatePath) {
        try {
            const tempAppObj = getTemporaryDirectory();
            if (fs.existsSync(templatePath)) {
                fs.copySync(templatePath, tempAppObj.name);
                // TODO: Add components to template

                return tempAppObj.name;
            } else {
                console.error(
                    `Could not locate supplied template: ${chalk.green(templatePath)}`
                );
            }
        } catch (e) {
            console.error(
                'Could not integrate into provided template:',
                chalk.green(templatePath),
                e
            );
            return;
        }
    }
}

module.exports = new Integrator();

// ## Helpers
function getTemporaryDirectory() {
    return tmp.dirSync({
        // Unsafe cleanup lets us recursively delete the directory if it contains
        // contents; by default it only allows removal if it's empty
        unsafeCleanup: true
    });
}