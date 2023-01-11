import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.ico'
const Footer = () => {
    return (
      <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img src={logo} width="50" height="50" viewBox="0 0 24 24"  fillRule="evenodd" clipRule="evenodd" className="fill-current"></img>
        <p>Second Up<br/>ReSale Your Furniture</p>
      </div> 
      <div>
        <span className="footer-title">Products</span> 
        <Link to='/' className="link link-hover">Branding</Link> 
        <Link to='/' className="link link-hover">Design</Link> 
        <Link to='/' className="link link-hover">Marketing</Link> 
        <Link to='/' className="link link-hover">Advertisement</Link>
      </div> 
      <div>
        <span className="footer-title">Company</span> 
        <Link to='/' className="link link-hover">About us</Link> 
        <Link to='/' className="link link-hover">Contact</Link> 
        <Link to='/' className="link link-hover">Jobs</Link> 
        <Link to='/' className="link link-hover">Press kit</Link>
      </div> 
      <div>
        <span className="footer-title">Legal</span> 
        <Link to='/' className="link link-hover">Terms of use</Link> 
        <Link to='/' className="link link-hover">Privacy policy</Link> 
        <Link to='/' className="link link-hover">Cookie policy</Link>
      </div>
    </footer>
    );
};

export default Footer;