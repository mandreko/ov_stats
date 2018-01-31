const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const imdb = require('imdb');

app.use(compression());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const _require = require('./models/index'),
  Year = _require.Year,
  Reviewer = _require.Reviewer,
  TopMovie = _require.TopMovie,
  ViewStat = _require.ViewStat,
  Sequelize = _require.Sequelize,
  Op = _require.Sequelize.Op;


app.get('/imdb_import', (req, res) => {
  TopMovie.findAll()
    .then(topMovies => {
      return Sequelize.Promise.each(topMovies, function (topMovie) {
        imdb(topMovie.get('IMDBId'), function (err, data) {
          if (err) {
            console.log(err.stack);
          }
          if (data) {
            topMovie.posterUrl = data.poster;
            if (data.genre) {
              topMovie.genre = data.genre[ 0 ];
            }
            topMovie.rating = Math.round(parseFloat(data.rating));

            return topMovie.save()
              .then(function () {
              })
              .catch(function (err) {
                console.log(err);
              });
          }
        });
      });
    })
    .then((data) => res.status(200)
      .json(data))
    .catch(error => console.log(error));
});

app.get('/reviewers', (req, res) => {
  Reviewer.findAll({
    attributes: [ 'name', 'twitterHandle', 'letterboxdHandle' ],
  })
    .then(reviewers => res.status(200)
      .json(reviewers))
    .catch(error => res.status(400)
      .send(error));
});

app.get('/years', (req, res) => {
  Year.findAll({
    attributes: [ 'name' ],
  })
    .then(year => res.status(200)
      .json(year))
    .catch(error => res.status(400)
      .send(error));
});

app.get('/top/:year/reviewer/:reviewer', (req, res) => {
  TopMovie.findAll({
    attributes: [ 'rank', 'name', 'IMDBId', 'rating', 'genre', 'posterUrl' ],
    include: [
      {
        model: Reviewer,
        attributes: [ 'name' ],
        where: { name: { [ Op.eq ]: req.params.reviewer } },
      },
      {
        model: Year,
        attributes: [ 'name' ],
        where: { name: { [ Op.eq ]: req.params.year } },
      },
    ],
  })
    .then(topMovie => res.status(200)
      .json(topMovie))
    .catch(error => res.status(400)
      .send(error));
});

app.get('/top/:year', (req, res) => {
  TopMovie.findAll({
    attributes: [ 'rank', 'name', 'IMDBId', 'rating', 'genre', 'posterUrl' ],
    include: [
      {
        model: Reviewer,
        attributes: [ 'name' ],
      },
      {
        model: Year,
        attributes: [ 'name' ],
        where: { name: { [ Op.eq ]: req.params.year } },
      },
    ],
  })
    .then(topMovie => res.status(200)
      .json(topMovie))
    .catch(error => res.status(400)
      .send(error));
});

app.get('/stats/reviewer/:reviewer', (req, res) => {
  ViewStat.findAll({
    attributes: [ 'totalViews', 'theaterViews', 'newViews' ],
    include: [
      {
        model: Reviewer,
        attributes: [ 'name' ],
        where: { name: { [ Op.eq ]: req.params.reviewer } },
      },
      {
        model: Year,
        attributes: [ 'name' ],
      },
    ],
  })
    .then(viewStat => res.status(200)
      .json(viewStat))
    .catch(error => res.status(400)
      .send(error));
});

app.get('/stats/:year', (req, res) => {
  ViewStat.findAll({
    attributes: [ 'totalViews', 'theaterViews', 'newViews' ],
    include: [
      {
        model: Reviewer,
        attributes: [ 'name' ],
      },
      {
        model: Year,
        attributes: [ 'name' ],
        where: { name: { [ Op.eq ]: req.params.year } },
      },
    ],
  })
    .then(viewStat => res.status(200)
      .json(viewStat))
    .catch(error => res.status(400)
      .send(error));
});

// TODO: Delete this one once UI is caught up
app.get('/stats', (req, res) => {
  ViewStat.findAll({
    attributes: [ 'totalViews', 'theaterViews', 'newViews' ],
    include: [
      {
        model: Reviewer,
        attributes: [ 'name' ],
      },
      {
        model: Year,
        attributes: [ 'name' ],
      },
    ],
  })
    .then(viewStat => res.status(200)
      .json(viewStat))
    .catch(error => res.status(400)
      .send(error));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
