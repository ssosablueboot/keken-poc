import { Heart } from 'react-bootstrap-icons';
import { Plus } from 'react-bootstrap-icons';
import { Dash } from 'react-bootstrap-icons';

import './complementos-parrilla-item.component.css'


function ComplementosParrillaItem(props) { 

  return (
    <div className=''>
        <div className='div-img-complementos-parrilla-item'>
            <img className='img-complementos-parrilla-item' src={props.img}></img>
            <button className='btn-complementos-parrilla-item-like'><Heart></Heart></button>
            <span className='span-complementos-parrilla-item-img-descripcion'>{props.nombre}</span>
        </div>
        <div className='div-cantidad-complementos-parrilla-item'>
            <button class='btn-complementos-parrilla-item-menos-mas'><Dash></Dash></button>
            <span className='text-color-white span-complementos-parrilla-item-contador'>01</span>
            <button class='btn-complementos-parrilla-item-menos-mas'><Plus></Plus></button>
        </div>
        <div className='div-precio-complementos-parrilla-item'>
            <div className='div-complementos-parrilla-item-peso-aprox text-complementos-parrilla-peso'>
              <span className='text-color-white'>aprox. 0.50 kg</span>
              <span className='text-color-white'>paquete</span>
            </div>            
            <span className='text-color-white text-complementos-parrilla-item-precio'>$150.00 KG</span>
        </div>
        <div className='div-complementos-parrilla-agregar-item'>
          <button className='btn-dorado btn-complementos-parrilla-agregar-item'>AÑADIR AL CARRITO</button>
        </div>                
    </div>
  );
}

export default ComplementosParrillaItem;