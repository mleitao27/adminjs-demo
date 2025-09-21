// index.js
import express from "express";
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import bodyParser from 'body-parser';
import cors from 'cors';

import sequelize from "./database/connect.js";

import User from "./models/user/User.js";
import user_fields from "./models/user/fields.js";
import Post from "./models/post/Post.js";
import post_fields from "./models/post/fields.js";
import post_actions from "./controllers/posts/actions.js";
import View from "./models/view/View.js";
import view_fields from "./models/view/fields.js";

import users from './routes/users.js';
import posts from './routes/posts.js';
import views from './routes/views.js';

// Register Sequelize adapter
AdminJS.registerAdapter(AdminJSSequelize);

// Initialize AdminJS
const admin = new AdminJS({
  databases: [sequelize], // load all sequelize models
  rootPath: "/backend",
  resources: [
    {
      resource: Post,
      options: {
        ...post_fields,
        actions: post_actions
      },
    },
    {
      resource: User,
      options: user_fields,
    },
    {
      resource: View,
      options: view_fields,
    },
  ],
});

// Build and use Express router
const adminRouter = AdminJSExpress.buildRouter(admin);

const corsOptions = {
  exposedHeaders: [],
}

const app = express();

// Middleware
app.use(admin.options.rootPath, adminRouter);
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/api/v1/users', users);
app.use('/api/v1/posts', posts);
app.use('/api/v1/views', views);

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`✅ AdminJS started on http://localhost:${PORT}/backend`);
});