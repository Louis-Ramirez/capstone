'use strict'


const Sequelize = require('sequelize'); 
const bcrypt = require('bcrypt'); 

//creating a sequealize instance with our db 
const sequealize = new Sequelize('postgres://postgres@localhost:5432/auth-system')

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {}

//Models/tables
db.campus = require('../models/user.js')(sequelize, Sequelize);
db.campus = require('../models/comments.js')(sequelize, Sequelize);
db.campus = require('../models/post.js')(sequelize, Sequelize);

/* Relationships in DataBase */
db.user.hasMany(db.post);
db.user.hasMany(db.comments);

module.export = db; 