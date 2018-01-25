'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Years', [
            {
                name: '2013'
            },
            {
                name: '2014'
            },
            {
                name: '2015'
            },
            {
                name: '2016'
            },
            {
                name: '2017'
            }]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Years', null, {});
    }
};
