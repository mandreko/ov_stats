import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
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
                className="card-media-tag card-media-tag-orange"><nobr>{this.props.genre}</nobr></span>
              <span className="card-rating"><nobr>{this.props.rank}</nobr></span>
            </div>
            <CardBody>
              <h2 className="card-body-heading">{this.props.title}</h2>
              <StarRatingComponent
                name="rating"
                editing={false}
                starCount={5}
                value={this.props.rating}
                className="u-clearfix card-body-stars"
                starColor="#FFB717"
                emptyStarColor="#FFB717"
                renderStarIcon={(index, value) => {
                  return <FontAwesome name={index <= value ? 'star' : 'star-o'} />;
                }}
                renderStarIconHalf={() => <FontAwesome name="star-half-o" />}
              />
              <a target="_blank"
                 href={'http://www.imdb.com/title/' + this.props.imdb}
                 className="card-button card-button-link">
                <nobr>
                  More info&nbsp;
                  <span className="card-button-icon">
                    <FontAwesome name="arrow-right" />
                  </span>
                </nobr>
              </a>
            </CardBody>
          </Card>
        </Container>
      </Col>);
  }
}
