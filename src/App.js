import React from 'react';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header';
import MainContent from './components/MainContent';
import "./index.css"

function App() {
  const styles = {    
    fontSize: "24px"
  }
  const date = new Date(2018, 6, 31,15)
  const hours = date.getHours()
  let timeofDay

  if(hours < 12) {
    timeofDay = "morning"
    styles.color = "#04756F"
  } else if(hours >= 12 && hours < 17) {
    timeofDay = "afternoon"
    styles.color = "#2E0927"
  } else {
    timeofDay = "night"
    styles.color = "#D90000"
  }


  return (
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
    //<h1 style={styles} >It is currently about {timeofDay} o'clock!</h1>
  );
}

export default App;
