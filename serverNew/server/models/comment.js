'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: {
      type: DataTypes.TEXT,
      allowNull: {
        args: false,
        msg: 'Please enter some content/description in your post body'
      }
    }, /*
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId'
      }
    }, */
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Post',
        key: 'id',
        as: 'postId'
      }
    }
  }, {});
 Comment.associate = function(models) {
    // associations can be defined here
     /*Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });*/

    Comment.belongsTo(models.Post, {
      foreignKey: 'postId',
      onDelete: 'CASCADE'
    });
  };
  return Comment;
};
