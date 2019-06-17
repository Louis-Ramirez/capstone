'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args:false,
        msg: 'Please enter a title for your post'
      }
    },
    body:{
      type: DataTypes.TEXT,
      allowNull: {
        args: false,
        msg: 'Please enter some content/description in your post body'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId'
      }
    }
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });


    Post.hasMany(models.Comment, {
      foreignKey: 'postId'
    });


  };
  return Post;
};
