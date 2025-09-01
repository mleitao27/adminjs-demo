import { DataTypes } from "sequelize";
import sequelize from "../../database/connect.js";
import User from "../user/User.js";

const Post = sequelize.define("Post", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users", // table name
        key: "id",      // primary key in Users
      },
    },
    text: { type: DataTypes.STRING, allowNull: true },
    // migration
    // text_extra: { type: DataTypes.STRING, allowNull: true, after: "text" },
  },
  {
    tableName: 'posts',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at', 
    deletedAt: 'deleted_at',
    paranoid: true
  }
);

Post.belongsTo(User, { as: 'user', foreignKey: "user_id" });
User.hasMany(Post, { as: 'posts', foreignKey: "user_id" });

export default Post;
