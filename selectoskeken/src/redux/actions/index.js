import axios from "axios";
import { 
    GET_LOGGED_STATE} 
from "./actionTypes";

// export function getReservations() {
//     return async (dispatch) => {
//         try {
//             const { data } = await axios.get("", { headers: { "user": accessToken } })
//             return dispatch({ type: "", payload: data })

//         } catch (e) {
//             console.log(e)
//         }
//     }
// }

export function getLoggedState(){
    return {
        type: GET_LOGGED_STATE
    }
}