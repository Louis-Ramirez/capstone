import model from '../models';

const { Post, Comment,User } = model;

class Posts {
  // create method for posts
  static create(req, res) {
    console.log("-----my request----", req);
    const { title, body } = req["query"]
    const { userId } = req.params
    return Post
      .create({
        title,
        body,
        userId
      })
      .then(postData => res.status(201).send({
        message: `${title} created!`,
        postData
      }))
  }
  static list(req, response) {
    console.log(req);
    return Post
      .findAll()
      .then(p =>
        response.status(200).send(p)
      );
  }

  static getPostById(req, response){
    return Post
      .findOne({
        where: {id: req.params.postId},
        include: {model: Comment}
      })
      .then((p) => {
        response.status(200).send(p)
      })
  }


  static modify(req, res){
    console.log("----------",req.params.postId);
    const {title, body} = req["query"]
    return Post
      .findOne({
        where: {id: req.params.postId}
      })
      .then((p) => {
        console.log("results = ", p);
        p.update({
          title: title || p.title,
          body: body || p.body
        })

        .then((updatedPost) => {
          res.status(200).send({
            message: 'Post updated successfully',
            data: {
              title: title || updatedPost.title,
              body: body || updatedPost.body
            }
          })
        })

        .catch(error => res.status(400).send(error));

      })

      .catch(error => res.status(400).send(error));
  }

  static delete(req, res) {
    return Post
      .findOne({
        where: {id: req.params.postId}
      })
      .then(p => {
        if(!p){
          return res.status(400).send({
            message: 'Post Not Found'
          });
        }

        return p
          .destroy()
          .then(() => res.status(200).send({
            message: 'Post successfully deleted'
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error))
  }




}

export default Posts;
