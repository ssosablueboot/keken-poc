//import ComplementosParrillaContainer from '../../components/complementos-parrilla/complementos-parrilla-container.component';
import ItemProducto from '../../common/item-producto/item-producto.common';
import CrossSell from '../../common/cross-sell/cross-sell.common'

import HeroBanner from '../../common/hero-banner.common';
import HeroBannerImg from '../../images/acompañamiento/HERO_IMG.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProductosService  from '../../api/productos/productosService';

import './acompañamientos.page.css';

function Acompañamientos() {

    let productosService = ProductosService();
    let productos = productosService.productos.slice(0 , 3);
    return (
      <div>
          <HeroBanner title='COMPLEMENTA TU PARRILLA' subtitle='CONOCE LOS COMPLEMENTOS PARA CARNE ASADA QUE TE AYUDARÁN A CONQUISTAR LA PARRILLA' backgroundImg={HeroBannerImg}></HeroBanner>
          {/* <div className='cabecera-producto-img'>
            <h1 className='text-color-white'>TODO EL SABOR DEL CERDO A LA PARRILLA</h1>
            <span className='text-color-white'>CONOCE NUESTRA VARIEDAD DE CORTES CARNE DE CERDO</span>
          </div> */}
          <div className='background-color-gradient-black-grey div-acompañamiento-acompañamientos'>
            <div>            
              <Row>
                {productosService.acompañamientos.map(p => (              
                  <Col sm="12" md="12" xl="4" lg="6" className='div-acompañamiento-item-padding'>                    
                      <ItemProducto img={p.img} img2={p.img2} nombre={p.nombre} precio={p.precio} favorito={p.favorito}/>                                      
                  </Col>              
                ))}                  
              </Row>
            </div>
          </div>
          <div>
            <CrossSell backgroundImage={true} titulo={"Todo el sabor del cerdo a la parrilla"} subtitulo={"Conoce nuestra variedad de cortes de carne de cerdo."}
              items={productos}/>
          </div>
      </div>
    );
  }
  
  export default Acompañamientos;