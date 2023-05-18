import './mapa-item.component.css';

function MapaItem(prop){
    if(prop.ciudades && prop.ciudades.length){}

    return(
        <div className='mapa-item-div-container'>
            <img src={prop.img} className="mapa-item-img"></img>
            <div>
                <h3 className='text-color-white mapa-item-titulo'>{prop.estado}</h3>
                if(prop.ciudades && prop.ciudades.length){                    
                    prop.ciudades.map(texto => (  
                    <li className='text-color-white mapa-item-sub-listado'>  
                        {texto}  
                    </li>  
                    ))                    
                }
            </div>
        </div>
    )
};
export default MapaItem;