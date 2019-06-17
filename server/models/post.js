'use strict';

/*models define database tables*/

//The index.js file pulls in the files from the routes folder, and
//injects the app object and db object into each route.


module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    //Sequelize will take care of managing the id,
    //created_at, updated_at, and deleted_at columns.
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    title: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        required: true,
        allowNull: false
      },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_update_date:  DataTypes.DATE,
  }, {
    // 'paranoid:true' means a deleted record (table row) will not be returned in future queries.
    // 'false' will return all deleted records that match the query w/ deletion timestamp
    paranoid: true,
    underscored: true
  });

  Post.associate = function(models) {
    // creates the userid foreign key in Post
    // and add standard functions Post.getUser() or User.getPosts(); 
    models.Post.hasMany(models.Comment);

    models.Post.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
