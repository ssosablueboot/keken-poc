import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import ItemProducto from '../item-producto/item-producto.common';

import { Link } from 'react-router-dom';

import './cross-sell.common.css';

function CrossSell(prop) { 
  const [mobile, setMobile] = React.useState(false)
  window.addEventListener('resize', () => {document.documentElement.clientWidth > 1000 ? setMobile(false) : setMobile(true)})  

    return (
      <div className={ prop.backgroundImage === true ? 'background-cross-sell-img' : 'background-cross-sell-gradient'}>
          <div className='div-cabecera-cross-sell'>
              <h1 className='h1-cabecera-cross-sell'>{prop.titulo}</h1>
              <text className='text-cabecera-cross-sell'>{prop.subtitulo}</text>            
          </div>
          <div className='div-items-cross-sell'>
                {
                mobile ? 
                  <Swiper slidesPerView={"auto"}
                          spaceBetween={30}
                          modules={[Pagination]}
                          centeredSlides={true}>                    
                    {prop.items.map(p => (         
                      <SwiperSlide className='swiper-slide-width-none'><ItemProducto img={p.img} img2={p.img2} nombre={p.nombre} precio={p.precio} favorito={p.favorito}/></SwiperSlide>
                    ))}
                  </Swiper>
                :
                  prop.items.map(p => (         
                        <ItemProducto img={p.img} img2={p.img2} nombre={p.nombre} precio={p.precio} favorito={p.favorito}/>
                  ))
                
                }
          </div>  
          <div className='cont-btn-cross-sell'>
            <Link herf="#">Ver más</Link>
          </div>
      </div>
    );
  }
  
  export default CrossSell;