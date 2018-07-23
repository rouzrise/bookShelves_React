import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';

class ListBooks extends React.Component {

    state = {
      rating: null,
  }

  changeRating = (rating) => {
      this.setState ({
          rating: rating,
      })
  }

  render() {

     //DESTRUCTURING
     const { books, onUpdateBookShelf } = this.props;

    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
    const wantToRead = books.filter(book => book.shelf === 'wantToRead')
    const read = books.filter(book => book.shelf === 'read')

    let stars = [];
      
    for(let i = 0; i < 3; i++) {
      let style = 'star';
      
      if (this.state.rating >= i && this.state.rating != null) {
        style += ' is-selected';
      }

      stars.push(
        <label
          className={style}
          onClick={this.changeRating.bind(this, i)}
          >
          ★
        </label>
      );
    }

    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
            
              <div className="ratingFilter">
                {stars}
              </div>

              <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                     currentlyReading.length &&
                     currentlyReading.map((book) => (
                      <li key = {book.id}>
                        <Book book = {book}
                              onUpdateBookShelf = {onUpdateBookShelf} />
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
                              onUpdateBookShelf = {onUpdateBookShelf}/>
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
                              onUpdateBookShelf = {onUpdateBookShelf}/>
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


