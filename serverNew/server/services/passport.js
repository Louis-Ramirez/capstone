// tells server where to look for token
const strategy = require('passport-jwt') 
const JwtStrategy = strategy.Strategy; 
const ExtractJwt = strategy.ExtractJwt; 

const User  = require('../models').User;
// const {User} from '../models';
const authConfig = require ('../config'); 
                                                         
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



