'use strict';

const _require = require('../models/index'),
    Year = _require.Year,
    Reviewer = _require.Reviewer;

module.exports = {
    up: (queryInterface, Sequelize) => {

        console.log("Getting years");
        Year.findOne({where: {name: 2013}}).then(project => {
            console.log(project);
            });
        Year.findById(1).then(project => {
            console.log(project);
        });
        console.log("Done getting years");

       //  const year2013 = Year.findOne({where: {name: 2013}});
       //  const year2014 = Year.findOne({where: {name: 2014}});
       //  const year2015 = Year.findOne({where: {name: 2015}});
       //  const year2016 = Year.findOne({where: {name: 2016}});
       //  const year2017 = Year.findOne({where: {name: 2017}});
       //
       //  const matt = Reviewer.findOne({where: {name: 'Matt'}});
       //  const mike = Reviewer.findOne({where: {name: 'Mike'}});
       //  const tiny = Reviewer.findOne({where: {name: 'Tiny'}});
       //
       // return queryInterface.bulkInsert('ViewStats', [
       //      {
       //          yearId: year2013,
       //          reviewerId: matt,
       //          totalViews: 325,
       //          newViews: 153,
       //          theaterViews: 33,
       //      },
       //      {
       //          yearId: year2013,
       //          reviewerId: mike,
       //          totalViews: 173,
       //          newViews: 94,
       //          theaterViews: 65,
       //      },
       //      {
       //          yearId: year2013,
       //          reviewerId: tiny,
       //          totalViews: 320,
       //          newViews: 158,
       //          theaterViews: 25,
       //      },
       //      {
       //          yearId: year2014,
       //          reviewerId: matt,
       //          totalViews: 263,
       //          newViews: 124,
       //          theaterViews: 50,
       //      },
       //      {
       //          yearId: year2014,
       //          reviewerId: mike,
       //          totalViews: 213,
       //          newViews: 104,
       //          theaterViews: 64,
       //      },
       //      {
       //          yearId: year2014,
       //          reviewerId: tiny,
       //          totalViews: 366,
       //          newViews: 252,
       //          theaterViews: 28,
       //      },
       //      {
       //          yearId: year2015,
       //          reviewerId: matt,
       //          totalViews: 230,
       //          newViews: 138,
       //          theaterViews: 71,
       //      },
       //      {
       //          yearId: year2015,
       //          reviewerId: mike,
       //          totalViews: 0,
       //          newViews: 0,
       //          theaterViews: 62,
       //      },
       //      {
       //          yearId: year2015,
       //          reviewerId: tiny,
       //          totalViews: 103,
       //          newViews: 67,
       //          theaterViews: 26,
       //      },
       //      {
       //          yearId: year2016,
       //          reviewerId: matt,
       //          totalViews: 176,
       //          newViews: 133,
       //          theaterViews: 83,
       //      },
       //      {
       //          yearId: year2016,
       //          reviewerId: mike,
       //          totalViews: 147,
       //          newViews: 0,
       //          theaterViews: 52,
       //      },
       //      {
       //          yearId: year2016,
       //          reviewerId: tiny,
       //          totalViews: 81,
       //          newViews: 0,
       //          theaterViews: 16,
       //      },
       //      {
       //          yearId: year2017,
       //          reviewerId: matt,
       //          totalViews: 136,
       //          newViews: 66,
       //          theaterViews: 40,
       //      },
       //      {
       //          yearId: year2017,
       //          reviewerId: mike,
       //          totalViews: 135,
       //          newViews: 0,
       //          theaterViews: 51,
       //      },
       //      {
       //          yearId: year2017,
       //          reviewerId: tiny,
       //          totalViews: 155,
       //          newViews: 0,
       //          theaterViews: 9,
       //      }
       //      ]);

        return true;
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('ViewStats', null, {});
    }
};
