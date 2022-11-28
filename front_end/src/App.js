import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/signup" element={<Signup/>}/>
        <Route path = "/dashboard" element={<Dashboard/>}/>
        <Route path = "/project" element={<Project/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
