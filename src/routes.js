import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import AllBooks from './components/allBooks';
import OneBook from './components/oneBook';
import Cart from './components/cart';
import Category from './components/category';

export default (
      <Route path ="/" component={ App }>
            <IndexRoute component={ AllBooks }/>
            <Route path="books/:id" component={OneBook} />
            <Route path="cart" component={Cart} />
            <Route path="category/:id" component={Category} />
      </Route> 
); 