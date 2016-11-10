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
    if(hasExpress){
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