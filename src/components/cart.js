import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './header';
import {onRemoveHandler, getCart, onRemoveAllHandler, calculateTotal} from '../actions/index';

class Cart extends Component {

    componentWillMount(){
        this.props.getCart();
    }

    componentWillReceiveProps(){
        this.props.calculateTotal();
    }

    renderCart(){
        if (this.props.cart.length != 0) {
            return this.props.cart.map((book)=>{
                this.sum += book.price;
                return (
                    <tr key={book.id}>
                        <td><img src={book.image} width="100" height="100" /></td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.rating}</td>
                        <td>{book.price}$</td>
                        <td><button className="btn btn-danger" onClick={() => {this.props.onRemoveHandler(book.id)}}>Remove</button></td>
                    </tr>
                )
            })
        }
        return <tr><td><h3>Please add books to your cart...</h3></td></tr>
    }
    
    render(){
        return (
            <div>
                <Header />
                <div className="container" id="tableContainer">
                    <h1 className="text-center">My Books</h1>  
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Cover</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Rating</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody id="cartTable">
                        {this.renderCart()}
                        </tbody>
                    </table>
                    <button className="btn btn-danger" onClick={() => {this.props.onRemoveAllHandler()}}>Remove All</button>
                    <h3 className="pull-right">Total: {this.props.total}$ </h3>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
         cart: state.data.cart,
         total: state.data.total
    }
}

export default connect(mapStateToProps, {onRemoveHandler, getCart, onRemoveAllHandler, calculateTotal})(Cart);