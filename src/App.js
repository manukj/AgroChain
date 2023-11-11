import './App.css';
import Farmer from './components/Farmer'
import Seller from './components/Seller'
import Home from './components/Home'

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Seller">Seller</Link>
            </li>
            <li>
              <Link to="/Farmer">Farmer</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/Farmer" element={<Farmer></Farmer>}/>
          <Route path="/Seller" element={<Seller></Seller>}/>
          <Route path="/" element={<Home></Home>}/>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
