const Sequelize = require('sequelize'); 
const bcrypt = require('bcrypt'); 

//creating a sequealize instance with our db 
const sequealize = new Sequelize('postgres://postgres@localhost:5432/auth-system')

