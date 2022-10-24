const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./User');
const Post = require('./Post');

class Comment extends Model { }

// Comment.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     body: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: User,
//         key: 'id'
//       }
//     },
//     postId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: Post,
//         key: 'id'
//       }
//     }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'Comment'
//   }
// );

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize

  }
);

module.exports = Comment;
