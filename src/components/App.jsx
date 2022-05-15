import React from 'react'
import './app.scss'

// Components
import Header from './Header';

function App() {
  return (
    <div>
      <div className='bg-circleOne'></div>
      <div className='bg-circleTwo'></div>
      <Header />
    </div>
  );
}

export default App;