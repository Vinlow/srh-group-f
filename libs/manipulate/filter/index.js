/* ======================================================== *
 * > Filter Node.js Applications
 * ======================================================== */

/**
 * Main for filtering Node.js applications
 * 
 * @param packagePath: string
 * 
 * 
 * @return void
 */
exports.filterPackages = function (filePath) {
    var packageJson = require(filePath + '/package.json');
    var hasExpress = this.hasExpress(packageJson);

    // Found itself

    if (filePath == process.cwd()) {
        return false;
    }

    if (hasExpress) {
        console.log(filePath);
        console.log(process.cwd());
        return true;
    }
    return false;
}


/**
 * Check if it has an express webserver
 * 
 * @param packagejson: string
 * 
 * 
 * @return boolean
 */
exports.hasExpress = function (packageJson) {
    if (packageJson.dependencies != null) {
        if (packageJson.dependencies['express'] != null) {
            return true;
        }
    }
    return false;
}