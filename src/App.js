import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Greet from './components/Greet'
import Message from './components/Message'
import Welcome from './components/Welcome';
import firebase from './firebase/FirebaseConfig'
import Calendar from './components/CalendarJS'


function App() {
  const [data, setData] = useState(0);

  useEffect(()=>{
    console.log({data});
  });

  return (
    <div className="App">
      <Greet name="Narathip"/>
      <Greet name="Kanteera"/>
      <Greet name="Prayutt"/>
      <Message/>
      <Welcome name="Test Component"/>
      <Calendar/>
      <p>
        ข้อมูลปัจจุบัน : {data}
      </p>
      <button onClick={() =>setData(data+1)}>คลิก</button>
    </div>
  );
}

export default App;
