import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Farmer from "./pages/Farmer";
import Home from "./pages/Home";
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
          <ToastContainer />
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
