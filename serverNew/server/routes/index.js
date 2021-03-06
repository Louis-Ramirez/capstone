const Users = require( '../controllers/user');
const Posts = require( '../controllers/post');
const Comments = require( '../controllers/comment');
const passport = require('passport');


require( '../services/passport')(passport);

const authentication = passport.authenticate('jwt' , {session :false}
);

module.exports = (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Capstone API!',
  }));

  app.post('/api/users/signup', Users.signUp); // API route for user to signup
  app.post('/api/users/signin', Users.signIn); // API rote to log in  authorized user
  app.delete('/api/users/:userId', Users.delete);

  app.post('/api/users/:userId/posts', Posts.create); // API route for user to create a Post from controllers
  app.get('/api/posts', Posts.list);
  app.get('/api/posts/:postId', Posts.getPostById);
  app.put('/api/posts/:postId', Posts.modify);
  app.delete('/api/posts/:postId', Posts.delete);

  app.post('/api/comment/:postId/', Comments.createComment);
  app.get('/api/comments', Comments.list);
  app.get('/api/posts/:postId/comments', Comments.listPostComments);
  app.put('/api/comments/:commentId', Comments.modifyComment);
  app.delete('/api/comments/:commentId', Comments.deleteComment);
};
