import React, {Component} from 'react';
import '../style/App.css';

import Header from './header';
import NavBar from './navbar';
import ViewingNumberChartList from './viewing_numbers_chart_list';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header title="Year In Review Stats"/>
                <NavBar/>
                <ViewingNumberChartList />
            </div>
        );
    }
}

export default App;
