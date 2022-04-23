const passport = require("passport");
const passportJWT = require("passport-jwt");
const User = require("../service/schemas/user");
require("dotenv").config();
const ExtractJWT = passportJWT.ExtractJwt;

const secret = process.env.SECRET;
const params = {
  secretOrKey: secret,
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
};

const Strategy = passportJWT.Strategy;
// JWT Strategy
passport.use(
  new Strategy(params, function (payload, done) {
    User.find({ _id: payload.id })
    .then(([user]) => {
        if (!user || user.token === null ) {
          return done(new Error("User not found"));
        }
        return done(null, user);
      })
      .catch((err) => done(err));
  })
);
