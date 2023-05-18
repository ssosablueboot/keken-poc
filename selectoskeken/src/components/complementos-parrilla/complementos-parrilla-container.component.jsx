import { Link } from 'react-router-dom';
import ComplementosParrillaItem from './complementos-parrilla-item.component';
import Img1 from '../../images/complementos-ch.png'
import Img2 from '../../images/complementos-ch-ar.png'
import Img3 from '../../images/complementos-ch-es.png'

import './complementos-parrilla-container.component.css'

function ComplementosParrillaContainer(prop) { 

  return (
    <div className={ prop.backgroundImage === true ? 'background-seccion-complementos-parrilla-img' : 'background-seccion-complementos-parrilla-gradient'}>
        <div className='div-cabecera-seccion-complementos-parrilla'>
            <h1 className='h1-seccion-complementos-parrilla'>COMPLEMENTA TU PARRILLA</h1>
            <text className='text-seccion-complementos-parrilla'>Conoce los complementos para carne asada que te ayudarán a conquistar la parrilla.</text>            
        </div>
        <div className='items-seccion-complementos-parrilla'>
            <ComplementosParrillaItem nombre={'CHISTORRA'} img={Img1} />
            <ComplementosParrillaItem nombre={'CHORIZO ARGENTINO'} img={Img2}/>
            <ComplementosParrillaItem nombre={'CHORIZO ESPAÑOL'} img={Img3}/>
        </div>

        <div className='cont-btn-cross-sell'>
          <Link herf="#">Ver más</Link>
        </div>
    </div>
  );
}

export default ComplementosParrillaContainer;