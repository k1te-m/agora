// Restrict routes if a user is not logged in
module.exports = function(req, res, next) {
    // If logged in, continue with the request
    if(req.user) {
        return next();
    }
    // If not logged in, redirect to login page
    return res.redirect("/login");
}