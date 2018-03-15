import axios from 'axios';

export const key = "http://api.origin.berlin/book";
export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOK = 'GET_BOOK';
export const REMOVE_BOOK = 'DELETE_BOOK';
export const REMOVE_ALL = 'REMOVE_ALL';
export const PUSH_BOOK = 'PUSH_BOOK';
export const GET_CART = 'GET_CART';
export const TOTAL = 'TOTAL';



export function getBooks(){
    const request = axios.get(key);

    return {
        type: GET_BOOKS,
        payload: request
    }
}

export function getBook(id){
    const request = axios.get(key+"/"+id);

    return {
        type: GET_BOOK,
        payload: request
    }
}

export function pushBook(book){
    localStorage.setItem("book"+book.id, JSON.stringify(book));
    const books = loopLocalStorage();

    return {
        type: PUSH_BOOK,
        payload: loopLocalStorage()
    }
}

export function onRemoveAllHandler(){
    localStorage.clear();

    return {
        type: REMOVE_ALL,
        payload: []
    }
}

export function onRemoveHandler(id){
    localStorage.removeItem("book"+id);
    const books = loopLocalStorage();

    return {
        type: REMOVE_BOOK,
        payload: books
    }
}

export function getCart(){    
    const books = loopLocalStorage();

    return {
        type: GET_CART,
        payload: books
    }
}

export function calculateTotal(){
    let sum = 0;
    const books = loopLocalStorage();
    books.forEach(element => {
        sum += element.price;
    });
    // sum.toFixed(2);

    return {
        type: TOTAL,
        payload: sum
    }
}

function loopLocalStorage(){
    const books = [];
    for (var i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage[key];
        books.push(JSON.parse(value));
    }
    return books;
}