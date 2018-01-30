import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import _ from 'lodash';
import '../style/App.css';
import Header from './header';
import NavBar from './navbar';
import About from './about';
import Home from './home';
import ViewingNumberChartList from './viewing_numbers_chart_list';
import TopMoviesList from './top_movies_list';
import axios from 'axios/index';

export default class App extends Component {

  state = { max_year: '' };

  componentDidMount() {
    axios.get('/years')
      .then((res) => {
        const years = res.data;
        const max_year = _.maxBy(years, year => year.name).name;
        this.setState({ max_year });
      });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <div>
            <Header title='Year In Review Stats'/>
            <NavBar/>
            <Switch>
              <Route path='/about' component={About}/>
              <Route path='/summary_stats' component={ViewingNumberChartList}/>
              <Route exact path='/top_movies/:year' component={TopMoviesList}/>
              <Route exact path='/top_movies' render={() => (
                <Redirect to={"/top_movies/" + this.state.max_year}/>
              )}>
              </Route>
              <Route path='/' component={Home}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
