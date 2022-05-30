import { ADD_ITEM, REMOVE_FROM_CART, SUB_ITEM, ADD_TO_CART } from "../types";
import { cartItems } from "../../constant";

let memCart = [];

if (localStorage.getItem(cartItems)) {
    memCart = JSON.parse(localStorage.getItem(cartItems))
}

const initialState = {
    cart: memCart,
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART: {
            const index = state.cart.findIndex(item => item.id === action.item.id);
            if (index === -1) {
                state.cart.push(action.item);
                localStorage.setItem(cartItems, JSON.stringify(state.cart));
                return { ...state };
            }
            return state;
        }

        case REMOVE_FROM_CART: {
            state.cart = [...state.cart.filter(item => item.id !== action.id)];
            localStorage.setItem(cartItems, JSON.stringify(state.cart));
            return { ...state }
        }


        case ADD_ITEM: {
            state.cart.map(item => item.id === action.id ? (item.amount += 1) : item)
            localStorage.setItem(cartItems, JSON.stringify(state.cart));
            return { ...state };
        }
        case SUB_ITEM: {
            let index = state.cart.findIndex(item => item.id === action.id);
            let shoe = state.cart[index];
            if (shoe.amount > 1) {
                shoe.amount -= 1;
                localStorage.setItem(cartItems, JSON.stringify(state.cart));
                return { ...state };
            }
            else if (shoe.amount === 1) {
                state.cart = [...state.cart.filter(item => item.id !== action.id)];
                localStorage.setItem(cartItems, JSON.stringify(state.cart));
                return { ...state };
            }
        }
            break;
        default:
            return state
    }
}