import React from 'react';
import './App.css';
import {useEffect } from 'react';
import { fetchEvents } from './services/api';
import MyCalendar from './components/Calendar';

function App() {
  useEffect(()=>{
    fetchEvents().then(data=>{
        console.log(data)
    })
},[]
)
  return (
    <div className="App">
      <MyCalendar />
    </div>
  );
} 

export default App;
