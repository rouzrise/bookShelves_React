import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class ListBooks extends Component {

  render() {
    return (
        <div className="list-books">

            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            
            <div className="list-books-content">
                <BookShelf />
            </div>
            
            <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
      </div>
    
    );
  }
}

// ProjectItem.propTypes = {
//     project: PropTypes.object,
//     onDelete: PropTypes.func
// }

export default ListBooks;


