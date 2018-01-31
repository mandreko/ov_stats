import React from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from 'recharts';
import { Container, Row, Col, Card } from 'reactstrap';
import '../style/viewing_numbers_chart.css';

export default props => (
  <Col xl={4} lg={6} md={12} sm={12}>
    <Container fluid>
      <Card>
      <Row>
        <Col>
          <h3>{props.title}</h3>
        </Col>
      </Row>
      <Row>
        <ResponsiveContainer width='100%' height={300}>
          <ComposedChart
            data={props.data}
            margin={{
 top: 20, right: 30, left: 20, bottom: 5,
}}
          >
            <XAxis dataKey='Reviewer.name' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Legend />
            <Bar dataKey='theaterViews' fill='#FD8604' name='In Theater' />
            <Bar dataKey='newViews' fill='#FFB717' name='First Viewing' />
            <Line
              type='monotone'
              dataKey='totalViews'
              stroke='#FECF88'
              name='Total'
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Row>
      </Card>
    </Container>
  </Col>
);
