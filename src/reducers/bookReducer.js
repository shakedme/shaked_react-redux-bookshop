import { GET_BOOKS, GET_BOOK, PUSH_BOOK, REMOVE_BOOK, GET_CART, REMOVE_ALL, TOTAL } from '../actions/index';

const initialState = {books : [], book: null, cart: [], total: 0 }

export default function (state = initialState, action){

    switch (action.type){
        case GET_BOOKS:
            return { ...state, books: action.payload}
        case GET_BOOK:
            return { ...state, book: action.payload}
        case PUSH_BOOK:
            return { ...state, cart: action.payload}
        case REMOVE_BOOK:
            return { ...state, cart: action.payload}
        case GET_CART:
            return { ...state, cart: action.payload}
        case REMOVE_ALL:
            return { ...state, cart: action.payload}
        case TOTAL:
            return { ...state, total: action.payload}
        default:
            return state;
    }
}