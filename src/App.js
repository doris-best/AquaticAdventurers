import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Swotinfo from "./Component/Swotinfo";
import Swotimport from "./Component/Swotimport";
import GPM from "./Component/GPM";
import Useful from "./Component/Useful";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/swotinfo" element={<Swotinfo />} />
        <Route path="/swotimport" element={<Swotimport />} />
        <Route path="/gpm" element={<GPM />} />
        <Route path="/useful" element={<Useful/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
