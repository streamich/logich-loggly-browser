// See: https://www.loggly.com/docs/javascript/
module.exports = function(token) {

    // Load loggly.com tracker.
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = "http://cloudfront.loggly.com/js/loggly.tracker.js";
    document.body.appendChild(js);

    // Some more magic...
    var _LTracker = _LTracker || [];
    _LTracker.push({logglyKey: token});

    return function(message, next) {
        next();
        _LTracker.push(message);
    };
};