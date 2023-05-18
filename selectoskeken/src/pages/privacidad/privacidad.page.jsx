import './privacidad.page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getDataParsed} from './privacidad.page';

function Privacidad() {
	const privacidad = getDataParsed();
	return (
		<div className="App-space">
			<h1 className='Text-header-font'>AVISO DE PRIVACIDAD INTEGRAL</h1>
			<ul className='Text-main-list'>{privacidad}</ul>
		</div>
	);
}
export default Privacidad;