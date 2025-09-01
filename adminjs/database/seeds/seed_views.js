import { faker } from '@faker-js/faker';
import View from '../../models/view/View.js';
import Post from '../../models/post/Post.js';

const seedViews = async () => {
    const countPosts = await Post.count();

    for (let i = 1; i <= countPosts; i++) {
        await View.create({post_id: i, number: Math.floor(Math.random() * 500)});
    }
};

export default seedViews;