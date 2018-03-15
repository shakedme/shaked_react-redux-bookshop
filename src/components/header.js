import React, { Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {

    render(){
        return (
            <div className="header">
                 <h1 className="title">Shaked's Book Shop</h1>
                 <nav className="navbar navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <Link className="navbar-brand" to="/category/1">Fiction</Link>
                    <Link className="navbar-brand" to="/category/3">Poetry</Link>
                    <Link className="navbar-brand" to="/category/4">Science and Tech</Link>
                    <Link className="navbar-brand" to="/category/2">Education</Link>
                    <Link className="navbar-brand" to="/cart">Cart <span className="glyphicon glyphicon-shopping-cart"></span> </Link>
                </nav>
            </div>
        )
    }
}

export default Header;