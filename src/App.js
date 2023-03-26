import React,{useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row, Col } from 'react-bootstrap';
import Home from './components/Home/Home';
import Detail from './components/Details/Detail';

import './App.css'
const App = () => {
  const [search,setsearch] = useState(null);
  const [post, setpost] = useState([]);
  const [loading, setLoading] = useState(true);


    return (
        <div>
          <Container fluid>
                <Row>
                    <Col sm={9}><Home  search={search} post={post} setpost={setpost} loading={loading} setLoading={setLoading}/></Col>
                    <Col sm={3} ><Detail setsearch={setsearch} search={search} post={post} setpost={setpost} loading={loading} setLoading={setLoading}/></Col>
                </Row>
            </Container>
        
        </div>
    )
}

export default App
