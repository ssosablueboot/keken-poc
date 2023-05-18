import React, { useState } from 'react';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { Plus } from 'react-bootstrap-icons';
import { Dash } from 'react-bootstrap-icons';

import './item-producto.common.css'


class ItemProducto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: "01",
      img: props.img,
      favorito: props.favorito,
      props: props
    };

    this.sumarItem = this.sumarItem.bind(this);
    this.restarItem = this.restarItem.bind(this);
    this.favorito = this.favorito.bind(this);
  }

  favorito(){    
    this.setState({ favorito : !this.state.favorito });
  }

  sumarItem(){
    let cantidad = this.state.cantidad;
    cantidad = parseInt(cantidad);
    if(!isNaN(cantidad)){
      cantidad ++;
      cantidad = this.formatearNumero(cantidad);
      this.setState({ cantidad : cantidad });
    }
    else{
      this.setState({ cantidad : "01" })
    }
  }

  restarItem(){
    let cantidad = this.state.cantidad;
    cantidad = parseInt(cantidad);
    if(!isNaN(cantidad) && cantidad > 1){
      cantidad --;
      cantidad = this.formatearNumero(cantidad);
      this.setState({ cantidad : cantidad });
    }
    else{
      this.setState({ cantidad : "01" })
    }
  }

  formatearNumero(n){
    if(n < 10){
      n = "0" + n;
    }
    else{
      n = n.toString();
    }

    return n;
  }

  render() {
    return (
           <div className='div-item-producto-block'>
          <div className='div-img-item-producto-common'>
              <img className='img-item-producto-common' src={this.state.img}></img>
              <button className='btn-item-producto-common-like' onClick={this.favorito}>{this.state.favorito === true ? <HeartFill></HeartFill> : <Heart></Heart> }</button>
              <span className='span-item-producto-common-img-descripcion'>{this.state.props.nombre}</span>
          </div>
          <div className='div-cantidad-complementos-parrilla-item'>
              <button class='btn-item-producto-common-menos-mas' onClick={this.restarItem}><Dash></Dash></button>
              <span className='text-color-white span-item-producto-common-contador'>{this.state.cantidad}</span>
              <button class='btn-item-producto-common-menos-mas' onClick={this.sumarItem}><Plus></Plus></button>
          </div>
          <div className='div-item-producto-common-precio'>
              <div className='div-item-producto-common-peso-aprox text-item-producto-common-peso'>
                <span className='text-color-white'>aprox. 0.50 kg</span>
                <span className='text-color-white'>paquete</span>
              </div>            
              <span className='text-color-white text-item-producto-common-precio'>{this.state.props.precio}</span>
          </div>
          <div className='div-item-producto-common-agregar-item'>
            <button className='btn-dorado btn-item-producto-common-agregar-item'
              onMouseEnter={() => this.state.props.img2 ? this.setState({ img : this.state.props.img2 }) : false }
              onMouseOut={() => this.setState({ img : this.state.props.img })}
            >AÑADIR AL CARRITO
               
            </button>
          </div>  
        </div> 
    );
  }
}

export default ItemProducto;