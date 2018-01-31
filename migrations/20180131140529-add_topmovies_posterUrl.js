'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'TopMovies',
      'posterUrl',
      {
        type: Sequelize.STRING(2048)
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('TopMovies', 'posterUrl');
  }
};
