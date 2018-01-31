module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'TopMovies',
        'rating',
        {
          type: Sequelize.INTEGER
        }
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('TopMovies', 'rating');
  }
};
