import React, { Component } from 'react';
import axios from 'axios/index';
import { Container, Row } from 'reactstrap';
import _ from 'lodash';

import '../style/top_movies_list.css';
import TopMoviesCard from './top_movies_card';

export default class TopMoviesList extends Component {
  state = { topMovies: '' };

  componentDidMount() {
    axios.get('/top/' + this.props.match.params.year)
      .then((res) => {
        const topMovies = res.data;
        this.setState({ topMovies });
      });
  }

  componentWillReceiveProps(nextProps) {
    axios.get('/top/' + nextProps.match.params.year)
      .then((res) => {
        const topMovies = res.data;
        this.setState({ topMovies });
      });
  }

  renderTopMoviesCard(group) {
    return (
      <Row>
        {Object.keys(group)
          .map(key => (
            <TopMoviesCard key={key}
                           title={group[ key ].name}
                           imdb={group[ key ].IMDBId}
                           rank={group[ key ].rank}
            />
          ))}
      </Row>
    );
  }

  render() {

    const grouped = _.groupBy(
      this.state.topMovies,
      rating => rating.Reviewer.name,
    );

    return (
      <div>
        {Object.keys(grouped)
          .map(key => (
            <Container key={key} >
              <h2>{key}</h2>
                {this.renderTopMoviesCard(grouped[ key ])}
            </Container>
          ))}
      </div>
    );
  }
}
