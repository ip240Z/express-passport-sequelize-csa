const passport = require('passport');

function authenticate(req, res, next) {
    passport.authenticate('local', (err, user) => {
        if (err) {
            return next(err);
        }

        if(!user) {
            return res.status(401).json({message: 'Please login or create an account.'});
        };

        req.logIn(user, (error) => {
            if(err) {
                return next(error);
            }
            next()
        });
    })(req,res,next);
}

module.exports = {authenticate};