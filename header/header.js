/* ======================================================== *
 * > Add Origin Headers
 * ======================================================== */
exports.addCrossOrigin = function (_app) {
    _app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    });
}


exports.addListenHeader = function (_app) {
    _app.use(function (req, res, next) {
        res.setHeader('Acccess-Control-Allow-Origin', '*');
        if (req.headers['acccess-control-allow-origin']) {
            return res.redirect(301, 'http://google.de');
        }
        next();
    });
}