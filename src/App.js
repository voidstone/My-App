import React from 'react';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeofDay

  if(hours < 12) {
    timeofDay = "morning"
  } else if(hours >= 12 && hours < 17) {
    timeofDay = "afternoon"
  } else {
    timeofDay = "night"
  }


  return (
    // <div>
    //     <Header />
    //     <MainContent />
    //     <Footer />
    // </div>
    <h1 style={{color:"#FF8C00"}} >It is currently about {timeofDay} o'clock!</h1>
  );
}

export default App;
