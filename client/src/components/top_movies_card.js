import React, { Component } from 'react';
import icons from 'glyphicons';
import StarRatingComponent from 'react-star-rating-component';
import {
  Card,
  CardBody,
  Col,
  Container
} from 'reactstrap';

export default class TopMoviesCard extends Component {
  render() {
    return (
      <Col xl={4} lg={6} md={12} sm={12}>
        <Container fluid
                   className="container top-movies-container">
          <Card className="card u-clearfix top-movies-card">
            <div className="card-media">
              <img src={this.props.posterUrl} alt="" width="120" height="170"
                   className="card-media-img"/>
              <span
                className="card-media-tag card-media-tag-orange">{this.props.genre}</span>
              <span className="card-rating">{this.props.rank}</span>
            </div>
            <CardBody>
              <h2 className="card-body-heading">{this.props.title}</h2>
              <StarRatingComponent
                name="rating"
                editing={false}
                starCount={10}
                value={this.props.rating}
                className="u-clearfix card-body-stars"
              />
              <a target="_blank"
                 href={'http://www.imdb.com/title/' + this.props.imdb}
                 className="card-button card-button-link">
                More info
                <span className="card-button-icon">
        {icons.arrowR}
        </span>
              </a>
            </CardBody>
          </Card>
        </Container>
      </Col>);
  }
}
