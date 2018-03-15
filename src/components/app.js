import React, { Component } from 'react';
import AllBooks from './allBooks';

export default class App extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
