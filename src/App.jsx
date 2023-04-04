import React from 'react'
import './App.css'
import Header from './componetnts/Header/Header'
import { Outlet, useNavigation } from 'react-router-dom'

function App() {
  const navigation = useNavigation();
  return (
    <div className="App">
      <Header></Header>
      <div
        id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }
      ></div>
      <Outlet></Outlet>
    </div>
  )
}

export default App
