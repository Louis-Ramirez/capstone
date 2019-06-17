# Backend section

```
git clone {this repository url}
npm install

```

### Database Migrations
```
sequelize db:migrate
```

To undo migrations
```
sequelize db:migrate:undo:all
```


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
