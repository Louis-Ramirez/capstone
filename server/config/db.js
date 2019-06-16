'use strict'

const Sequelize = require('sequelize');



/* Relationships in DataBase */
db.user.hasMany(db.post);
db.user.hasMany(db.comments);
