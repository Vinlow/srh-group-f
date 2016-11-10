/* ======================================================== *
 * > Imports
 * ======================================================== */
var fs = require('fs');

/* ======================================================== *
 * > Writer Libary
 * ======================================================== */

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