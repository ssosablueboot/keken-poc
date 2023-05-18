import logo from '../../logo-dorado.svg';
import instagram from '../../icons/instagram.svg';
import './footer.layout.css'
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
  let history = useNavigate();

  return (
    <div className='custom-footer'>
        <div className='footer-navigation-content'>
            <img src={logo} className='footer-img img-fluid'/>
            <button className='footer-button-icon'><img src={instagram} alt="" width="100%"/></button>
            <Link to="/productos" className='footer-link'>CONTÁCTANOS</Link>
            <Link to="/productos" className='footer-link'>PREGUNTAS FRECUENTES</Link>
            <Link to='/terminos' className='footer-link'>TÉRMINOS Y CONDICIONES</Link>
            <Link to='/privacidad' className='footer-link'>AVISO DE PRIVACIDAD</Link>
            <Link to='/devoluciones' className='footer-link'>POLÍTICAS DE DEVOLUCIONES</Link> 
       </div> 
       <div className='footer-content-line'><hr className='footer-line'></hr></div> 
       <div className='footer-text-content'>
            <label className='footer-text'>© Todos los derechos reservados Grupo Porcícola Mexicano 2023</label>
        </div>        
    </div>
  );
}

export default Footer;