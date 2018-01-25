const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// /reviewers
// /years
// /top/{year}
// /top/{year}/reviewer/{reviewer}
// /stats/{year}
// /stats/{year}/reviewer/{reviewer}


// temporary testing data
app.get('/summaries', function(req, res) {
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

app.get('*', (req, res) => res.status(200).send({
    message: 'This is a REST API. Do not try requesting it in your browser.',
}))

app.listen(process.env.PORT || 8080);