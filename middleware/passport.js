const passport = require('passport')
const dataBase = require('../dataBase')
const User = require('../models/User')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: dataBase.jwt
}

module.exports = passport => {
    
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
           try {
                const user = await User.findById(payload.userId).select('email id role username')

                if (user) {
                    done(null, user)
                } else {
                    done(null, false)
                }
            } catch (e) {
                console.log(e)
            }
        })
    )
    
}