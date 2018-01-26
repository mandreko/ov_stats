const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const _require = require('./models/index'),
    Year = _require.Year,
    Reviewer = _require.Reviewer,
    TopMovie = _require.TopMovie,
    ViewStat = _require.ViewStat,
    sequelize = _require.sequelize;


app.get('/reviewers', function (req, res) {
    Reviewer.findAll({
        attributes: ['name', 'twitterHandle', 'letterboxdHandle']
    })
        .then(reviewers => res.status(200).json(reviewers))
        .catch(error => res.status(400).send(error));
});

app.get('/years', function (req, res) {
    Year.findAll({
        attributes: ['name']
    })
        .then(year => res.status(200).json(year))
        .catch(error => res.status(400).send(error));
});

app.get('/top/:year/reviewer/:reviewer', function (req, res) {
    TopMovie.findAll({
        attributes: ['rank', 'name', 'IMDBId'],
        include: [
            {
                model: Reviewer,
                attributes: ['name'],
                where: {name: req.params.reviewer}
            },
            {
                model: Year,
                attributes: ['name'],
                where: {name: req.params.year}
            }]
    })
        .then(topMovie => res.status(200).json(topMovie))
        .catch(error => res.status(400).send(error));
});

app.get('/top/:year', function (req, res) {
    TopMovie.findAll({
        attributes: ['rank', 'name', 'IMDBId'],
        include: [
            {
                model: Reviewer,
                attributes: ['name']
            },
            {
                model: Year,
                attributes: ['name'],
                where: {name: req.params.year}
            }]
    })
        .then(topMovie => res.status(200).json(topMovie))
        .catch(error => res.status(400).send(error));
});

app.get('/stats/reviewer/:reviewer', function (req, res) {
    ViewStat.findAll({
        attributes: ['totalViews', 'theaterViews', 'newViews'],
        include: [
            {
                model: Reviewer,
                attributes: ['name'],
                where: {name: req.params.reviewer}
            },
            {
                model: Year,
                attributes: ['name'],
            }]
    })
        .then(viewStat => res.status(200).json(viewStat))
        .catch(error => res.status(400).send(error));
});

app.get('/stats/:year', function (req, res) {
    ViewStat.findAll({
        attributes: ['totalViews', 'theaterViews', 'newViews'],
        include: [
            {
                model: Reviewer,
                attributes: ['name']
            },
            {
                model: Year,
                attributes: ['name'],
                where: {name: req.params.year}
            }]
    })
        .then(viewStat => res.status(200).json(viewStat))
        .catch(error => res.status(400).send(error));
});

// temporary testing data
app.get('/summaries', function (req, res) {
    const viewings = {
        2013: [
            {name: 'matt', total: 325, new: 153, theater: 33},
            {name: 'mike', total: 173, new: 94, theater: 65},
            {name: 'tiny', total: 320, new: 158, theater: 25},
        ],
        2014: [
            {name: 'matt', total: 263, new: 124, theater: 50},
            {name: 'mike', total: 213, new: 104, theater: 64},
            {name: 'tiny', total: 366, new: 252, theater: 28},
        ],
        2015: [
            {name: 'matt', total: 230, new: 138, theater: 71},
            {name: 'mike', total: 0, new: 0, theater: 62},
            {name: 'tiny', total: 103, new: 67, theater: 26},
        ],
        2016: [
            {name: 'matt', total: 176, new: 133, theater: 83},
            {name: 'mike', total: 147, new: 0, theater: 52},
            {name: 'tiny', total: 81, new: 0, theater: 16},
        ],
        2017: [
            {name: 'matt', total: 136, new: 66, theater: 40},
            {name: 'mike', total: 135, new: 0, theater: 51},
            {name: 'tiny', total: 155, new: 0, theater: 9},
        ]
    };

    res.json(viewings);
});

// app.get('*', (req, res) => res.status(200).send({
//     message: 'This is a REST API. Do not try requesting it in your browser.',
// }));

app.listen(process.env.PORT || 8080);