import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import Header from './header';
import {getBook, pushBook} from '../actions/index';

class OneBook extends Component {
    
    componentWillMount(){
        this.props.getBook(this.props.params.id);
    }
    
    render(){
        if (this.props.book) {
            const book = this.props.book.data;
            return(
                <div>
                    <Header />
                    <div id="bookContainer" className="container">
                        <div className="row">
                        <div className="col-lg-2 onebook">
                            <img src={book.image} alt="logo"/>
                        </div>
                        <div className="col-lg-7 oneBook">
                            <h3 className="text-center">{book.title}</h3>
                        </div>
                        <div className="col-lg-3 oneBook">
                            <h4><strong>Author: </strong>{book.author}</h4>
                            <h4><strong>Price: </strong>{book.price}$</h4>
                            <h4><strong>Rating: </strong>{book.rating}</h4>
                            <h4><strong>Reviews: </strong>{book.reviews}</h4>
                            <Link to="/"><button onClick={() => {this.props.pushBook(book)} } className="btn btn-primary">Add to cart</button></Link>
                        </div>
                        </div>
                    </div>
                </div>
            );
        } return <h1>Loading..</h1>
    };
}


function mapStateToProps(state){
    return {
         book: state.data.book
        }
}

export default connect(mapStateToProps, {getBook,pushBook})(OneBook);