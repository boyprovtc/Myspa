import React from 'react';
import Layout from './Components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import KH from './Pages/KH/KH';
import { DH, LH, DSLH } from './Pages/DH/DH';
import Register from './Pages/KH/Register'
import SpBan from './Pages/QLSP/SanPhamBan/SpBan';
import DMSP from './Pages/QLSP/DanhMucSP/DMSP';
import khoban from './Pages/QLSP/KhoBan/khoban';
import nhanhieu from './Pages/QLSP/NhanHieu/nhanhieu';
import donvi from './Pages/QLSP/DonVi/donvi';
import themDMSP from './Pages/QLSP/DanhMucSP/themDMSP';
import themNhanHieu from './Pages/QLSP/NhanHieu/themNhanHieu';
import themDV from './Pages/QLSP/DonVi/themDV';
import BC_DTDH from './Pages/BC/BCDTDH'
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
        <Route path="/QLSP/DanhMucSP/themDMSP" exact Component={themDMSP} />
        <Route path="/QLSP/KhoBan/khoban" exact Component={khoban} />
        <Route path="/QLSP/NhanHieu/nhanhieu" exact Component={nhanhieu} />
        <Route
          path="/QLSP/NhanHieu/themNhanHieu"
          exact
          Component={themNhanHieu}
        />
        <Route path="/QLSP/DonVi/donvi" exact Component={donvi} />
        <Route path="/QLSP/DonVi/themDV" exact Component={themDV} />
        <Route path="/BC/BCDTDH" exact Component={BC_DTDH} />
      </Routes>
    </Router>
  );
}
export default App;
