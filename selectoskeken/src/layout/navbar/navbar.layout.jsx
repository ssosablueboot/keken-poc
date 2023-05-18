import logo from '../../logo-dorado.svg';
import person from '../../icons/person.svg';
import buy from '../../icons/buy-car.svg';
import './navbar.layout.css'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  let history = useNavigate();

  return (
    <nav className='custom-navbar'>
       <img src={logo} className='navbar-img' alt="" onClick={() => history("/")}/>
       <Link to="/productos" className='navbar-button'>NUESTROS CORTES</Link>
       <Link to="/acompañamientos" className='navbar-button'>ACOMPAÑAMIENTOS</Link>
       <Link href='#' className='navbar-button'>CONOCENOS</Link>
       <Link href='#' className='navbar-button'>CREA PARRILLAS GLORIOSAS</Link>
       <Link href='#' className='navbar-button'>PROMOCIONES</Link>

       <button className='navbar-button-icon'><img src={person} alt="" width="100%"/></button>
       <button className='navbar-button-icon'><img src={buy} alt="" width="100%"/></button>       
    </nav>
  );
}

export default Navbar;