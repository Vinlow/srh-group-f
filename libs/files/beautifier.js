/* ======================================================== *
 * > Imports
 * ======================================================== */
var beautifyJS = require('js-beautify').js_beautify;

/**
 * Beautify Javascript Code
 *
 * @param codeData: string
 * 
 * @return string
 */
exports.beautify = function (codeData) {
    return beautifyJS(codeData, { indent_size: 2 });
}