import model from '../models';
import bcrypt from 'bcryptjs';

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
          console.log(userData);
          res.status(201).send({
          success: true,
          message: 'User successfully created',
          userData
        })})
        .catch(error  => res.status(500).json({
            success: false,
            message: error
        }))
      }
    })
    
    const { username, email, password, imageUrl } = req["query"]
      
    }
}

export default Users;
