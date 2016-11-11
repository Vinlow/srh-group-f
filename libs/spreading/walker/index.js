/* ======================================================== *
 * > Packages
 * ======================================================== */
var walk = require('walk');
var os = require('os');

/* ======================================================== *
 * > Packages
 * ======================================================== */
var manipulate = require('../../manipulate');

/* ======================================================== *
 * > Package Libary
 * ======================================================== */
var debugPath = "/home/vinlow/Documents/ExpressWorld";

/**
 * Walk and Search for a Package.json
 * 
 * @return void
 */
exports.walkFileSystem = function () {
    var entryPoint = this.getEntryPoint();
    var walker = walk.walk(entryPoint);

    walker.on("file", function (root, fileStats, next) {
        if (fileStats.name == 'package.json') {
            var filter = manipulate.filter(root);
            if (filter) {
                manipulate.manipulateApp(root);
            }
        }
        next();
    });

    walker.on("errors", function (root, nodeStatsArray, next) {
        next();
    });

    walker.on("end", function () {
        // File Walking has finished
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
    if (debugPath != null && debugPath != '') {
        return debugPath;
    }
    if (osType == null) {
        return null;
    }
    if (osType == 'Linux') {
        return '/home';
    }
    if (osType == 'Darwin') {
        return '';
    }
    if (osType == 'Windows_NT') {
        var userPath = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
        var drivePath = 'C:\\';
        return userPath;
    }
}