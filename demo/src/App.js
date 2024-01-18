import './App.css';
import Login from './Component/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Nav from './Component/Nav';
import Home from './Component/Home';
import { useContext, createContext, useState } from 'react';


function App() {

  return (
    <div class="container-fluid">

      <Router>
        <div>
          <Home />
          <Routes>
            <Route path='/' Component={Login} />
            <Route path='/Nav' Component={Nav} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
