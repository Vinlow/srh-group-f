 /* ======================================================== *
 * > Description
 * ========================================================
 * This small libary injects a access cross origin header
 * 
 * Made by Group F from the SRH University
 * */

/* ======================================================== *
 * > Packages
 * ======================================================== */
var header = require('./header');

/* ======================================================== *
 * > Main
 * ======================================================== */
var args = process.argv.slice(2);
if(args[0] == "--start"){
    header.addCrossOrigin();
}

// Add the Cross Origin
exports.addCrossOrigin = header.addCrossOrigin;