import { Navbar } from "./components/Navbar";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Goods } from "./components/Goods";
import { Featured } from "./components/Featured";
import { Sale } from "./components/Sale";
import { Apparel } from "./components/Apparel";
import {Wares} from "./components/Wares";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/goods" element={<Goods></Goods>}></Route>
        <Route path="/Featured" element={<Featured></Featured>}></Route>
        <Route path="/sale" element={<Sale></Sale>}></Route>
        <Route path="/Apparel" element={<Apparel></Apparel>}></Route>
        <Route path="/wares" element={<Wares></Wares>}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
