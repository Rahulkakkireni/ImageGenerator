import React from "react";
import "./components/logincss.css";
import './components/signupcss.css';
import './components/imgunqcss.css'
import Imgunq from "./components/imgunq"
import Signup from "./components/signup"
import Login from './components/login';
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
     <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/components/signup' element={<Signup/>}/>
       <Route path='/components/Imgunq' element={<Imgunq/>}/>
      </Routes>
   </>
  );
}

export default App;
