import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from './Pages/Landing/Landing';

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <div className="app">
        <Routes>
      <Route path='/'element={<Landing/>}/>
      
      </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
