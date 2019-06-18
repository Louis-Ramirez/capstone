// tells server where to look for token
import {Strategy as JwtStrategy, ExtractJwt }  from 'passport-jwt';


import Users from '../models/user';
import authConfig from '../config.js';
                                                         
//set up for jwt passport strategy

module.exports = function(passport) {
    const options ={
        jwtFromRequest: ExtractJwt.fromHeader('Authorization'), //decodes encrypted token
        secretOrKey: authConfig.secret, //random string to help with encoding
        usernameField: 'email'
    };

    //defines strategy to decode the token
    passport.use(new JwtStrategy(options, (payload, done)=>{
        console.log("payload", payload);
        Users.findOne({
            where:{
                id: payload.id
            }
        })
        .then(user => {
            console.log("user", user)
            if(user == null) {
                 done(null,false);
            }
            else {
                
                done(null, user);
            }
        })
        .catch(error => {
            done(error, false);
        })
    }
    ));
};



