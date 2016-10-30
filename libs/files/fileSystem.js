/* ======================================================== *
 * > Imports
 * ======================================================== */
var fs = require('fs');

/**
 * Check if a specific file exists
 *
 * @param filePath: string
 * 
 * @return void
 */
exports.checkFileExists = function (filePath) {
    try {
        return fs.statSync(filePath).isFile();
    }
    catch (err) {
        return false;
    }
}