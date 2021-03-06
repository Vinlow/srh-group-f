/* ======================================================== *
 * > Packages
 * ======================================================== */
var os = require('os');

/* ======================================================== *
 * > Packages
 * ======================================================== */
var files = require('../../files');

/* ======================================================== *
 * > The Injector
 * ======================================================== */

/**
 * Manipulate a Package.json
 * 
 * @param packagePath: string
 * 
 * 
 * @return void
 */
exports.manipulatePackage = function (packagePath, injectorPath) {
    packagePath += '/package.json';
    var check = files.checkFileExists(packagePath);
    if (check) {
        var packageJson = require(packagePath);
        packageJson.dependencies["origin-header"] = injectorPath;
        packageJson = JSON.stringify(packageJson);

        packageJson = files.beautify(packageJson);;

        var write = files.writeFile(packagePath, packageJson, function (done) {
            return true;
        });
    }
    else {
        return false;
    }
    return false;
}

/**
 * Manipulate the application
 * 
 * @param packagePath: string
 * 
 * 
 * @return void
 */
exports.manipulateApp = function (packagePath) {
    this.injectCode(packagePath);
}

/**
 * Start inject the code
 * 
 * @param application: string
 * 
 * @return int
 */
exports.injectCode = function (packagePath) {
    var getAppMain = this.getAppMain(packagePath);

    if (getAppMain == null) {
        return;
    }

    var getFileData = files.readFile(packagePath + '/' + getAppMain);
    var beautifiedFileData = files.beautify(getFileData);

    var injectedCode = "{{varname}} = require('origin-header').addCrossOrigin({{varname}})";

    var splitedFileData = beautifiedFileData.split(/\r?\n/);
    var originalCode = splitedFileData;
    
    for (var line in splitedFileData) {
        var getVar = this.getVarName(splitedFileData[line]);
        if (getVar != null) {
            var varriable = getVar.substring(0, getVar.length - 1);
            injectedCode = injectedCode.replace(/{{varname}}/g, varriable);
            var injectAt = parseInt(line) + 1;
            originalCode.splice(injectAt, 0, injectedCode);
            break;
        }
    }

    var reformatCode = '';
    for (var line in originalCode) {
        reformatCode += originalCode[line] + "\r\n";
    }
    reformatCode = files.beautify(reformatCode);

    // Write file
    files.writeFile(packagePath + '/' + getAppMain, reformatCode);
}

/**
 * Get the varriable name out of the codeLine
 * 
 * @param codeLine: string
 * 
 * @return string
 */
exports.getVarName = function (codeLine) {
    var isExpressLine = codeLine.indexOf(' = express()');
    if (isExpressLine > -1) {
        var varriable = codeLine.split('=')[0];
        varriable = varriable.replace('var ', '');
        return varriable;
    }
}

/**
 * Get the package main file
 * 
 * @param packagejson: string
 * 
 * @return string
 */
exports.getAppMain = function (packagePath) {
    var packageJson = require(packagePath + '/package.json');
    if (packageJson.main != null) {
        if (files.checkFileExists(packagePath + '/' + packageJson.main)) {
            packageJson.main;
        }
    }
    if (files.checkFileExists(packagePath + '/index.js')) {
        return '/index.js';
    }
    return null;
}