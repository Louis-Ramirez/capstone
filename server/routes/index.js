'use strict'


const routes = [
  require('./user'), 
  require('./comments'), 
  require('./post'), 
]; 

// Add access to the app and db objects to each route
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};
