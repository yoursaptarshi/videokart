import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Videos from './components/Videos/Videos';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';

function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
