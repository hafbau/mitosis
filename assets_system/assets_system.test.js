/* eslint-disable */

const md5 = require('md5');
const fs = require('fs-extra');
const path = require('path');
const expect = require('chai').expect;

const assetsSystem = require('./index');


describe('Assets System: Given undefined or empty config', function () {
  const basePath = 'templates/base';

  it('should return path to base template for undefined', () => {
    const undefinedPath = assetsSystem();
    expect(undefinedPath).to.equal(basePath);
  });

  it('should return path to base template for {}', () => {
    const emptyPath = assetsSystem({});
    expect(emptyPath).to.equal(basePath);
  })
})

describe('Assets System: Given non empty config', function () {
  const config = {
    pages: {
      create: {
        fields: [
          {
            name: 'title',
            type: 'String'
          },
          {
            name: 'description',
            type: 'String'
          },
          {
            name: 'starter',
            type: 'String'
          },
        ]
      }
    }
  }
  const expectedPath = 'templates/' + md5(config);
  const templatePath = assetsSystem(config);

  it('should return expected path', () => {
    expect(expectedPath).to.equal(templatePath);
  });

  it('should return template that exists', () => {
    const templateExists = fs.existsSync(templatePath);
    expect(templateExists).to.equal(true);
  });
})

