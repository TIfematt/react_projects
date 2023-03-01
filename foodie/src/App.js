import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './containers/About';
import Contact from './containers/Contact';
import Blog from './containers/Blog';
import MyNavbar from './components/MyNavbar';


function App() {
  return (
   <BrowserRouter>
    <div className='App'>
      <MyNavbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about'  element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
