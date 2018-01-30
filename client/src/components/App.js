import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../style/App.css';
import Header from './header';
import NavBar from './navbar';
import About from './about';
import Home from './home';
import ViewingNumberChartList from './viewing_numbers_chart_list';
import TopMoviesList from './top_movies_list';

export default () => (
  <div className='App'>
    <BrowserRouter>
      <div>
        <Header title='Year In Review Stats' />
        <NavBar />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/summary_stats' component={ViewingNumberChartList} />
          <Route path='/top_movies' component={TopMoviesList} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);
