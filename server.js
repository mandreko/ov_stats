const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const imdb = require('imdb');
const util = require('util');
const _ = require('lodash');

app.use(compression());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const _require = require('./models/index'),
  Year = _require.Year,
  Reviewer = _require.Reviewer,
  TopMovie = _require.TopMovie,
  ViewStat = _require.ViewStat,
  Op = _require.Sequelize.Op;

app.get('/imdb_import', (req, res) => {
  const UpdateMovies = async () => {
    const topMovies = await TopMovie.findAll();
    console.log("Movie count: " + _.size(topMovies));

    await Promise.all(topMovies.map(async(topMovie) => {
      return updateMovieDetails(topMovie);
    }));

    console.log("All done");
    return topMovies;
  };

  const updateMovieDetails = topMovie => {
    const imdbPromise = util.promisify(imdb);
    return imdbPromise(topMovie.get('IMDBId')).then(data => {
      if (data) {
        topMovie.posterUrl = data.poster;
        topMovie.rating = Math.round(data.rating) / 2;
        if (data.genre) {
          topMovie.genre = data.genre[0];
        }
        console.log("Updating movie: " + topMovie.name);
        return topMovie.save();
      }
    });
  };

  UpdateMovies()
    .then((data) => res.status(200).json(data))
    .catch(error => console.log(error));
});

app.get('/reviewers', (req, res) => {
  Reviewer.findAll({
    attributes: [ 'name', 'twitterHandle', 'letterboxdHandle' ],
    order: [
      [ 'name' ]
    ]
  })
    .then(reviewers => res.status(200)
      .json(reviewers))
    .catch(error => res.status(400)
      .send(error));
});

app.get('/years', (req, res) => {
  Year.findAll({
    attributes: [ 'name' ],
    order: [
      [ 'name' ]
    ]
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
    order: [
      [ 'rank' ]
    ]
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
    order: [
      [ TopMovie.associations.Reviewer, 'name' ],
      [ 'rank' ]
    ]
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
    order: [
      [ ViewStat.associations.Reviewer, 'name' ],
      [ ViewStat.associations.Year, 'name' ]
    ]
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
    order: [
      [ ViewStat.associations.Reviewer, 'name' ],
      [ ViewStat.associations.Year, 'name' ]
    ]
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
    order: [
      [ ViewStat.associations.Reviewer, 'name' ],
      [ ViewStat.associations.Year, 'name' ]
    ]
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
