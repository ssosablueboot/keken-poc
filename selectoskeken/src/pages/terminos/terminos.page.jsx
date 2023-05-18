import 'bootstrap/dist/css/bootstrap.min.css';
import {getDataParsed} from './terminos.page';
function Terminos() {
    var terminos = getDataParsed();
	return (
		<div className="App-space">
			<h1 style={{fontWeight: 'bold', padding: 0}}>TÉRMINOS Y CONDICIONES DE COMPRA</h1>
			<h4 className='Text-main-list'>ABRIL, 2020</h4>
            <ul className='Text-main-list-left'>{terminos}</ul>
		</div>
	);
}
export default Terminos;