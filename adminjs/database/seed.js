import seedUsers from './seeds/seed_users.js';
import seedPosts from './seeds/seed_posts.js';
import seedViews from './seeds/seed_views.js';

const runSeeds = async () => {
    await seedUsers();
    await seedPosts();
    await seedViews();
};

runSeeds();
