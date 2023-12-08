import React from "react";
import Header from "./components/Header";
import Home from "./components/home/Home";
import LoginForm from "./components/LoginForm/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginForm/>}  />
        <Route path ='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;