import React from 'react'
import { useSelector } from 'react-redux';
import Stack from 'react-bootstrap/Stack';
import ItemCard from '../../components/carrito/ItemCard'

import { Link } from 'react-router-dom';

import './CartOverview.component.css'

function Resumen({ cardsEnabled, total }) {

    const logged = useSelector((state) => state.logged)

    return (
        <Stack className="overview">
            <Stack direction="horizontal" className="overview-title-cont">
                <h3 className="title-h3">Resumen del pedido</h3>
                <h2 className="title-total">{total}</h2>
            </Stack>
            <p className="title-description red-font">Ten en cuenta que el peso de los productos es estimado, por lo que el total del importe de tu pedido puede variar en el cobro final. Con base en el peso final del producto, se ajustará el importe final y éstos se reflejarán en tu ticket de compra al entregar el producto.</p>
            {
                cardsEnabled &&
                <Stack direction='horizontal' gap={5} className="checkout-items-container">
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </Stack>
            }

            { !logged &&
                <Stack className="login-remember">
                    <p>Si tienes una cuenta inicia sesión <Link>aquí.</Link></p>
                </Stack>
            }
        </Stack>
    )
}

export default Resumen