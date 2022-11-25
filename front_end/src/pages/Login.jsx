import React, {useState} from 'react';
import "./Login.css";
import {Link} from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleLogin(e){
    e.preventDefault();
  }

  return (
    <div className='container'>
      <div className='row'>
      <div className='col col-md-5 login__bg'></div>
      <div className='col col-md-7 d-flex align-items-center justify-content-center flex-direction-colums'>
        <form className='form-style' onSubmit={handleLogin}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder='@example.com' onChange={e => setEmail(e.target.value)} value={email}  required/>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword" onChange={e => setPassword(e.target.value)} value={password} required/> 
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <div className='py-4'>
            <p className='text-center'>
              Don't have an account ? <Link to="/signup">Signup</Link>
            </p>

          </div>
      </form>
      </div>
      </div>
    </div>
    
  );
}

export default Login
