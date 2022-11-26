import React from 'react'
import {Row, Col, Button} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap";
import "./Home.css";
function Home() {
  return (
    <Row>
        <Col md={6} className="home-page-img"></Col>
        <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
            <div>
                <h2>
                    Manage better, Achieve More, Grow faster
                </h2>
                <p>There are no limits when a project is managed properly</p>
                <LinkContainer to="/projects">
                    <Button className="btn-home" variant='success'>
                        Bulid Together! <i class="fa-sharp fa-solid fa-users"></i>
                    </Button>
                </LinkContainer>
            </div>
        </Col>
    </Row>
  )
}

export default Home
