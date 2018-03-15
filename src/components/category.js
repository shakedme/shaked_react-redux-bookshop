import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './header';
import {Link} from 'react-router';
import {getBooks} from '../actions/index';

class Category extends Component {

    componentWillMount(){
        this.props.getBooks();
    }

    renderCategory(){
        if (this.props.books){
            return this.props.books.map((book)=>{
                if (book.category_id == this.props.params.id) {
                    return (
                        <Link key={book.id} to={"/books/"+book.id}>
                        <div className="col-lg-3 text-center">
                            <img className="book" src={book.image} alt="logo"/>
                        </div>
                        </Link>
                    )
                }
            })
        } return <div>Loading...</div>
    }
       

    render(){
        return (
            <div>
                <Header />
                <div className="container">
                    {this.renderCategory()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        books: state.data.books.data
    }
}

export default connect(mapStateToProps, {getBooks})(Category);