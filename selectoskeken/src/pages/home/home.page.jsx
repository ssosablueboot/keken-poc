import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../../images/Carousel1.svg';
import Carousel2 from '../../images/Carousel2.svg';
import Carousel3 from '../../images/Carousel3.svg';
import IlustracionCorteCerdo from '../../images/ilustracion-corte-cerdos.svg';
import ComplementosParrillaContainer from '../../components/complementos-parrilla/complementos-parrilla-container.component';
import CarouselCortesContainer from '../../components/carousel-cortes/carousel-cortes-container.component';
import CarouselMapa from '../../components/mapa/carousel-mapa.component';
import PostalCode from '../../common/formulario/PostalCode.component';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import './home.page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/pagination";


function Home() {
  return (
    <div>  
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: function(index, className) {
            return '<span class="' + className + '"><img class="pagination-bullet"/></span>';
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Carousel1} alt="" className='img-carousel'/></SwiperSlide>
        <SwiperSlide><img src={Carousel2} alt="" className='img-carousel'/></SwiperSlide>
        <SwiperSlide><img src={Carousel3} alt="" className='img-carousel'/></SwiperSlide>
      </Swiper>

      <CarouselCortesContainer />
      
      <CarouselMapa />
      
      <div className='background-seccion-validacion-cp'>
        <div>
          <h1 className='h1-validacion'>VALIDA TU CÓDIGO POSTAL</h1>
          <text className='txt-validacion'>Para validar la zona de cobertura, es necesario que especifiques el código postal al que se hará el envío de tu pedido.</text>
          <div className='div-i-btn-validacion'>
            <PostalCode>
              
            </PostalCode>
            {/* <input className='i-validacion' placeholder='Código Postal'></input>
            <button className='btn-dorado'>VALIDAR</button> */}
          </div>
        </div>
      </div>
      <ComplementosParrillaContainer backgrounImage={false}/>
      <div className='custom-sub-footer-home'>
        <div className='custom-div-sub-footer-home'>
          <img src={IlustracionCorteCerdo}></img>
          <div className='custom-div-sub-footer-home-texto'>
            <div className='custom-div-sub-footer-home-texto-div'>
              <h1 className='texto-blanco'>¿QUIÉN ES KEKÉN?</h1>
              <hr className='hr-text'></hr>
              <text className='texto-blanco'>Para los amantes de las parrillas que buscan la gloria en el sabor de la carne: Cortes
                Selectos Kekén abre un nuevo y delicioso camino con productos de cerdo 100%
                mexicanos respaldados por Kekén, líder en exportación a los mercados más
                exigentes del mundo. Somos una aventura de sabor distinta y deliciosa. Somos el
                placer del sabor del cerdo, ahora a la parrilla.
                Disfruta de la variedad en cortes selectos de cerdo que te ayudarán a sorprender a tus amigos y familiares cuando enciendas el fuego.</text>
              <button className='btn-dorado'>CONOCE MÁS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;