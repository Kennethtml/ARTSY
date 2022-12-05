import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Features from './components/Features/Features'
import Exhibition from './components/Exhibition/Exhibition'
import Links from './components/Links/Links'
import Form from './components/Form/Form'


function App() {


  return (
    <div className="container">
      <Navbar/>
      <Header/>
      <Features/>
      <Exhibition/>
      <Links/>
      <Form/>
    
    </div>
  )
}

export default App
