import React, {Component} from 'react';
import logo from '../logo.png';
import '../style/App.css';
import ViewingNumberCharts from './viewing_numbers_chart';

class App extends Component {
    render() {
        const matt = 'Matt';
        const mike = 'Mike';
        const tiny = 'Tiny';

        const viewings2013 = [
            {name: matt, total: 325, new: 153, theater: 33}, // first year he saw more than Tiny
            {name: mike, total: 173, new: 94, theater: 65},
            {name: tiny, total: 320, new: 158, theater: 25},
        ];
        const viewings2014 = [
            {name: matt, total: 263, new: 124, theater: 50},
            {name: mike, total: 213, new: 104, theater: 64},
            {name: tiny, total: 366, new: 252, theater: 28},
        ];
        const viewings2015 = [
            {name: matt, total: 230, new: 138, theater: 71},
            {name: mike, total: 0, new: 0, theater: 62}, // Got married? Maybe 2014
            {name: tiny, total: 103, new: 67, theater: 26}, // Relationship with Paige
        ];
        const viewings2016 = [
            {name: matt, total: 176, new: 133, theater: 83},
            {name: mike, total: 147, new: 0, theater: 52}, // Child born, Masters received
            {name: tiny, total: 81, new: 0, theater: 16}, // Got engaged
        ];
        const viewings2017 = [
            {name: matt, total: 136, new: 66, theater: 40},
            {name: mike, total: 135, new: 0, theater: 51},
            {name: tiny, total: 155, new: 0, theater: 9}, // Got married, bought a house, got a dog
        ];
        const viewings = {
            2013: viewings2013,
            2014: viewings2014,
            2015: viewings2015,
            2016: viewings2016,
            2017: viewings2017,
        };


        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Year In Review Stats</h1>
                </header>

                <div>
                    <ViewingNumberCharts data={viewings2013} title={"2013 Viewings"} />
                    <ViewingNumberCharts data={viewings2014} title={"2014 Viewings"} />
                    <ViewingNumberCharts data={viewings2015} title={"2015 Viewings"} />
                    <ViewingNumberCharts data={viewings2016} title={"2016 Viewings"} />
                    <ViewingNumberCharts data={viewings2017} title={"2017 Viewings"} />

                </div>

            </div>
        );
    }
}

export default App;
