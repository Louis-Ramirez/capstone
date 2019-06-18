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
            message: error.errors[0].message
        }))
      }
    })
  }

  static signIn(req, res){

  }

  static delete (req, res) {
      return User
      .destroy({
        where:{
          id : req.params.id
        }
      })
      .then(res.status(200).json({
        success: true,
        message: "user deleted"
      }))
      .catch(error  => res.status(500).json({
        success: false,
        message: error.errors[0].message
    }))
  }
}

export default Users;
