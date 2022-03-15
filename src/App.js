import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';

function App() {
  return (
    <Router>
      <Navigator />
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
