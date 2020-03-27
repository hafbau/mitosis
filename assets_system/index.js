/* eslint-disable strict */
const md5 = require('md5');
const fs = require('fs-extra');

const baseChecksum = md5({});

const createTemplate = function (config, path, basePath = 'templates/base') {
  fs.copySync(basePath, path);
  return path;
}

module.exports = function getTemplatePath(config) {
  let templatePath =  config ? md5(config) : 'base';
  if (templatePath === baseChecksum) templatePath = 'base';

  const fullPath = 'templates/' + templatePath;
  try {
    fs.existsSync(fullPath);
    return fullPath;
  } catch (error) {
    // templatePath does not exist, create it
    templatePath = createTemplate(config, path)
  }
}