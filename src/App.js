import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import { Container, Row, Col } from 'react-bootstrap';
import GroupTask from './components/GroupTask';
function App() {

  return (
    <Container>
      <div className='background'></div>
      <Row className="g-4 my-5">
        <Col lg={4}>
          <GroupTask variant={{ title: 'To Do', status: 'to-do' }}></GroupTask>
        </Col>
        <Col lg={4}>
          <GroupTask variant={{ title: 'In Progress', status: 'in-progress' }}></GroupTask>
        </Col>
        <Col lg={4}>
          <GroupTask variant={{ title: 'Done', status: 'done' }}></GroupTask>
        </Col>
      </Row>
    </Container >
  );
}




export default App;
