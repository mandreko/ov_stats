import React, { Component } from 'react';
import axios from 'axios/index';
import _ from 'lodash';
import { Container, Row } from 'reactstrap';
import TopMoviesTable from './top_movies_table';

export default class TopMoviesList extends Component {
  state = { topMovies: '' };

  componentDidMount() {
    axios.get('/top/' + this.props.match.params.year).then((res) => {
      const topMovies = res.data;
      this.setState({ topMovies });
    });
  }

  render() {

    return (
      <Container>
        <Row>
          Top movies of {this.props.match.params.year}
        </Row>
      </Container>
    );
  }
}
