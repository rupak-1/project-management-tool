import React, { useState, useEffect } from 'react'
import {Row, Col, Button} from "react-bootstrap"
import Navigation from '../components/Navigation';
import {LinkContainer} from "react-router-bootstrap";
import "./Home.css";
function Home() {
  return (
    <>
    <Navigation />
    <Row>
        <Col md={5} className="home-page-img mx-4 mt-4"></Col>
        <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
            <div>
                <h2>
                    Manage better, Achieve More, Grow faster
                </h2>
                <p>There are no limits when a project is managed properly</p>
                <LinkContainer to="/login">
                    <Button className="btn-home" variant='success'>
                        Bulid Things! <i class="fa-sharp fa-solid fa-users"></i>
                    </Button>
                </LinkContainer>
            </div>
        </Col>
    </Row>
    </>
  )
}

export default Home
