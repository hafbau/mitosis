'use strict';

// # Core/index

const integrator = require('./integrator');

module.exports = function core(
    {
        appName,
        appPath
    }, {
        templatePath,
        componentsPaths
    }) {
    // integrate component into appropriate architectureTemplates
    const tempAppPath = integrator
        .init(appName)    
        .integrate(componentsPaths)
        .into(templatePath);
    
    return { tempAppPath, appPath };
};