import React, { useState } from 'react'
import Layout from './Components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'
import KH from './Pages/KH/KH'
import { DH, LH, DSLH } from './Pages/DH/DH'




function App() {
  const [sidebar, setSidebar] = useState(true)

  const showSidebar = () => {
    setSidebar(!sidebar)
  }
  return (
    <Router>

      <Layout />
      <div className='section'>
        <Routes>
          <Route path="/home" exact Component={Home} />
          <Route path="/KH" exact Component={KH} />
          <Route path="/DH" exact Component={DH} />
          <Route path="/DH/LH" exact Component={LH} />
          <Route path="/DH/DSLH" exact Component={DSLH} />
        </Routes>
      </div>

    </Router >
  )
}
export default App