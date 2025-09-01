import { faker } from '@faker-js/faker';
import User from '../../models/user/User.js';

const seedUsers = async () => {
    for (let i = 0; i < 15; i++) {
        await User.create({name: faker.person.fullName(), email:faker.internet.email()});
    }
};

export default seedUsers;