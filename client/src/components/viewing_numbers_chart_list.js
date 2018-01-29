import React, {Component} from 'react';
import axios from "axios/index";
import _ from 'lodash';
import {Container, Row} from 'reactstrap';
import ViewingNumberChart from './viewing_numbers_chart';

export default class ViewingNumberChartList extends Component {

    state = {viewings: ""};

    componentDidMount() {
        axios.get('/stats')
            .then(res => {
                const viewings = res.data;
                this.setState({viewings});
            });
    }

    render() {
        const grouped = _.groupBy(this.state.viewings, viewing => viewing.Year.name);

        return (
            <Container>
                <Row>
                   {Object.keys(grouped).map((key) => {
                        return <ViewingNumberChart key={key} data={grouped[key]} title={key}/>
                    })}
                </Row>
            </Container>
        )
    }

}