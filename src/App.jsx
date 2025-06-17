import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout'
import './App.scss';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Project from './Pages/Project';
import About from './Pages/About';

const App = () => {
  return (
    <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project" element={<Project />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </Layout>
      </Router>
  )
}

export default App