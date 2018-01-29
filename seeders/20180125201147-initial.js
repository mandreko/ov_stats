module.exports = {
    up: (queryInterface, Sequelize) => {
        const yearsData = [
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
            }
        ];

        const reviewersData = [
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
            }
        ];

        return Promise.all([queryInterface.bulkInsert('Years', yearsData), queryInterface.bulkInsert("Reviewers", reviewersData)]).then(() => {
            return queryInterface.sequelize.query(`SELECT * FROM "Years" ORDER BY id ASC`).then(yearsResult => {
                return queryInterface.sequelize.query(`SELECT * FROM "Reviewers" ORDER BY id ASC`).then(reviewersResult => {
                    const years = yearsResult[0];
                    const reviewers = reviewersResult[0];

                    const getReviewer = (name) => {
                        return reviewers.filter(reviewer => reviewer.name.toLowerCase() === name.toLowerCase())[0];
                    };
                    const getYear = (name) => {
                        return years.filter(year => year.name.toLowerCase() === name.toLowerCase())[0];
                    };
                    // const getReviewer = async (name) => {
                    //         return await queryInterface.sequelize.Reviewer.findOne({ where: { name }})
                    // }
                    // const getYear = async (name) => {
                    //     return await queryInterface.sequelize.Year.findOne({ where: { name } })
                    // }
                    const viewStatsData = [
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("matt").id,
                            totalViews: 325,
                            newViews: 153,
                            theaterViews: 33,
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("mike").id,
                            totalViews: 173,
                            newViews: 94,
                            theaterViews: 65,
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("tiny").id,
                            totalViews: 320,
                            newViews: 158,
                            theaterViews: 25,
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("matt").id,
                            totalViews: 263,
                            newViews: 124,
                            theaterViews: 50,
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("mike").id,
                            totalViews: 213,
                            newViews: 104,
                            theaterViews: 64,
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("tiny").id,
                            totalViews: 366,
                            newViews: 252,
                            theaterViews: 28,
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("matt").id,
                            totalViews: 230,
                            newViews: 138,
                            theaterViews: 71,
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("mike").id,
                            totalViews: 0,
                            newViews: 0,
                            theaterViews: 62,
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("tiny").id,
                            totalViews: 103,
                            newViews: 67,
                            theaterViews: 26,
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("matt").id,
                            totalViews: 176,
                            newViews: 133,
                            theaterViews: 83,
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("mike").id,
                            totalViews: 147,
                            newViews: 0,
                            theaterViews: 52,
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("tiny").id,
                            totalViews: 81,
                            newViews: 0,
                            theaterViews: 16,
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("matt").id,
                            totalViews: 136,
                            newViews: 66,
                            theaterViews: 40,
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("mike").id,
                            totalViews: 135,
                            newViews: 0,
                            theaterViews: 51,
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("tiny").id,
                            totalViews: 155,
                            newViews: 0,
                            theaterViews: 9,
                        }
                    ];

                    const topMovies = [
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 1,
                            name: 'Gravity',
                            IMDBId: 'tt1454468'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 2,
                            name: 'The Way Way Back',
                            IMDBId: 'tt1727388'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 3,
                            name: 'Star Trek: Into Darkness',
                            IMDBId: 'tt1408101'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 4,
                            name: 'This Is The End',
                            IMDBId: 'tt1245492'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 5,
                            name: 'Out Of The Furnace',
                            IMDBId: 'tt1206543'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 6,
                            name: 'Trance',
                            IMDBId: 'tt1924429'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 7,
                            name: 'The World\'s End',
                            IMDBId: 'tt1213663'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 8,
                            name: 'Elysium',
                            IMDBId: 'tt1535108'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 9,
                            name: 'Iron Man 3',
                            IMDBId: 'tt1300854'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 10,
                            name: 'Coffee Town',
                            IMDBId: 'tt2234025'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 1,
                            name: 'Star Trek: Into Darkness',
                            IMDBId: 'tt1408101'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 2,
                            name: 'Fruitvale Station',
                            IMDBId: 'tt2334649'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 3,
                            name: '12 Years A Slave',
                            IMDBId: 'tt2024544'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 4,
                            name: 'Gravity',
                            IMDBId: 'tt1454468'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 5,
                            name: 'Prisoners',
                            IMDBId: 'tt1392214'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 6,
                            name: 'Oblivion',
                            IMDBId: 'tt1483013'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 7,
                            name: 'You\'re Next',
                            IMDBId: 'tt1853739'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 8,
                            name: 'This Is The End',
                            IMDBId: 'tt1245492'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 9,
                            name: 'We\'re The Millers',
                            IMDBId: 'tt1723121'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 10,
                            name: 'About Time',
                            IMDBId: 'tt2194499'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 1,
                            name: '12 Years A Slave',
                            IMDBId: 'tt2024544'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 2,
                            name: 'Prisoners',
                            IMDBId: 'tt1392214'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 3,
                            name: 'Star Trek: Into Darkness',
                            IMDBId: 'tt1408101'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 4,
                            name: 'Trance',
                            IMDBId: 'tt1924429'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 5,
                            name: 'Gravity',
                            IMDBId: 'tt1454468'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 6,
                            name: 'Rush',
                            IMDBId: 'tt1979320'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 7,
                            name: 'Iron Man 3',
                            IMDBId: 'tt1300854'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 8,
                            name: 'The Hunter Games: Catching Fire',
                            IMDBId: 'tt1951264'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 9,
                            name: 'Out Of The Furnace',
                            IMDBId: 'tt1206543'
                        },
                        {
                            yearId: getYear("2013").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 10,
                            name: 'The East',
                            IMDBId: 'tt1869716'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 1,
                            name: 'Whiplash',
                            IMDBId: 'tt2582802'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 2,
                            name: 'Guardians of the Galaxy',
                            IMDBId: 'tt2015381'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 3,
                            name: 'The Theory of Everything',
                            IMDBId: 'tt2980516'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 4,
                            name: 'The Skeleton Twins',
                            IMDBId: 'tt1571249'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 5,
                            name: 'Men, Women & Children',
                            IMDBId: 'tt3179568'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 6,
                            name: 'Captain America: The Winter Soldier',
                            IMDBId: 'tt1843866'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 7,
                            name: 'Nightcrawler',
                            IMDBId: 'tt2872718'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 8,
                            name: 'Dawn of the Planet of the Apes',
                            IMDBId: 'tt2103281'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 9,
                            name: 'Gone Girl',
                            IMDBId: 'tt2267998'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 10,
                            name: 'X-Men: Days of Future Past',
                            IMDBId: 'tt1877832'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 1,
                            name: 'Captain America: The Winter Soldier',
                            IMDBId: 'tt1843866'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 2,
                            name: 'Nightcrawler',
                            IMDBId: 'tt2872718'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 3,
                            name: 'Boyhood',
                            IMDBId: 'tt1065073'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 4,
                            name: 'Chef',
                            IMDBId: 'tt2883512'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 5,
                            name: 'Gone Girl',
                            IMDBId: 'tt2267998'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 6,
                            name: 'Guardians of the Galaxy',
                            IMDBId: 'tt2015381'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 7,
                            name: 'Birdman',
                            IMDBId: 'tt2562232'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 8,
                            name: 'Interstellar',
                            IMDBId: 'tt0816692'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 9,
                            name: 'Snowpiercer',
                            IMDBId: 'tt1706620'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 10,
                            name: 'The Grand Budapest Hotel',
                            IMDBId: 'tt2278388'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 1,
                            name: 'Guardians of the Galaxy',
                            IMDBId: 'tt2015381'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 2,
                            name: 'Interstellar',
                            IMDBId: 'tt0816692'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 3,
                            name: 'Captain America: The Winter Soldier',
                            IMDBId: 'tt1843866'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 4,
                            name: 'Chef',
                            IMDBId: 'tt2883512'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 5,
                            name: 'The Normal Heart',
                            IMDBId: 'tt1684226'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 6,
                            name: 'Snowpiercer',
                            IMDBId: 'tt1706620'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 7,
                            name: 'X-Men: Days of Future Past',
                            IMDBId: 'tt1877832'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 8,
                            name: 'Nightcrawler',
                            IMDBId: 'tt2872718'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 9,
                            name: 'This Is Where I Leave You',
                            IMDBId: 'tt1371150'
                        },
                        {
                            yearId: getYear("2014").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 10,
                            name: 'Korengal',
                            IMDBId: 'tt3578504'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 1,
                            name: 'Spotlight',
                            IMDBId: 'tt1895587'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 2,
                            name: 'Room',
                            IMDBId: 'tt3170832'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 3,
                            name: 'Inside Out',
                            IMDBId: 'tt2096673'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 4,
                            name: 'Ex Machina',
                            IMDBId: 'tt0470752'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 5,
                            name: 'The Martian',
                            IMDBId: 'tt3659388'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 6,
                            name: 'Victoria',
                            IMDBId: 'tt4226388'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 7,
                            name: 'Star Wars: The Force Awakens',
                            IMDBId: 'tt2488496'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 8,
                            name: 'Creed',
                            IMDBId: 'tt3076658'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 9,
                            name: 'The Hateful Eight',
                            IMDBId: 'tt3460252'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 10,
                            name: 'Peace Officer',
                            IMDBId: 'tt4079142'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 1,
                            name: 'Star Wars: The Force Awakens',
                            IMDBId: 'tt2488496'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 2,
                            name: 'Ex Machina',
                            IMDBId: 'tt0470752'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 3,
                            name: 'Creed',
                            IMDBId: 'tt3076658'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 4,
                            name: 'Kingsman: The Secret Service',
                            IMDBId: 'tt2802144'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 5,
                            name: 'Love & Mercy',
                            IMDBId: 'tt0903657'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 6,
                            name: 'Inside Out',
                            IMDBId: 'tt2096673'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 7,
                            name: 'Mad Max: Fury Road',
                            IMDBId: 'tt1392190'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 8,
                            name: 'Straight Outta Compton',
                            IMDBId: 'tt1398426'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 9,
                            name: 'It Follows',
                            IMDBId: 'tt3235888'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 10,
                            name: 'Krampus',
                            IMDBId: 'tt3850590'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 1,
                            name: 'Spotlight',
                            IMDBId: 'tt1895587'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 2,
                            name: 'Star Wars: The Force Awakens',
                            IMDBId: 'tt2488496'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 3,
                            name: 'The Martian',
                            IMDBId: 'tt3659388'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 4,
                            name: 'Straight Outta Compton',
                            IMDBId: 'tt1398426'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 5,
                            name: 'Mad Max: Fury Road',
                            IMDBId: 'tt1392190'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 6,
                            name: 'Creed',
                            IMDBId: 'tt3076658'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 7,
                            name: 'The Champions',
                            IMDBId: 'tt4125222'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 8,
                            name: 'Avengers: Age of Ultron',
                            IMDBId: 'tt2395427'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 9,
                            name: 'Steve Jobs',
                            IMDBId: 'tt2080374'
                        },
                        {
                            yearId: getYear("2015").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 10,
                            name: 'It Follows',
                            IMDBId: 'tt3235888'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 1,
                            name: 'La La Land',
                            IMDBId: 'tt3783958'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 2,
                            name: 'Manchester By The Sea',
                            IMDBId: 'tt4034228'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 3,
                            name: 'Arrival',
                            IMDBId: 'tt2543164'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 4,
                            name: 'Green Room',
                            IMDBId: 'tt4062536'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 5,
                            name: '10 Cloverfield Lane',
                            IMDBId: 'tt1179933'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 6,
                            name: 'Moana',
                            IMDBId: 'tt3521164'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 7,
                            name: 'Captain America: Civil War',
                            IMDBId: 'tt3498820'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 8,
                            name: 'Deepwater Horizon',
                            IMDBId: 'tt1860357'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 9,
                            name: 'Swiss Army Man',
                            IMDBId: 'tt4034354'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 10,
                            name: 'Don\'t Think Twice',
                            IMDBId: 'tt4972062'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 1,
                            name: 'Arrival',
                            IMDBId: 'tt0115571'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 2,
                            name: 'The Witch',
                            IMDBId: 'tt4263482'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 3,
                            name: 'Captain America: Civil War',
                            IMDBId: 'tt3498820'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 4,
                            name: 'Hell or High Water',
                            IMDBId: 'tt2582782'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 5,
                            name: 'Green Room',
                            IMDBId: 'tt4062536'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 6,
                            name: 'Rogue One: A Star Wars Story',
                            IMDBId: 'tt3748528'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 7,
                            name: 'Don\'t Breathe',
                            IMDBId: 'tt4160708'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 8,
                            name: 'Blair Witch',
                            IMDBId: 'tt1540011'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 9,
                            name: 'Deadpool',
                            IMDBId: 'tt1431045'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 10,
                            name: 'Other People',
                            IMDBId: 'tt4158876'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 1,
                            name: 'Green Room',
                            IMDBId: 'tt4062536'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 2,
                            name: 'Arrival',
                            IMDBId: 'tt0115571'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 3,
                            name: 'Other People',
                            IMDBId: 'tt4158876'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 4,
                            name: 'Snowden',
                            IMDBId: 'tt3774114'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 5,
                            name: 'Deadpool',
                            IMDBId: 'tt1431045'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 6,
                            name: 'Hell or High Water',
                            IMDBId: 'tt2582782'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 7,
                            name: 'Captain America: Civil War',
                            IMDBId: 'tt3498820'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 8,
                            name: 'Rogue One: A Star Wars Story',
                            IMDBId: 'tt3748528'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 9,
                            name: 'Imperium',
                            IMDBId: 'tt4781612'
                        },
                        {
                            yearId: getYear("2016").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 10,
                            name: '13th',
                            IMDBId: 'tt5895028'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 1,
                            name: 'Blade Runner 2049',
                            IMDBId: 'tt1856101'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 2,
                            name: 'The Disaster Artist',
                            IMDBId: 'tt3521126'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 3,
                            name: 'It',
                            IMDBId: 'tt1396484'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 4,
                            name: 'The Big Sick',
                            IMDBId: 'tt5462602'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 5,
                            name: 'Coco',
                            IMDBId: 'tt2380307'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 6,
                            name: 'Spider-Man Homecoming',
                            IMDBId: 'tt2250912'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 7,
                            name: 'Get Out',
                            IMDBId: 'tt5052448'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 8,
                            name: 'Logan',
                            IMDBId: 'tt3315342'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 9,
                            name: 'Star Wars: The Last Jedi',
                            IMDBId: 'tt2527336'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("matt").id,
                            rank: 10,
                            name: 'Thor: Ragnarok',
                            IMDBId: 'tt3501632'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 1,
                            name: 'It',
                            IMDBId: 'tt1396484'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 2,
                            name: 'Get Out',
                            IMDBId: 'tt5052448'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 3,
                            name: 'Three Billboards Outside Ebbing, Missouri',
                            IMDBId: 'tt5027774'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 4,
                            name: 'Star Wars: The Last Jedi',
                            IMDBId: 'tt2527336'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 5,
                            name: 'Coco',
                            IMDBId: 'tt2380307'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 6,
                            name: 'Spider-Man Homecoming',
                            IMDBId: 'tt2250912'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 7,
                            name: 'The Big Sick',
                            IMDBId: 'tt5462602'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 8,
                            name: 'Lady Bird',
                            IMDBId: 'tt4925292'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 9,
                            name: 'Thor: Ragnarok',
                            IMDBId: 'tt3501632'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("mike").id,
                            rank: 10,
                            name: 'Blade Runner 2049',
                            IMDBId: 'tt1856101'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 1,
                            name: 'Star Wars: The Last Jedi',
                            IMDBId: 'tt2527336'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 2,
                            name: 'Wind River',
                            IMDBId: 'tt5362988'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 3,
                            name: 'It',
                            IMDBId: 'tt1396484'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 4,
                            name: 'Dunkirk',
                            IMDBId: 'tt5013056'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 5,
                            name: 'Split',
                            IMDBId: 'tt4972582'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 6,
                            name: 'The Big Sick',
                            IMDBId: 'tt5462602'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 7,
                            name: 'Guardians Of The Galaxy Vol. 2',
                            IMDBId: 'tt3896198'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 8,
                            name: 'Logan',
                            IMDBId: 'tt3315342'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 9,
                            name: 'Thor: Ragnarok',
                            IMDBId: 'tt3501632'
                        },
                        {
                            yearId: getYear("2017").id,
                            reviewerId: getReviewer("tiny").id,
                            rank: 10,
                            name: 'Get Me Roger Stone',
                            IMDBId: 'tt6714534'
                        }
                    ];

                    return Promise.all([queryInterface.bulkInsert("TopMovies", topMovies), queryInterface.bulkInsert("ViewStats", viewStatsData)])
                })
            })

        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('TopMovies', null, {}).then(() => {
            return queryInterface.bulkDelete('ViewStats', null, {}).then(() => {
                return queryInterface.bulkDelete('Reviewers', null, {}).then(() => {
                    return queryInterface.bulkDelete('Years', null, {});
                })
            })
        })
    }
};