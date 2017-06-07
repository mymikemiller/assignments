/**
 * Created by mike on 6/5/17.
 */

module.exports = function (req, res, next) {
    req.company = "Disney";
    next();
};