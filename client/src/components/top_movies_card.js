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
      <Card className="card u-clearfix">
        <div className="card-media">
          <img src="https://s18.postimg.org/v0mympf7t/lmf1.jpg" alt=""
               className="card-media-img"/>
          <span
            className="card-media-tag card-media-tag-orange">Action</span>
          <span className="card-rating">{this.props.rank}</span>
        </div>
        <CardBody>
          <h2 className="card-body-heading">{this.props.title}</h2>
          <StarRatingComponent
            name="rating"
            editing={false}
            starCount={5}
            value={4}
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
      </Card>);
  }
}
