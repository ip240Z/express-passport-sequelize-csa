'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      { username: 'SpongeBob', password: bcrypt.hashSync('pineapple123', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: 'Arnold', password: bcrypt.hashSync('heyarnold123', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: 'TommyPickles', password: bcrypt.hashSync('rugrats123', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: 'FoxyBrown', password: bcrypt.hashSync('foxybrown123', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: 'Shaft', password: bcrypt.hashSync('shaft123', 10), createdAt: new Date(), updatedAt: new Date() },
      { username: 'SuperFly', password: bcrypt.hashSync('superfly123', 10), createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Users', null, {});
  
  }
};
