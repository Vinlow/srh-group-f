/* ======================================================== *
 * > Packages
 * ======================================================== */
var reader = require('./reader');
var writer = require('./writer');
var beautifier = require('./beautifier');

/* ======================================================== *
 * > File Interface
 * ======================================================== */
exports.checkFileExists = reader.checkFileExists;
exports.writeFile = writer.writeFile;
exports.readFile = reader.readFile;
exports.beautify = beautifier.beautify;