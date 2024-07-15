// strategies/basic.js
const BasicStrategy = require('passport-http').BasicStrategy;
const users = require('../models/users');
const bcrypt = require('bcrypt');
const passport = require('koa-passport');

const verifyPassword = async function(user, password) {
    return await bcrypt.compare(password, user.password);
}

const checkUserAndPass = async (username, password, done) => {
    let result;

    try {
        result = await users.findByUsername(username);
    } catch (error) {
        console.error(`Error during authentication for user ${username}: ${error.message}`);
        return done(error);
    }

    if (result.length) {
        const user = result[0];
        try {
            const passwordMatch = await verifyPassword(user, password);
            if (passwordMatch) {
                console.log(`Successfully authenticated user ${username}`);
                return done(null, user);
            } else {
                console.log(`Password incorrect for user ${username}`);
            }
        } catch (error) {
            console.error(`Error verifying password for user ${username}: ${error.message}`);
            return done(error);
        }
    } else {
        console.log(`No user found with username ${username}`);
    }
    
    return done(null, false);
}

const strategy = new BasicStrategy(checkUserAndPass);
passport.use(strategy);

module.exports = strategy;
