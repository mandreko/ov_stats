import React, {Component} from 'react';
import axios from 'axios';
import '../style/App.css';
import _ from 'lodash';
import ViewingNumberCharts from './viewing_numbers_chart';
import Header from './header';
import NavBar from './navbar';

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
                <Header title="Year In Review Stats"/>
                <NavBar />




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
