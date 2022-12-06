
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import {Route,Routes} from "react-router-dom"
import Home from './Pages/Home'
import Drop from './Pages/Drop'


function App() {


  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/drop' element={<Drop/>} />
        

     
      </Routes>
    
    </div>
  )
}

export default App
