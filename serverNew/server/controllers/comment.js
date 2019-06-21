import model from '../models';

const { Comment } = model;

class Comments {
  // create method for posts
  static createComment(req, res) {
    console.log("activated======", req.body);
   const { body } = req.body
    const { postId } = req.params
    return Comment
      .create({
        body,
        postId
      })
      .then(commentData => res.status(201).send({
        message: `Comment created!`,
        commentData
      })) 
  }

  static list(req, response) {
    return Comment
      .findAll()
      .then(c =>
        response.status(200).send(c)
      );
  }

  static listPostComments(req,res){
    return Comment
      .findAll({
        where: {postId: req.params.postId }
      })
      .then((c) =>
        res.status(200).send(c)
      )
  }

  static modifyComment(request, response){
    const {body} = request["query"]
    return Comment
      .findOne({
        where: {id: request.params.commentId}
      })
      .then((c) => {
        console.log("results = ", c);
        c.update({
          body: body || c.body
        })

        .then((updatedComment) => {
          response.status(200).send({
            message: 'Comment updated successfully',
            data: {
              body: body || updatedComment.body
            }
          })
        })

        .catch(error => res.status(400).send(error));

      })

      .catch(error => res.status(400).send(error));
  }

  static deleteComment(req, res) {
    return Comment
      .findOne({
        where: {id: req.params.commentId}
      })
      .then(c => {
        if(!c){
          return res.status(400).send({
            message: 'Comment Not Found'
          });
        }

        return c
          .destroy()
          .then(() => res.status(200).send({
            message: 'Post successfully deleted'
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error))
  }



}

export default Comments;
