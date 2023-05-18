import IArrancheraCerdo from '../../images/categoria-cortes/i-arrancheracerdo.png';
import IBabyBackRibs from '../../images/categoria-cortes/i-babybackribs.png';
import ICostillaSTLouis from '../../images/categoria-cortes/a-costillastlouis.png';
import IFilete from '../../images/categoria-cortes/i-filete.png';
import IFileteParrillero from '../../images/categoria-cortes/i-fileteparrillero.png';
import IMedallon from '../../images/categoria-cortes/i-medallon.png';
import IParrilla from '../../images/categoria-cortes/i-parrilla.png';
import IPorkbelly from '../../images/categoria-cortes/i-porkbelly.png';
import ITocino from '../../images/categoria-cortes/i-tocino.png';
import IRackLomoRebanado from '../../images/categoria-cortes/i-racklomorebanado.png';
import IRibeye from '../../images/categoria-cortes/i-ribeye.png';
import ICostillaSTLouisC from './costilla st louis.png';

import { Heart } from 'react-bootstrap-icons';
import { Plus } from 'react-bootstrap-icons';
import { Dash } from 'react-bootstrap-icons';
import IInfo from '../../icons/info.png';

import ChevronBack from '../../icons/carousel/chevron-back.png';
import ChevronFoward from '../../icons/carousel/chevron-foward.png';

import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel-categoria-component.css';

function CarouselCategoria() {
    return (
        <div className='carousel-categoria-container'>
            <Carousel slide={false} indicators={false} interval={null}>
                <Carousel.Item>
                    <div className='carousel-categoria-subcontainer'>
                        <div className='carousel-categoria-item'>
                            <img src={IArrancheraCerdo} alt="" />
                            <span className='texto-blanco'>ARRANCHERA DE CERDO</span>
                        </div>
                        <div className='carousel-categoria-item'>
                            <img src={IBabyBackRibs} alt="" />
                            <span className='texto-blanco'>BABY RACK RIBS</span>
                        </div>
                        <div className='carousel-categoria-item'>
                            <img src={ICostillaSTLouis} alt="" />
                            <span className='texto-blanco'>COSTILLA ST LOUIS</span>
                        </div>
                        <div className='carousel-categoria-item'>
                            <img src={IFilete} alt="" />
                            <span className='texto-blanco'>FILETE</span>
                        </div>
                        <div className='carousel-categoria-item'>
                            <img src={IFileteParrillero} alt="" />
                            <span className='texto-blanco'>FILETE PARRILLERO</span>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='carousel-categoria-subcontainer'>
                        <div className='carousel-categoria-item'>
                            <img src={IMedallon} alt="" />
                            <span className='texto-blanco'>MEDALLON</span>
                        </div>
                        <div className='carousel-categoria-item'>
                            <img src={IPorkbelly} alt="" />
                            <span className='texto-blanco'>PORK BELLY</span>
                        </div>
                        <div className='carousel-categoria-item'>
                            <img src={IRackLomoRebanado} alt="" />
                            <span className='texto-blanco'>RACK LOMO REBANADO</span>
                        </div>
                        <div className='carousel-categoria-item'>
                            <img src={IRibeye} alt="" />
                            <span className='texto-blanco'>RIBEYE</span>
                        </div>
                        <div className='carousel-categoria-item'>
                            <img src={ITocino} alt="" />
                            <span className='texto-blanco'>TOCINO</span>
                        </div>
                        <div className='carousel-categoria-item'>
                            <img src={IParrilla} alt="" />
                            <span className='texto-blanco'>PARRILLA</span>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className='inner-carousel-categoria-container'>
                <div className='inner-carousel-categoria-div-imagen'>
                    <Carousel interval={null} controls={false}>
                        <Carousel.Item>
                            <div>
                                <img src={ICostillaSTLouisC} alt="" className='inner-carousel-categoria-imagen' />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='inner-carousel-categoria-div-texto'>
                    <span className='text-color-gold inner-carousel-categoria-div-texto-titulo'>COSTILLA ST LOUIS</span>
                    <span className='text-color-white inner-carousel-categoria-div-texto-descripcion mg-top-20-px'>
                        Se obtienen del centro del costillar del cerdo. Es una costilla larga con carne pegada al hueso lo que le da suavidad y jugosidad. De más rápida cocción que una costilla tradicional, ideal para cocinarse a la parrilla a fuego lento con el marinado de tu elección.
                    </span>
                    <div className='mg-bottom-16-px mg-top-16-px'><img src={IInfo} className='inner-carousel-categoria-icon-info'></img><span className='text-color-white inner-carousel-categoria-texto-aprox-kilo'>aprox. 0.50 kg  - precio variable $100.00 Kg</span></div>
                    <div className='inner-carousel-categoria-div-precio-agregar'>
                        <div>
                        <div className=''>
                            <button class='inner-carousel-categoria-button-menos-mas'><Dash></Dash></button>
                            <span className='text-color-white'>01</span>
                            <button class='inner-carousel-categoria-button-menos-mas'><Plus></Plus></button>
                        </div>
                        </div>
                        <span className='text-color-white inner-carousel-categoria-texto-precio mg-top-10-px'>$150.00 KG</span>
                        <button className='btn-dorado mg-top-20-px'>AÑADIR A CARRITO</button>
                    </div>
                </div>
            </div>
            {/* <div className='carousel-categoria-subcontainer'>
            <div className='carousel-categoria-container-nav-button'>
            <button className='carousel-categoria-nav-button'><img src={ChevronBack} alt="" width="100%"/></button>
            </div>            
            <div className='carousel-categoria-item'>
                <img src={IArrancheraCerdo} alt="" />
                <span className='texto-blanco'>ARRANCHERA DE CERDO</span>
            </div>
            <div className='carousel-categoria-item'>
                <img src={IBabyBackRibs} alt="" />
                <span className='texto-blanco'>BABY RACK RIBS</span>
            </div>
            <div className='carousel-categoria-item'>
                <img src={ICostillaSTLouis} alt="" />
                <span className='texto-blanco'>COSTILLA ST LOUIS</span>
            </div>
            <div className='carousel-categoria-item'>
                <img src={IFilete} alt="" />
                <span className='texto-blanco'>FILETE</span>
            </div>
            <div className='carousel-categoria-container-nav-button'>
            <button className='carousel-categoria-nav-button'><img src={ChevronFoward} alt="" width="100%"/></button>
            </div>            
        </div>         */}
        </div>
    )
};
export default CarouselCategoria;