import React from 'react'
import './app.scss'

// Components
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Project from './Project';
import Qualifications from './Qualifications';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
      <div className='bg-circleOne'></div>
      <div className='bg-circleTwo'></div>
      <Header />
      <Navbar />
      <Home />
      <Project />
      <Qualifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;