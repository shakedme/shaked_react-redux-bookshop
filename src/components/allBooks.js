import React, {Component} from 'react';
import {getBooks, getBook} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './header';
import {Link, Redirect} from 'react-router';

class AllBooks extends Component {

    componentWillMount(){
        this.props.getBooks();
    }

    renderBooks(){
            if (this.props.books){
            return this.props.books.map((book) => {
                return (
                <Link key={book.id} to={"/books/"+book.id}>
                <div className="col-lg-3 text-center">
                     <img className="book" src={book.image} alt="logo"/>
                </div>
                </Link>
                );
           });
        }
    }

    render(){
        return(
            <div>
                <div>
                    <Header />
                </div>
                <div className="container">
                        {this.renderBooks()}
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

function mapDispatchToProps(dispatch){
	return bindActionCreators({getBooks}, dispatch)
}

export default connect(mapStateToProps,{getBooks})(AllBooks);