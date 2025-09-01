import minimist from "minimist";

import sequelize from'./connect.js';
import User from'../models/user/User.js';
import Post from'../models/post/Post.js';
import View from'../models/view/View.js';

// Sync to Create Table
const createDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    try {
        const args = minimist(process.argv.slice(2));
        await sequelize.sync({ force: JSON.parse(args.force), alter: JSON.parse(args.alter) });
        console.log('Users table has been updated!');
        console.log('Posts table has been updated!');
        console.log('Views table has been updated!');
    } catch (err) {
        console.error('Sync error:', err);
    }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
};

createDatabase();