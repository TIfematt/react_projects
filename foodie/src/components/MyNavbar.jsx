import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { FaSistrix, FaPhoneAlt, FaSignInAlt, FaCartPlus, } from 'react-icons/fa';
import '../App.css';



function MyNavbar() {
  return (
    <div>
       <Navbar collapseOnSelect expand="lg sm" bg="black" variant="dark" className='NavBar'>
          <Navbar.Brand className='logo' href="#"><h3 className='logo' >Foodie</h3></Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <ul className='navlink'>
                <li>
                  <Link className='link' to="/">Home</Link>
                </li>
                <li>
                  <Link className='link' to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link className='link' to="/contact">Contact</Link>
                </li>
                <li>
                  <Link className='link' to="/about">About-us</Link>
                </li>
              </ul>
            </Nav>
            <Outlet />
          </Navbar.Collapse>
          <div className='navicons'>
            <div className='icon-word'>
              <nav><FaPhoneAlt className='icon phone'/></nav>
              <p>+234-813-611-8986</p>
            </div>
            <div><FaSistrix className='icon search'/></div>
            <div><FaCartPlus className='icon cart'/></div>
            <div className='icon-word'>
              <p className='signin-btn'>Sign in</p>
              <nav><FaSignInAlt className='icon signin'/></nav>
            </div>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Navbar>
    </div>
  )
}

export default MyNavbar
