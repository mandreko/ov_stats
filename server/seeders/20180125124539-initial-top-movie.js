'use strict';

const _require = require('../models/index'),
    Year = _require.Year,
    Reviewer = _require.Reviewer;

module.exports = {
    up: (queryInterface, Sequelize) => {
        const year2013 = Year.findOne({where: {name: 2013}});
        const year2014 = Year.findOne({where: {name: 2014}});
        const year2015 = Year.findOne({where: {name: 2015}});
        const year2016 = Year.findOne({where: {name: 2016}});
        const year2017 = Year.findOne({where: {name: 2017}});

        const matt = Reviewer.findOne({where: {name: 'Matt'}});
        const mike = Reviewer.findOne({where: {name: 'Mike'}});
        const tiny = Reviewer.findOne({where: {name: 'Tiny'}});

        // return queryInterface.bulkInsert('TopMovies', [
        //     {
        //         yearId: year2013,
        //         reviewerId: matt,
        //         rank: 1,
        //         name: 'Gravity',
        //         IMDBId: 'tt1454468'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: matt,
        //         rank: 2,
        //         name: 'The Way Way Back',
        //         IMDBId: 'tt1727388'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: matt,
        //         rank: 3,
        //         name: 'Star Trek: Into Darkness',
        //         IMDBId: 'tt1408101'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: matt,
        //         rank: 4,
        //         name: 'This Is The End',
        //         IMDBId: 'tt1245492'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: matt,
        //         rank: 5,
        //         name: 'Out Of The Furnace',
        //         IMDBId: 'tt1206543'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: matt,
        //         rank: 6,
        //         name: 'Trance',
        //         IMDBId: 'tt1924429'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: matt,
        //         rank: 7,
        //         name: 'The World\'s End',
        //         IMDBId: 'tt1213663'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: matt,
        //         rank: 8,
        //         name: 'Elysium',
        //         IMDBId: 'tt1535108'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: matt,
        //         rank: 9,
        //         name: 'Iron Man 3',
        //         IMDBId: 'tt1300854'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: matt,
        //         rank: 10,
        //         name: 'Coffee Town',
        //         IMDBId: 'tt2234025'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: mike,
        //         rank: 1,
        //         name: 'Star Trek: Into Darkness',
        //         IMDBId: 'tt1408101'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: mike,
        //         rank: 2,
        //         name: 'Fruitvale Station',
        //         IMDBId: 'tt2334649'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: mike,
        //         rank: 3,
        //         name: '12 Years A Slave',
        //         IMDBId: 'tt2024544'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: mike,
        //         rank: 4,
        //         name: 'Gravity',
        //         IMDBId: 'tt1454468'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: mike,
        //         rank: 5,
        //         name: 'Prisoners',
        //         IMDBId: 'tt1392214'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: mike,
        //         rank: 6,
        //         name: 'Oblivion',
        //         IMDBId: 'tt1483013'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: mike,
        //         rank: 7,
        //         name: 'You\'re Next',
        //         IMDBId: 'tt1853739'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: mike,
        //         rank: 8,
        //         name: 'This Is The End',
        //         IMDBId: 'tt1245492'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: mike,
        //         rank: 9,
        //         name: 'We\'re The Millers',
        //         IMDBId: 'tt1723121'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: mike,
        //         rank: 10,
        //         name: 'About Time',
        //         IMDBId: 'tt2194499'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: tiny,
        //         rank: 1,
        //         name: '12 Years A Slave',
        //         IMDBId: 'tt2024544'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: tiny,
        //         rank: 2,
        //         name: 'Prisoners',
        //         IMDBId: 'tt1392214'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: tiny,
        //         rank: 3,
        //         name: 'Star Trek: Into Darkness',
        //         IMDBId: 'tt1408101'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: tiny,
        //         rank: 4,
        //         name: 'Trance',
        //         IMDBId: 'tt1924429'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: tiny,
        //         rank: 5,
        //         name: 'Gravity',
        //         IMDBId: 'tt1454468'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: tiny,
        //         rank: 6,
        //         name: 'Rush',
        //         IMDBId: 'tt1979320'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: tiny,
        //         rank: 7,
        //         name: 'Iron Man 3',
        //         IMDBId: 'tt1300854'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: tiny,
        //         rank: 8,
        //         name: 'The Hunter Games: Catching Fire',
        //         IMDBId: 'tt1951264'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: tiny,
        //         rank: 9,
        //         name: 'Out Of The Furnace',
        //         IMDBId: 'tt1206543'
        //     },
        //     {
        //         yearId: year2013,
        //         reviewerId: tiny,
        //         rank: 10,
        //         name: 'The East',
        //         IMDBId: 'tt1869716'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: matt,
        //         rank: 1,
        //         name: 'tt2582802',
        //         IMDBId: 'Whiplash'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: matt,
        //         rank: 2,
        //         name: 'Guardians of the Galaxy',
        //         IMDBId: 'tt2015381'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: matt,
        //         rank: 3,
        //         name: 'The Theory of Everything',
        //         IMDBId: 'tt2980516'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: matt,
        //         rank: 4,
        //         name: 'The Skeleton Twins',
        //         IMDBId: 'tt1571249'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: matt,
        //         rank: 5,
        //         name: 'Men, Women & Children',
        //         IMDBId: 'tt3179568'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: matt,
        //         rank: 6,
        //         name: 'Captain America: The Winter Soldier',
        //         IMDBId: 'tt1843866'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: matt,
        //         rank: 7,
        //         name: 'Nightcrawler',
        //         IMDBId: 'tt2872718'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: matt,
        //         rank: 8,
        //         name: 'Dawn of the Planet of the Apes',
        //         IMDBId: 'tt2103281'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: matt,
        //         rank: 9,
        //         name: 'Gone Girl',
        //         IMDBId: 'tt2267998'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: matt,
        //         rank: 10,
        //         name: 'X-Men: Days of Future Past',
        //         IMDBId: 'tt1877832'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: mike,
        //         rank: 1,
        //         name: 'Captain America: The Winter Soldier',
        //         IMDBId: 'tt1843866'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: mike,
        //         rank: 2,
        //         name: 'Nightcrawler',
        //         IMDBId: 'tt2872718'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: mike,
        //         rank: 3,
        //         name: 'Boyhood',
        //         IMDBId: 'tt1065073'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: mike,
        //         rank: 4,
        //         name: 'Chef',
        //         IMDBId: 'tt2883512'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: mike,
        //         rank: 5,
        //         name: 'Gone Girl',
        //         IMDBId: 'tt2267998'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: mike,
        //         rank: 6,
        //         name: 'Guardians of the Galaxy',
        //         IMDBId: 'tt2015381'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: mike,
        //         rank: 7,
        //         name: 'Birdman',
        //         IMDBId: 'tt2562232'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: mike,
        //         rank: 8,
        //         name: 'Interstellar',
        //         IMDBId: 'tt0816692'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: mike,
        //         rank: 9,
        //         name: 'Snowpiercer',
        //         IMDBId: 'tt1706620'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: mike,
        //         rank: 10,
        //         name: 'The Grand Budapest Hotel',
        //         IMDBId: 'tt2278388'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: tiny,
        //         rank: 1,
        //         name: 'Guardians of the Galaxy',
        //         IMDBId: 'tt2015381'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: tiny,
        //         rank: 2,
        //         name: 'Interstellar',
        //         IMDBId: 'tt0816692'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: tiny,
        //         rank: 3,
        //         name: 'Captain America: The Winter Soldier',
        //         IMDBId: 'tt1843866'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: tiny,
        //         rank: 4,
        //         name: 'Chef',
        //         IMDBId: 'tt2883512'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: tiny,
        //         rank: 5,
        //         name: 'The Normal Heart',
        //         IMDBId: 'tt1684226'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: tiny,
        //         rank: 6,
        //         name: 'Snowpiercer',
        //         IMDBId: 'tt1706620'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: tiny,
        //         rank: 7,
        //         name: 'X-Men: Days of Future Past',
        //         IMDBId: 'tt1877832'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: tiny,
        //         rank: 8,
        //         name: 'Nightcrawler',
        //         IMDBId: 'tt2872718'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: tiny,
        //         rank: 9,
        //         name: 'This Is Where I Leave You',
        //         IMDBId: 'tt1371150'
        //     },
        //     {
        //         yearId: year2014,
        //         reviewerId: tiny,
        //         rank: 10,
        //         name: 'Korengal',
        //         IMDBId: 'tt3578504'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: matt,
        //         rank: 1,
        //         name: 'Spotlight',
        //         IMDBId: 'tt1895587'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: matt,
        //         rank: 2,
        //         name: 'Room',
        //         IMDBId: 'tt3170832'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: matt,
        //         rank: 3,
        //         name: 'Inside Out',
        //         IMDBId: 'tt2096673'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: matt,
        //         rank: 4,
        //         name: 'Ex Machina',
        //         IMDBId: 'tt0470752'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: matt,
        //         rank: 5,
        //         name: 'The Martian',
        //         IMDBId: 'tt3659388'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: matt,
        //         rank: 6,
        //         name: 'Victoria',
        //         IMDBId: 'tt4226388'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: matt,
        //         rank: 7,
        //         name: 'Star Wars: The Force Awakens',
        //         IMDBId: 'tt2488496'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: matt,
        //         rank: 8,
        //         name: 'Creed',
        //         IMDBId: 'tt3076658'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: matt,
        //         rank: 9,
        //         name: 'The Hateful Eight',
        //         IMDBId: 'tt3460252'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: matt,
        //         rank: 10,
        //         name: 'Peace Officer',
        //         IMDBId: 'tt4079142'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: mike,
        //         rank: 1,
        //         name: 'Star Wars: The Force Awakens',
        //         IMDBId: 'tt2488496'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: mike,
        //         rank: 2,
        //         name: 'Ex Machina',
        //         IMDBId: 'tt0470752'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: mike,
        //         rank: 3,
        //         name: 'Creed',
        //         IMDBId: 'tt3076658'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: mike,
        //         rank: 4,
        //         name: 'Kingsman: The Secret Service',
        //         IMDBId: 'tt2802144'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: mike,
        //         rank: 5,
        //         name: 'Love & Mercy',
        //         IMDBId: 'tt0903657'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: mike,
        //         rank: 6,
        //         name: 'Inside Out',
        //         IMDBId: 'tt2096673'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: mike,
        //         rank: 7,
        //         name: 'Mad Max: Fury Road',
        //         IMDBId: 'tt1392190'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: mike,
        //         rank: 8,
        //         name: 'Straight Outta Compton',
        //         IMDBId: 'tt1398426'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: mike,
        //         rank: 9,
        //         name: 'It Follows',
        //         IMDBId: 'tt3235888'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: mike,
        //         rank: 10,
        //         name: 'tt3850590',
        //         IMDBId: 'Krampus'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: tiny,
        //         rank: 1,
        //         name: 'Spotlight',
        //         IMDBId: 'tt1895587'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: tiny,
        //         rank: 2,
        //         name: 'Star Wars: The Force Awakens',
        //         IMDBId: 'tt2488496'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: tiny,
        //         rank: 3,
        //         name: 'The Martian',
        //         IMDBId: 'tt3659388'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: tiny,
        //         rank: 4,
        //         name: 'Straight Outta Compton',
        //         IMDBId: 'tt1398426'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: tiny,
        //         rank: 5,
        //         name: 'Mad Max: Fury Road',
        //         IMDBId: 'tt1392190'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: tiny,
        //         rank: 6,
        //         name: 'Creed',
        //         IMDBId: 'tt3076658'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: tiny,
        //         rank: 7,
        //         name: 'The Champions',
        //         IMDBId: 'tt4125222'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: tiny,
        //         rank: 8,
        //         name: 'Avengers: Age of Ultron',
        //         IMDBId: 'tt2395427'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: tiny,
        //         rank: 9,
        //         name: 'Steve Jobs',
        //         IMDBId: 'tt2080374'
        //     },
        //     {
        //         yearId: year2015,
        //         reviewerId: tiny,
        //         rank: 10,
        //         name: 'It Follows',
        //         IMDBId: 'tt3235888'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: matt,
        //         rank: 1,
        //         name: 'La La Land',
        //         IMDBId: 'tt3783958'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: matt,
        //         rank: 2,
        //         name: 'Manchester By The Sea',
        //         IMDBId: 'tt4034228'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: matt,
        //         rank: 3,
        //         name: 'Arrival',
        //         IMDBId: 'tt2543164'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: matt,
        //         rank: 4,
        //         name: 'Green Room',
        //         IMDBId: 'tt4062536'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: matt,
        //         rank: 5,
        //         name: '10 Cloverfield Lane',
        //         IMDBId: 'tt1179933'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: matt,
        //         rank: 6,
        //         name: 'Moana',
        //         IMDBId: 'tt3521164'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: matt,
        //         rank: 7,
        //         name: 'Captain America: Civil War',
        //         IMDBId: 'tt3498820'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: matt,
        //         rank: 8,
        //         name: 'Deepwater Horizon',
        //         IMDBId: 'tt1860357'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: matt,
        //         rank: 9,
        //         name: 'Swiss Army Man',
        //         IMDBId: 'tt4034354'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: matt,
        //         rank: 10,
        //         name: 'Don\'t Think Twice',
        //         IMDBId: 'tt4972062'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: mike,
        //         rank: 1,
        //         name: 'Arrival',
        //         IMDBId: 'tt0115571'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: mike,
        //         rank: 2,
        //         name: 'The Witch',
        //         IMDBId: 'tt4263482'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: mike,
        //         rank: 3,
        //         name: 'Captain America: Civil War',
        //         IMDBId: 'tt3498820'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: mike,
        //         rank: 4,
        //         name: 'Hell or High Water',
        //         IMDBId: 'tt2582782'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: mike,
        //         rank: 5,
        //         name: 'Green Room',
        //         IMDBId: 'tt4062536'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: mike,
        //         rank: 6,
        //         name: 'Rogue One: A Star Wars Story',
        //         IMDBId: 'tt3748528'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: mike,
        //         rank: 7,
        //         name: 'Don\'t Breathe',
        //         IMDBId: 'tt4160708'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: mike,
        //         rank: 8,
        //         name: 'Blair Witch',
        //         IMDBId: 'tt1540011'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: mike,
        //         rank: 9,
        //         name: 'Deadpool',
        //         IMDBId: 'tt1431045'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: mike,
        //         rank: 10,
        //         name: 'Other People',
        //         IMDBId: 'tt4158876'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: tiny,
        //         rank: 1,
        //         name: 'Green Room',
        //         IMDBId: 'tt4062536'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: tiny,
        //         rank: 2,
        //         name: 'Arrival',
        //         IMDBId: 'tt0115571'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: tiny,
        //         rank: 3,
        //         name: 'Other People',
        //         IMDBId: 'tt4158876'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: tiny,
        //         rank: 4,
        //         name: 'Snowden',
        //         IMDBId: 'tt3774114'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: tiny,
        //         rank: 5,
        //         name: 'Deadpool',
        //         IMDBId: 'tt1431045'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: tiny,
        //         rank: 6,
        //         name: 'Hell or High Water',
        //         IMDBId: 'tt2582782'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: tiny,
        //         rank: 7,
        //         name: 'Captain America: Civil War',
        //         IMDBId: 'tt3498820'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: tiny,
        //         rank: 8,
        //         name: 'Rogue One: A Star Wars Story',
        //         IMDBId: 'tt3748528'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: tiny,
        //         rank: 9,
        //         name: 'Imperium',
        //         IMDBId: 'tt4781612'
        //     },
        //     {
        //         yearId: year2016,
        //         reviewerId: tiny,
        //         rank: 10,
        //         name: '13th',
        //         IMDBId: 'tt5895028'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: matt,
        //         rank: 1,
        //         name: 'Blade Runner 2049',
        //         IMDBId: 'tt1856101'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: matt,
        //         rank: 2,
        //         name: 'The Disaster Artist',
        //         IMDBId: 'tt3521126'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: matt,
        //         rank: 3,
        //         name: 'It',
        //         IMDBId: 'tt1396484'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: matt,
        //         rank: 4,
        //         name: 'The Big Sick',
        //         IMDBId: 'tt5462602'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: matt,
        //         rank: 5,
        //         name: 'Coco',
        //         IMDBId: 'tt2380307'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: matt,
        //         rank: 6,
        //         name: 'Spider-Man Homecoming',
        //         IMDBId: 'tt2250912'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: matt,
        //         rank: 7,
        //         name: 'Get Out',
        //         IMDBId: 'tt5052448'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: matt,
        //         rank: 8,
        //         name: 'Logan',
        //         IMDBId: 'tt3315342'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: matt,
        //         rank: 9,
        //         name: 'Star Wars: The Last Jedi',
        //         IMDBId: 'tt2527336'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: matt,
        //         rank: 10,
        //         name: 'Thor: Ragnarok',
        //         IMDBId: 'tt3501632'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: mike,
        //         rank: 1,
        //         name: 'It',
        //         IMDBId: 'tt1396484'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: mike,
        //         rank: 2,
        //         name: 'Get Out',
        //         IMDBId: 'tt5052448'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: mike,
        //         rank: 3,
        //         name: 'Three Billboards Outside Ebbing, Missouri',
        //         IMDBId: 'tt5027774'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: mike,
        //         rank: 4,
        //         name: 'Star Wars: The Last Jedi',
        //         IMDBId: 'tt2527336'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: mike,
        //         rank: 5,
        //         name: 'Coco',
        //         IMDBId: 'tt2380307'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: mike,
        //         rank: 6,
        //         name: 'Spider-Man Homecoming',
        //         IMDBId: 'tt2250912'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: mike,
        //         rank: 7,
        //         name: 'The Big Sick',
        //         IMDBId: 'tt5462602'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: mike,
        //         rank: 8,
        //         name: 'Lady Bird',
        //         IMDBId: 'tt4925292'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: mike,
        //         rank: 9,
        //         name: 'Thor: Ragnarok',
        //         IMDBId: 'tt3501632'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: mike,
        //         rank: 10,
        //         name: 'Blade Runner 2049',
        //         IMDBId: 'tt1856101'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: tiny,
        //         rank: 1,
        //         name: 'Star Wars: The Last Jedi',
        //         IMDBId: 'tt2527336'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: tiny,
        //         rank: 2,
        //         name: 'Wind River',
        //         IMDBId: 'tt5362988'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: tiny,
        //         rank: 3,
        //         name: 'It',
        //         IMDBId: 'tt1396484'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: tiny,
        //         rank: 4,
        //         name: 'Dunkirk',
        //         IMDBId: 'tt5013056'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: tiny,
        //         rank: 5,
        //         name: 'Split',
        //         IMDBId: 'tt4972582'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: tiny,
        //         rank: 6,
        //         name: 'The Big Sick',
        //         IMDBId: 'tt5462602'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: tiny,
        //         rank: 7,
        //         name: 'Guardians Of The Galaxy Vol. 2',
        //         IMDBId: 'tt3896198'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: tiny,
        //         rank: 8,
        //         name: 'Logan',
        //         IMDBId: 'tt3315342'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: tiny,
        //         rank: 9,
        //         name: 'Thor: Ragnarok',
        //         IMDBId: 'tt3501632'
        //     },
        //     {
        //         yearId: year2017,
        //         reviewerId: tiny,
        //         rank: 10,
        //         name: 'Get Me Roger Stone',
        //         IMDBId: 'tt6714534'
        //     }]);

        return true;

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('TopMovies', null, {});
    }
};
