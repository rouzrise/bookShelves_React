import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';

class ListBooks extends Component {

  render() {

    const currentlyReading = this.props.books.filter(book => book.shelf === 'currentlyReading')
    const wantToRead = this.props.books.filter(book => book.shelf === 'wantToRead')
    const read = this.props.books.filter(book => book.shelf === 'read')

    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                     currentlyReading.length &&
                     currentlyReading.map((book) => (
                      <li key = {book.id}>
                        <Book book = {book}
                              onUpdateBookShelf = {this.props.onUpdateBookShelf}/>
                      </li>
                    ))
                    }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                     wantToRead.length &&
                     wantToRead.map((book) => (
                      <li key = {book.id}>
                        <Book book = {book}
                              onUpdateBookShelf = {this.props.onUpdateBookShelf}/>
                      </li>
                    ))
                    }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                     read.length &&
                     read.map((book) => (
                      <li key = {book.id}>
                        <Book book = {book}
                              onUpdateBookShelf = {this.props.onUpdateBookShelf}/>
                      </li>
                    ))
                    }
                </ol>
              </div>
            </div>
          </div>
      </div>

      <div className="open-search">
        <Link to='/search'>Add a book</Link>
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


