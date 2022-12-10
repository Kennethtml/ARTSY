
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import {Route,Routes} from "react-router-dom"
import Home from './Pages/Home'
import Drop from './Pages/Drop'
import Market from './Pages/Market'


function App() {


  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/drop" element={<Drop />} />
        <Route path="/market" element={<Market />} />
      </Routes>
      <Market />
    </div>
  );
}

export default App
