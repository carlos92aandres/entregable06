import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import { Purchsases } from './pages/Purchsases'
import Product from './pages/Product'
import Header from './components/layaout/Header'
import NotFound from './pages/NotFound'
import Footer from './components/layaout/Footer'
import ProtectedAuth from './components/auth/ProtectedAuth'
import Cart from './components/cart/Cart'

function App() {
 

  return (
    <section className='font-["Yantramanav"]'> 
      <Header/>

      
     <Routes>

      <Route path='/' element={<Home/>}/>

      <Route path='/login' element={<Login/>}/>

      <Route element={<ProtectedAuth/>}>
      <Route path='/purchases' element={<Purchsases/>}/>

      </Route>


      <Route path='/products/:id' element={<Product/>}/>

      <Route path='/*' element={<NotFound/>}/>


      

     </Routes>
     <Cart/>
     <Footer/>
    </section>
  )
}

export default App
