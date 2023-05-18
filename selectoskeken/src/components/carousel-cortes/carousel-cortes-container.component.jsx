import CarouselCategoria from './carousel-categoria-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel-cortes-container-component.css';

function CarouselCortesContainer() {
  return (
    <div className='carousel-cortes-container'>
        <div className='carousel-cortes-subcontainer'>
            <span className='texto-blanco carousel-cortes-container-texto-cabecera'>LLÉVATE TODO EL SABOR DEL CERDO A LA PARRILLA</span>
            <div className='carousel-cortes-categoria-container'>
              <CarouselCategoria />
            </div>
        </div>        
    </div>
  )
};
export default CarouselCortesContainer;