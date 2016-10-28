(function() {
    'use strict';

    var reqSanitizr = function(req) {
        for(var index in req.body) {
            var dirty = req.body[index];
            var clean = dirty.replace(/[^A-Za-z0-9.,?@]/g, '');
            req.body[index] = clean;
        }
    };

    module.exports = reqSanitizr;
})();
