import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Navigator from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navigator />
      <Header />
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
