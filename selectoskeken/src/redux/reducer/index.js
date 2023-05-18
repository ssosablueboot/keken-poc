import {
    GET_LOGGED_STATE
}
    from "../actions/actionTypes"

// Este va a ser el estado inicial posta, el de abajo es por mockup

// const initialState = {
//     logged: false,
//     userBackendData: [],
//     favorites: [],
//     cart: [],
//     deliveryAddress: {},
//     deliveryContact: {},
//     deliveryDateTime: {},
//     paymentCardInfo: {},
//     paymentBillingInfo: {},
// }

// -- Mockup temporal --

const initialState = {
    logged: true,
    userBackendData: [{
        Direccion: ['Curabitur Interdum, Curabitur Finibus, No. 101, Vivamus, Vivamus sollicitudin', 'Curabitur, Curabitur Finibus, No. 102, Vivamus, Vivamus sollicitudin'],
        CP: 19650,
        Nombre: 'Nulla Egestas',
        Apellido: 'Tortor Pharetra',
        Telefono: '55 39025782',
        Email: 'nulla123@dominio.com',
    }],
    favorites: [],
    cart: [],
    deliveryAddress: {},
    deliveryContact: {},
    deliveryDateTime: {},
    paymentCardInfo: {},
    paymentBillingInfo: {},
}

export default function showtimesReducer(state = initialState, action) {
    switch (action.type) {

        case GET_LOGGED_STATE:
            return {
                ...state,
                logged: state.logged
            }

        default:
            return {
                ...state,
            };
    }
}