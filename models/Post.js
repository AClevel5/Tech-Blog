const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./User')

class Post extends Model { }

// Post.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     body: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     userId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: User,
//         key: 'id',
//       }
//     }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "Post"

//   }
// );

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);





module.exports = Post;
