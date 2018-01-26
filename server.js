const compression = require('compression');
const apicache = require('apicache');
const serveStatic = require('serve-static');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(compression());
//const cache = apicache.middleware;
// app.use(cache('15 minutes'));
app.use(serveStatic('client/build', {
    // maxAge: '1d'
}));

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

// TODO: Delete this one once UI is caught up
app.get('/stats', function (req, res) {
    ViewStat.findAll({
        attributes: ['totalViews', 'theaterViews', 'newViews'],
        include: [
            {
                model: Reviewer,
                attributes: ['name']
            },
            {
                model: Year,
                attributes: ['name']
            }]
    })
        .then(viewStat => res.status(200).json(viewStat))
        .catch(error => res.status(400).send(error));
});

app.listen(process.env.PORT || 8080);