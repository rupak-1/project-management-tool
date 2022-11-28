import React from 'react';
import { useState, useEffect } from 'react';
import { isExpired } from 'react-jwt';
import { Link } from 'react-router-dom';
import './Navigation.css';


function Navigation() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    console.log(token);
    if (!isExpired(token)) {
      console.log("yay");
      setIsLoggedIn(true);
    }
  }, [])

  return (
    <nav className="navbar navbar-expand-sm bg-white sticky-top">
      <div className="container-fluid ms-3">
        <a className="navbar-brand" href="/"><i className="fa-solid fa-layer-group"></i> <span>Project Management</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          {!isLoggedIn ?
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/login"><button type="button" className="btn btn-outline-primary me-3">Log In</button></Link>
              </li>
              <li className="nav-item">
                <Link to="/signup"><button type="button" className="btn btn-primary">Sign Up</button></Link>
              </li>
            </ul>
            :
            <ul className="navbar-nav">
              <li className="nav-item me-5">
                <div className='search-wrapper'>
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input type='search' placeholder='Search here' />
                </div>
              </li>
              <li className="nav-item dropdown ms-5">
                <i type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <div className='user-wrapper d-flex align-items-center'>
                    <i class="fa-regular fa-circle-user"></i>
                    <div>
                      <h5 className='mb-0'>John Doe</h5>
                      <h7>Member</h7>
                    </div>
                  </div>
                </i>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navigation