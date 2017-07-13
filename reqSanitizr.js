(() => {
    'use strict';

    let reqSanitizr = (req, res, next) => {
        for(let index in req.body) {
            let dirty = req.body[index];
            let clean = dirty.replace(/[^A-Za-z0-9.,?@ ]/g, '');
            req.body[index] = clean;
        }
    };
    
    next();

    module.exports = reqSanitizr;
})();
