/* ======================================================== *
 * > Imports
 * ======================================================== */
var fs = require('fs');


/* ======================================================== *
 * > Reader Libary
 * ======================================================== */

/**
 * Check if a specific file exists
 *
 * @param filePath: string
 * 
 * @return boolean
 */
exports.checkFileExists = function (filePath) {
    try {
        return fs.statSync(filePath).isFile();
    }
    catch (err) {
        return false;
    }
}

/**
 * Read a specific file
 * 
 * @param filePath: string
 * 
 * 
 * @return string
 */
exports.readFile = function (filePath, callback) {
    if (callback == null) {
        return fs.readFileSync(filePath).toString();
    }
    else {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                throw err;
            }
            callback(data);
        });
    }
}
