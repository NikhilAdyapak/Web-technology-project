import React from 'react';
import {BrowserRouter, Route , Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
            </button>
            <Link to="/" >E-rev</Link>
          </div>
          <div className="header-links">
            <Link to="/signin">Signin</Link>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Electronic Item List</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul className="categories">
            <li>
              <Link to="/category/Washing Machine">Washing Machine</Link>
            </li>
            <li>
              <Link to="/category/Phones">Phones</Link>
            </li>
            <li>
              <Link to="/category/TV">TV</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
              </div>
           </main>
          <footer className="footer">
          Thanks for visiting our website!!!
          </footer>
          </div>
          </BrowserRouter>
  );
}

export default App;
