import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './layout';
import Home from './home';
import AllStu from './AllStu';
import StuId from './StuID';
import Search from './Search';
import Add from './Form';
import Edit from './Edit';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route path = "/home" element={<Home/>}/>
        <Route path = "/allStudent" element={<AllStu/>}/>
        <Route path = "/Stu/:id" element={<StuId/>}/>
        <Route path = "/Search" element={<Search/>}/>
        <Route path = "/Form" element={<Add/>}/>
        <Route path = "/Edit/:id" element={<Edit/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);