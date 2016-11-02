/* ======================================================== *
 * > Imports
 * ======================================================== */
var fs = require('fs');
var fw = require('file');

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
 * Writes a specific file
 * 
 * @param filePath: string
 * @param fileData: string
 * 
 * 
 * @return boolean
 */
exports.writeFile = function (filePath, fileData, callback) {
    if (callback == null) {
        fs.writeFileSync(filePath, fileData);
    }
    else {
        fs.writeFile(filePath, fileData, function (err) {
            if (err) {
                console.log(err);
                callback(false);
            }
            callback(true);
        });
    }
}
