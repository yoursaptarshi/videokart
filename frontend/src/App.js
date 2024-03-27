import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Videos from './components/Videos/Videos';

function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videos' element={<Videos/>}/>
      </Routes>
    </Router>
  );
}

export default App;
