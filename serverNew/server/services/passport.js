// tells server where to look for token
import {Strategy as JwtStrategy, ExtractJwt }  from 'passport-jwt';


import {User} from '../models';
import authConfig from '../config.js';
                                                         
//set up for jwt passport strategy

module.exports = function(passport) {
    const options ={
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'), //decodes encrypted token
        secretOrKey: authConfig.secret, //random string to help with encoding
        usernameField: 'email'
    };

    //defines strategy to decode the token
    passport.use(new JwtStrategy(options, (payload, done)=>{
        console.log("=============>PAYLOAD", payload);
        console.log(User);
        User.findOne({
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



