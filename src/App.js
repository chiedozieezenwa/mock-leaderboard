import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import Web3 from "./pages/Web3";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/web3" element={<Web3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
