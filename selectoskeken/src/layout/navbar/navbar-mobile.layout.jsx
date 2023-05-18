import logo from '../../logo-dorado.svg';
import person from '../../icons/person.svg';
import buy from '../../icons/buy-car.svg';
import './navbar-mobile.layout.css'
import { Link, useNavigate } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

function NavbarMobile() {
    let history = useNavigate();

    return (
        <div>
            <div className='custom-navbar-mobile'>

                <Menu disableAutoFocus className='menu-div'>
                    <a className="menu-item navbar-button" href="/Productos">PRODUCTOS</a>
                    <a className="menu-item navbar-button" href="/Productos">ACOMPAÑAMIENTOS</a>
                </Menu>
                <img src={logo} className='navbar-img' alt="" onClick={() => history("/")} />
                {/* <Link to="/productos" className='navbar-button'>NUESTROS CORTES</Link>
                <Link to="/productos" className='navbar-button'>ACOMPAÑAMIENTOS</Link>
                <Link href='#' className='navbar-button'>CONOCENOS</Link>
                <Link href='#' className='navbar-button'>CREA PARRILLAS GLORIOSAS</Link>
                <Link href='#' className='navbar-button'>PROMOCIONES</Link> */}

                {/* <button className='navbar-button-icon'><img src={person} alt="" width="100%"/></button> */}
                <button className='navbar-button-icon'><img src={buy} alt="" width="100%" /></button>
            </div>
        </div>
    );
}

export default NavbarMobile;