const connection = require('../config/connection');
const { Thought, User, Reaction } = require('../models');


connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
      await connection.dropCollection('users');
    }

    const userData = [];
    const thoughtsData = getRandomThoughts(10);
   
    await User.collection.insertMany(userData);
    await Thought.collection.insertMany(thoughtsData);
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete!');
    process.exit(0);
});
