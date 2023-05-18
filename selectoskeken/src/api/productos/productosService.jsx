import React, { useState } from 'react';
import ARRACHERA from '../../images/producto/ARRACHERA.png';
import ARRACHERA_H from '../../images/producto/ARRACHERA_H.png';

import BABY_BACK_RIBS from '../../images/producto/BABY_BACK_RIBS.png';
import BABY_BACK_RIBS_H from '../../images/producto/BABY_BACK_RIBS_H.png';

import COSTILLA_ST_LOUIS from '../../images/producto/COSTILLA_ST_LOUIS.png';
import COSTILLA_ST_LOUIS_H from '../../images/producto/COSTILLA_ST_LOUIS_H.png';

import FILETE from '../../images/producto/FILETE.png';
import FILETE_H from '../../images/producto/FILETE_H.png';

import FILETE_PARRILLERO from '../../images/producto/FILETE_PARRILLERO.png';
import FILETE_PARRILLERO_H from '../../images/producto/FILETE_PARRILLERO_H.png';

import MEDALLON_DE_LOMO from '../../images/producto/MEDALLON_DE_LOMO.png';
import MEDALLON_DE_LOMO_H from '../../images/producto/MEDALLON_DE_LOMO_H.png';

import PORK_BELLY from '../../images/producto/PORK_BELLY.png';
import PORK_BELLY_H from '../../images/producto/PORK_BELLY_H.png';

import RACK_DE_LOMO_REBANADO from '../../images/producto/RACK_DE_LOMO_REBANADO.png';
import RACK_DE_LOMO_REBANADO_H from '../../images/producto/RACK_DE_LOMO_REBANADO_H.png';

import RIB_EYE from '../../images/producto/RIB_EYE.png';
import RIB_EYE_H from '../../images/producto/RIB_EYE_H.png';

import CHISTORRA from '../../images/acompañamiento/CHISTORRA.png';
import CHORIZO_ARGENTINO from '../../images/acompañamiento/CHORIZO_ARGENTINO.png';
import CHORIZO_ESPAÑOL from '../../images/acompañamiento/CHORIZO_ESPAÑOL.png';
import SALCHICHA_ASADERA from '../../images/acompañamiento/SALCHICHA_ASADERA.png';

//import arranchera_h from '../../images/producto/ARRANCHERA_H.png';
// let Logo = require('../../images/producto/ARRANCHERA.png');
// let arranchera_h = require('../../images/producto/ARRANCHERA_H.png');

function ProductosService () {

  let instance;

  function getProductos(){
    return [
        { 
            nombre: "ARRACHERA",
            precio: "$150.00",       
            img: ARRACHERA,
            img2: ARRACHERA_H,
            favorito: false,        
        },
        { 
            nombre: "BABY BACK RIBS",
            precio: "$150.00",       
            img: BABY_BACK_RIBS,
            img2: BABY_BACK_RIBS_H,
            favorito: true,        
        },
        { 
            nombre: "COSTILLA ST LOUIS",
            precio: "$150.00",       
            img: COSTILLA_ST_LOUIS,
            img2: COSTILLA_ST_LOUIS_H,
            favorito: false,
        },
        { 
            nombre: "FILETE",
            precio: "$150.00",       
            img: FILETE,
            img2: FILETE_H ,
            favorito: false,        
        },
        { 
            nombre: "FILETE PARRILLERO",
            precio: "$150.00",       
            img: FILETE_PARRILLERO,
            img2: FILETE_PARRILLERO_H ,
            favorito: false,        
        },
        { 
            nombre: "MEDALLON DE LOMO",
            precio: "$150.00",       
            img: MEDALLON_DE_LOMO,
            img2: MEDALLON_DE_LOMO_H ,
            favorito: false,        
        },
        { 
            nombre: "PORK BELLY",
            precio: "$150.00",       
            img: PORK_BELLY,
            img2: PORK_BELLY_H ,
            favorito: false,        
        },
        { 
            nombre: "RACK DE LOMO REBANADO",
            precio: "$150.00",       
            img: RACK_DE_LOMO_REBANADO,
            img2: RACK_DE_LOMO_REBANADO_H ,
            favorito: false,        
        },
        { 
            nombre: "RIB_EYE",
            precio: "$150.00",       
            img: RIB_EYE,
            img2: RIB_EYE_H  ,
            favorito: false,       
        }
    ];
  }

  function getAcompañamientos(){
    return [
        { 
            nombre: "CHISTORRA",
            precio: "$150.00 KG",       
            img: CHISTORRA,
            img2: undefined,
            favorito: false,        
        },
        { 
            nombre: "CHORIZO ARGENTINO",
            precio: "$150.00 KG",       
            img: CHORIZO_ARGENTINO,
            img2: undefined,
            favorito: false,        
        },
        { 
            nombre: "CHORIZO ESPAÑOL",
            precio: "$150.00 KG",       
            img: CHORIZO_ESPAÑOL,
            img2: undefined,
            favorito: false,        
        },
        { 
            nombre: "SALCHICHA ASADERA",
            precio: "$150.00 KG",       
            img: SALCHICHA_ASADERA,
            img2: undefined,
            favorito: false,        
        },
    ];
  }

  function createInstance() {  
    return {
      productos: getProductos(),      
    };
  }
   
   return {
    productos: getProductos(),
    acompañamientos: getAcompañamientos()
  };
};


export default ProductosService;