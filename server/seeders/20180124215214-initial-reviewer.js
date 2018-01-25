'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Reviewers', [
            {
                name: 'Matt',
                twitterHandle: 'obsessiveviewer',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Mike',
                twitterHandle: 'iammikewhite',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Tiny',
                twitterHandle: 'obsessivetiny',
                createdAt: new Date(),
                updatedAt: new Date(),
            }]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Reviewers', null, {});
    }
};
