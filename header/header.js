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
        if (req.headers['acccess-control-allow-origin']) {
            return res.send('Yes, i am hacked!');
        }
        next();
    });
    return _app;
}