import model from '../models';
import bcrypt from 'bcryptjs';
import '../services/passport';
import jwt from 'jsonwebtoken';
import authConfig from '../config.js';

const { User } = model;


class Users {
  // signUp method for Users class
  static signUp(req, res) {
    //password encryption
    bcrypt.hash(req.query.password, 12, (error, hash) =>{
      if(error){
        return res.status(500).json({
          message: error
        });
      } else{
        return User
        .create({
          username : req.query.username,
          email: req.query.email,
          password: hash,
          imageUrl: req.query.imageUrl
        })
        .then(userData => {
          res.status(201).send({
          success: true,
          message: 'User successfully created',
          userData
        })})
        .catch(error  => res.status(500).json({
            success: false,
            message: error.errors[0].message
        }))
      }
    })
  }

  //sign in authenitcation method
  static signIn(req, res){
    console.log('THE EMAIL IS ============>>>>>>', req)
    //check if email is a valid email
      User.findOne({
         where: { email: req.body.email}

      })
      .then(user => {
        console.log("User ===============",user)
            if (user ==null){
              return res.status(401).json({
                success: false,
                message: "Authentication Failed: user not found"
              })
            }
            bcrypt.compare(req.body.password, user.password, (error, result)=>{
              console.log("result ============>", result);
              if(error){
                console.log("error ============>", error);
               return res.status(401).json({
                 success: false,
                 message: "Authentication Failed: user not found"
               });
              }
              if(result){
                // if password correct return user token
                const token = jwt.sign({email: user.email, id: user.id}, 
                 authConfig.secret,{
                 expiresIn:  "1h" });
                res.status(200).json({
                  success: true,
                  message: "User has been signed in!",
                  token: 'Bearer'+' ' + token,
                  user: {username: user.username, imageUrl: user.imageUrl, email: user.email}
                })
              }
              else{
                return res.status(401).json({
                  success: false,
                  message: "Authentication Failed: user not found"
                });
              }
            })
        })
        .catch(error  => {
          
          console.error(error);
          res.status(500).json({
          success: false,
          message: "Authentication Failed!"
      })})
  }

// method to delete user 
  static delete (req, res) {
      return User
      .destroy({
        where:{
          id : req.params.id
        }
      })
      .then(deletedUser => res.status(200).json({
        success: true,
        message: "user deleted",
        deletedUser
      }))
      .catch(error  => res.status(500).json({
        success: false,
        message: error.errors[0].message
    }))
  }
 
}


export default Users;
