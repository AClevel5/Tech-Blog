const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

// User.hasMany(Post, {
//   foreignKey: 'userId'
// });

// User.hasMany(Comment, {
//   foreignKey: 'userId'
// });

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Comment.belongsTo(Post, {
//   foreignKey: 'postId',
//   onDelete: 'CASCADE'
// });


module.exports = {
  User,
  Comment,
  Post
};