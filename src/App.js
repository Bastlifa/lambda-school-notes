import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage'
import NavWrapper from './components/NavWrapper/NavWrapper'
import linkList from './linkList'
import './App.css';

function App() {

  console.log(linkList)
  return (
    <div className="App">
      <NavWrapper linkList={linkList} />
      {/* <Route exact path="/" render={(props) => <NavWrapper {...props}  linkList={linkList} />} /> */}
    </div>
  );
}

export default App;
