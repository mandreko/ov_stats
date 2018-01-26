import React, {Component} from 'react';
import axios from 'axios';
import logo from '../logo.png';
import '../style/App.css';
import _ from 'lodash';
import ViewingNumberCharts from './viewing_numbers_chart';

class App extends Component {

    state = {viewings: ""}

    componentDidMount() {
        axios.get('/stats')
            .then(res => {
                const viewings = res.data;
                this.setState({viewings});
            });
    }

    render() {
        var grouped = _.groupBy(this.state.viewings, viewing => viewing.Year.name);

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Year In Review Stats</h1>
                </header>
                <div className="container">
                    <div className="row">
                        {Object.keys(grouped).map((key, index) => {
                            return <ViewingNumberCharts key={key} data={grouped[key]} title={key} />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
