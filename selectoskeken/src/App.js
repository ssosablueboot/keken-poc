import React from 'react';
import Navbar from './layout/navbar/navbar.layout';
import NavbarMobile from './layout/navbar/navbar-mobile.layout';
import Footer from './layout/footer/footer.layout';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.page'
import Productos from './pages/productos/productos.page'
import Carrito from './pages/carrito/carrito.page'
import CheckoutDelivery from './pages/checkout/CheckoutDelivery.page'
import CheckoutPayment from './pages/checkout/CheckoutPayment';
import Privacidad from './pages/privacidad/privacidad.page.jsx'
import Terminos from './pages/terminos/terminos.page.jsx'
import Devoluciones from './pages/devoluciones/devoluciones.page.jsx'
import Acompañamientos from './pages/acompañamientos/acompañamientos.page.jsx'

function App() {
  
  // Setea el menú de escritorio ó el de hamburguesa según el Viewport
  const [mobile, setMobile] = React.useState(false)
  window.addEventListener('resize', () => {document.documentElement.clientWidth > 600 ? setMobile(false) : setMobile(true)})

  return (
    <div className="App">      
      <BrowserRouter> 
      {mobile ? <NavbarMobile/> : <Navbar />}   
        <Routes>
          <Route exact path='/' element={<Home />}></Route>          
          <Route exact path='/productos' element={<Productos />}></Route>          
          <Route exact path='/carrito' element={<Carrito />}></Route>          
          <Route exact path='/checkout' element={<CheckoutDelivery />}></Route>          
          <Route exact path='/checkout/payment' element={<CheckoutPayment />}></Route>          
          <Route exact path='/terminos' element={<Terminos />}></Route>
          <Route exact path='/privacidad' element={<Privacidad />}></Route>
          <Route exact path='/devoluciones' element={<Devoluciones />}></Route>
          <Route exact path='/acompañamientos' element={<Acompañamientos />}></Route>     
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;