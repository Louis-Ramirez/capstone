# Backend section

Run npm install to get all the necessary files
```
git clone {this master repository url if you had not done so already}
npm install

```

Make sure you have a database already created
```
createdb your-database-name
```

In the capstone/serverNew/server/config/config.json
- update the development section with your username, password, and database name. Make sure you don't commit changes with this
info stored into the config file
```
{
  "development": {
    "username": "YOUR COMPUTER USER NAME",
    "password": "YOUR COMPUTER PW",
    "database": "YOUR POSTGRES database",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false,
    "omitNull": true

```

### Database Migrations
install your sequelize if you had not done so
```
npm install sequelize pg pg-hstore
npm install -g sequelize-cli
```

Run the migrations!
```
sequelize db:migrate
```

To undo migrations
```
sequelize db:migrate:undo:all
```

### Postman
Go to postico and make sure you configure your settings accurately before calling the api.
For instance, if you are trying to create a user, the dropdown menu next to it needs to be POST

After modifying changes, you can use Postico to check your database to see if your data is in it.

### Database Schema
```
Users (
  id: integer ,
  username: string,
  email: string,
  password: string,
  imageUrl: string,
  createdAt: data,
  updatedAt: date
)

Post (
  title: string,
  body: text,
  userId: integer,
  createdAt: date,
  updatedAt: date
)

Comment (
  body: text,
  userId: integer,
  postId: integer,
  createdAt: date,
  updatedAt: date
)
```

### To start server
```
npm install
npm start
```

### API Routes
```
Main route = http://127.0.0.1:3000/
Create new user = http://127.0.0.1:3000/api/users
```

Create Posts - ensure the user exist
```
Create posts: http://127.0.0.1:3000/api/users/:userId/posts
example: http://127.0.0.1:3000/api/users/1/posts

List all posts: http://127.0.0.1:3000/api/posts

Update post: http://127.0.0.1:3000/api/posts/postId
Example: http://127.0.0.1:3000/api/posts/1

Delete Post: http://127.0.0.1:3000/api/posts/postId
```

Comments - Post and User must already exist
```
Create: http://127.0.0.1:3000/api/users/:userId/posts/:postId
Read all comments: http://127.0.0.1:3000/api/comments
Read all comments in a specific Post:  http://127.0.0.1:3000/api/posts/:postId/comments
Update: http://127.0.0.1:3000/api/comments/:commentId
Delete: http://127.0.0.1:3000/api/comments/:commentId
```

### Notes
- When users create passwords, it must be 8+ characters
