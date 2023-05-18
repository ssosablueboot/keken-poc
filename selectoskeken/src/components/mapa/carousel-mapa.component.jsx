import MapaItem from './mapa-item.component';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import ICampeche from '../../images/mapas/i-campeche.png';
import IChiapas from '../../images/mapas/i-chiapas.png';
import IGuanajato from '../../images/mapas/i-guanajuato.png';
import IPuebla from '../../images/mapas/i-puebla.png';
import IQuintana from '../../images/mapas/i-quintana.png';
import ITabasco from '../../images/mapas/i-tabasco.png';
import IYucatan from '../../images/mapas/i-yucatan.png';

import './mapa-item.component.css';

function CarouselMapa(){  
    return(
        <div className='background-seccion-encuentranos'>
            <h1 className='text-color-white'>ENCUÉNTRANOS EN:</h1>
            <Swiper
            slidesPerView={7}
            spaceBetween={7}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
            <SwiperSlide><MapaItem img={ICampeche} estado={'CAMPECHE'} ciudades={['Cd. De Campeche']}/></SwiperSlide>
            <SwiperSlide><MapaItem img={IChiapas} estado={'CHIAPAS'} ciudades={['Tuxtla Gutiérrez']}/></SwiperSlide>
            <SwiperSlide><MapaItem img={IGuanajato} estado={'GUANAJATO'} ciudades={['Irapuato', 'Próximamente León']}/></SwiperSlide>
            <SwiperSlide><MapaItem img={IPuebla} estado={'PUEBLA'} ciudades={['Cd. De Puebla']}/></SwiperSlide>
            <SwiperSlide><MapaItem img={IQuintana} estado={'QUINTANA ROO'} ciudades={['Cancún','Playa del Carmen (Solidaridad)']}/></SwiperSlide>
            <SwiperSlide><MapaItem img={ITabasco} estado={'TABASCO'} ciudades={['Villa Hermosa']}/></SwiperSlide>
            <SwiperSlide><MapaItem img={IYucatan} estado={'YUCATÁN'} ciudades={['Mérida']}/></SwiperSlide>
            </Swiper>
      </div>
    )
};
export default CarouselMapa;