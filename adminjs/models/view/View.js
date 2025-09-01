import { DataTypes } from "sequelize";
import sequelize from "../../database/connect.js";
import Post from "../post/Post.js";

const View = sequelize.define('View', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "posts", // table name
      key: "id",      // primary key in posts
    },
  },
  number: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'views',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at', 
  deletedAt: 'deleted_at',
  paranoid: true
});

View.belongsTo(Post, { as: 'post', foreignKey: "post_id" });
Post.hasOne(View, { as: 'view', foreignKey: "post_id" });

export default View;
