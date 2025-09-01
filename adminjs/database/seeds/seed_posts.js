import { faker } from '@faker-js/faker';
import Post from '../../models/post/Post.js';
import User from '../../models/user/User.js';

const seedPosts = async () => {
    const countUsers = await User.count();
    for (let i = 0; i < 35; i++) {
        await Post.create({text: faker.lorem.sentence(), user_id: Math.floor(Math.random() * (countUsers)) + 1});
    }
};

export default  seedPosts;