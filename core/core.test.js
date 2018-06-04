/* eslint-disable */

const expect = require('chai').expect;
const fs = require('fs-extra');
const path = require('path');

const core = require('./index');
const appInfo = {
    appName: 'myFrigginApp',
    appPath: path.join(process.cwd(), 'myFrigginApp')
};
const templateInfo = {
    templatePath: path.resolve('./assets_system/templates'),
    componentsPaths: undefined
};


describe('Core: Given valid inputs', function () {
    let output;

    it('should return temporary app path and user provided path', function (done) {
        output = core(appInfo, templateInfo);
        expect(output.tempAppPath).to.not.be.undefined;
        expect(output.appPath).to.equal(appInfo.appPath);
        done();
    })

    it('output should contain api', function (done) {
        const hasApi = fs.existsSync(
            path.join(output.tempAppPath, 'api')
        );
        expect(hasApi).to.be.true;
        done();
    })

    it('output should contain gui', function (done) {
        const hasGui = fs.existsSync(
            path.join(output.tempAppPath, 'gui')
        );
        expect(hasGui).to.be.true;
        done();
    })
})