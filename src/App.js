import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import City from "./pages/city/City";
import Fore from "./pages/fore/Fore";
import {Custommap} from "./pages/custommap/Custommap";
import Notfound from "./components/notfound/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cities" element={<City/>} />
        {/* // Following 2 routes are not working */}
        <Route path="/fore" element={<Fore/>} />
        <Route path="/map" element={<Custommap/>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
