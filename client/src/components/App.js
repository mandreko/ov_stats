import React, {Component} from 'react';
import '../style/App.css';

import Header from './header';
import NavBar from './navbar';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import About from './about';
import Home from './home';
import ViewingNumberChartList from './viewing_numbers_chart_list';


class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Header title="Year In Review Stats"/>
                        <NavBar/>
                        <Switch>
                            <Route path="/about" component={About} />
                            <Route path="/summary_stats" component={ViewingNumberChartList} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
