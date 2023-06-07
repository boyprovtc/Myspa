import React from 'react';
import Layout from './Components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { DH, LH, DSLH } from './Pages/DH/DH';
import KH from './Pages/KH/KH';
import Container from './Pages/QLSP/Container';
import SignIn from './Pages/KH/SignIn';

function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/home" exact Component={Home} />
        <Route path="/KH" exact Component={KH} />
        <Route path="/themKH" exact Component={SignIn} />
        <Route path="/DH" exact Component={DH} />
        <Route path="/DH/LH" exact Component={LH} />
        <Route path="/DH/DSLH" exact Component={DSLH} />
        <Route path="/QLSP/Container" exact Component={Container} />
      </Routes>
    </Router>
  );
}

export default App;
