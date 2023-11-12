import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Farmer from "./pages/farmer/Farmer";
import Seller from "./pages/seller/Seller";

function App() {
  return (
    <div className="">
      <Router>
        <div>
          <div className="flex space-x-4">
            <a
              href="/Seller"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Seller
            </a>
            <a
              href="/Farmer"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Farmer
            </a>
          </div>
          <div className="flex w-full h-1 bg-white"></div>
          <Routes>
            <Route path="/Farmer" element={<Farmer></Farmer>} />
            <Route path="/Seller" element={<Seller></Seller>} />
            <Route path="/" element={<Home></Home>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
