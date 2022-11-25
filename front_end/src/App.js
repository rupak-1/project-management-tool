import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/signup" element={<Signup/>}/>
        <Route path = "/projects" element={<Projects/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
