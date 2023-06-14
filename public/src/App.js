import React from 'react';
import Layout from './Components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import KH from './Pages/KH/KH';
import { DH, LH, DSLH } from './Pages/DH/DH';
import Register from './Pages/KH/Register';
import SpBan from './Pages/QLSP/SanPhamBan/SpBan';
import DMSP from './Pages/QLSP/DanhMucSP/DMSP';
import khoban from './Pages/QLSP/KhoBan/khoban';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/home" exact Component={Home} />
        <Route path="/KH" exact Component={KH} />
        <Route path="/themKH" exact Component={Register} />
        <Route path="/DH" exact Component={DH} />
        <Route path="/DH/LH" exact Component={LH} />
        <Route path="/DH/DSLH" exact Component={DSLH} />
        <Route path="/QLSP/SanPhamBan/SpBan" exact Component={SpBan} />
        <Route path="/QLSP/DanhMucSP/DMSP" exact Component={DMSP} />
        <Route path="/QLSP/KhoBan/khoban" exact Component={khoban} />
      </Routes>
    </Router>
  );
}
export default App;
