import React, {Component} from 'react';
import axios from 'axios';
import logo from '../logo.png';
import '../style/App.css';
import ViewingNumberCharts from './viewing_numbers_chart';

class App extends Component {

    state = {viewings: ""}

    componentDidMount() {
        axios.get('/summaries')
            .then(res => {
                const viewings = res.data;
                this.setState({viewings});
            });
    }

    render() {
        const viewings = this.state.viewings;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Year In Review Stats</h1>
                </header>
                <div className="container">
                    <div className="row">
                        {Object.keys(viewings).map((key, index) => {
                            return <ViewingNumberCharts key={key} data={viewings[key]} title={key} />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
