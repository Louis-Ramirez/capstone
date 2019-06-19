'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a username'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Email is required'
      },
      unique: {
        args: false,
        msg: 'Email already exists'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address'
        },
      },
    },
    password:{
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Password is required'
      },
      validate: {
        isNotShort: (value) => {
          if(typeof value !== 'undefined' && value.length < 8) {
            throw new Error('Password needs to be 8+ characters');
          }
          return false;
        },
      }
    },
    imageUrl: DataTypes.STRING,
    defaultValue: "http://thc.nic.in/images/empty_profile.png"
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post, {
      foreignKey: 'userId',
    });

    User.hasMany(models.Comment, {
      foreignKey: 'userId'
    });
  };
  return User;
};
