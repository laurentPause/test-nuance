/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.createCollection('tickets');
    await db.createCollection('status');
    await db.collection('status').insertMany([
      { label: 'Nouveau', color: '#BC1316', code: 0 },
      { label: 'En cours', color: '#34A44D', code: 1 },
      { label: "Besoin d'info", color: '#5FB3F1', code: 2 },
      { label: 'Fermer', color: '#E5BA66', code: 3 },
      { label: 'Mis en attente', color: '#9D58F1', code: 4 },
    ]);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    await db.collection('tickets').drop();
    await db.collection('status').drop();
  },
};
