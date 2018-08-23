import {bookInit} from './initState';
import {book_to} from './initFn';
import createReducer from './createReducer';

let book = createReducer(bookInit,{'book_to':book_to});

export default book;