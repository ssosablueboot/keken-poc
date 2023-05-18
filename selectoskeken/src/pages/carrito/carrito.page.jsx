import { Link } from 'react-router-dom';
import ItemCard from '../../components/carrito/ItemCard.jsx';
import HeroBanner from '../../common/hero-banner.common';
import ComplementosParrillaItem from '../../components/complementos-parrilla/complementos-parrilla-item.component';
import ComplementosParrillaContainer from '../../components/complementos-parrilla/complementos-parrilla-container.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carrito.page.css';
import '../../App.css';
import '../../index.css';

function Carrito() {
  return (
    <div>
      <div className="cart">
        <HeroBanner title='Tus compras'></HeroBanner>
      </div>

      <section className='cont-flex purchases-section'>
        <div className="cont-flex purchases-sub-container">
          <div className="cont-block purchases-items-container">
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <ItemCard></ItemCard>
            <div className="cont-block purchases-buy-more-container">
              <p>¿Llevas lo necesario para tu parrilla gloriosa? Revisa más productos para complementarla.</p>
              <div className="cont-flex purchases-links-container">
                <Link href="#">Ver más cortes</Link>
                <Link href="#">Ver acompañamientos</Link>
              </div>
            </div>
          </div>

          <div className="cont-block purchases-total-container">
            <p>Esto es lo que llevas hasta el momento.</p>
            <p>Realiza el pago de tu pedido.</p>
            <span>Total: $570.00</span>
            <button className="btn-dorado">Comprar</button>
          </div>
        </div>
      </section>

      <div className="cont-cross-sell">
        <div className='cards-cont'>
          <ComplementosParrillaContainer backgroundImage={true}>
            <ComplementosParrillaItem></ComplementosParrillaItem>
            <ComplementosParrillaItem></ComplementosParrillaItem>
            <ComplementosParrillaItem></ComplementosParrillaItem>
          </ComplementosParrillaContainer>
        </div>
      </div>
    </div >
  );
}

export default Carrito;