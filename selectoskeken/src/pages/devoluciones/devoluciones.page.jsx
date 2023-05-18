import 'bootstrap/dist/css/bootstrap.min.css';
import {getDataParsed} from './devoluciones.page'

function Devoluciones() {
    var devoluciones = getDataParsed();
	return (
		<div className="App-space">
			<h1 className='Text-header-font'>POLÍTICAS DE DEVOLUCIÓN O CAMBIO || SERVICIO A DOMICILIO</h1>
            <ul className='Text-main-list-left'>{devoluciones}</ul>
		</div>
	);
}
export default Devoluciones;