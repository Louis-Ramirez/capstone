import model from '../models';

const { User } = model;

class Users {
  // signUp method for Users class
  static signUp(req, res) {
    const { username, email, password, imageUrl } = req["query"]
      return User
        .create({
          username,
          email,
          password,
          imageUrl
        })
        .then(userData => res.status(201).send({
          success: true,
          message: 'User successfully created',
          userData
        }))
    }
}

export default Users;
