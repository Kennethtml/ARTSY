
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import {Route,Routes} from "react-router-dom"
import Home from './Pages/Home'
import Drop from './Pages/Drop'
import Market from './Pages/Market'
import Footer from './components/Footer/Footer'
import ProductPage from './Pages/ProductPage'


function App() {


  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/drop" element={<Drop />} />
        <Route path="market/*" element={<Market />} />
        <Route path='market/:id' element={<ProductPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
