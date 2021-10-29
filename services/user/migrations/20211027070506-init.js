/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.createCollection('users');
    await db.createCollection('roles');
    await db.collection('roles').insertMany([
      { label: 'Admin', level: 0 },
      { label: 'Agent', level: 1 },
      { label: 'client', level: 2 },
    ]);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    await db.collection('users').drop();
    await db.collection('roles').drop();
  },
};
