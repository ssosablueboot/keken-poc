import React from 'react';
import { Dash, Plus, QuestionCircle, Heart, HeartFill, Trash } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import CarritoCostillas from '../../images/carrito/Carrito-Costillas.png'

import '../../App.css'
import '../../index.css'
import './itemCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemCard = ({ img, title, qty, total, weight, price, discount, liked }) => {
    return (
        <div className="cont-flex card">
            <div className="img-cont">
                <div className="cont-block card-img" style={{ backgroundImage: `url(${CarritoCostillas})` }}></div>
                <div className="icon-cont">
                    <Link><HeartFill className="heart-icon"></HeartFill></Link>
                </div>
            </div>

            <div className="cont-center">
                <div className="info-cont-center">
                    <h4>Costillas ST Louis</h4>
                    <span>Este producto tiene el 20% de descuento.</span>
                    <p>Aprox 0.5 kg</p>
                    <p>$100.00 kg</p>
                </div>
                <div className="cont-counter cont-flex">
                    <button><Dash></Dash></button>
                    <p>01</p>
                    <button><Plus></Plus></button>
                </div>
            </div>

            <div className="cont-right">
                <div className="question-cont-right">
                    <button>
                        <QuestionCircle></QuestionCircle>
                    </button>
                </div>

                <div className="total-cont-right">
                    <p>$150.00</p>
                    <button>Eliminar</button>
                </div>

            </div>
        </div>
    )
}

export default ItemCard;