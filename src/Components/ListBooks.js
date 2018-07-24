import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import Shelf from './Shelf';
import PropTypes from 'prop-types';


class ListBooks extends React.Component {
  state = {
    bookCategoryName: ['Currently Reading', 'Want to read', 'Read']
  }

  render() {

    //DESTRUCTURING
    const { books, updateBookShelf } = this.props;
    const { bookCategoryName } = this.state;
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');

    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
          {console.log(currentlyReading)}
          <Shelf bookCategory ={currentlyReading}
                updateBookShelf = {updateBookShelf}
                bookCategoryName = {bookCategoryName[0]}/>
          <Shelf bookCategory ={books.filter(book => book.shelf === 'wantToRead')}
                updateBookShelf = {updateBookShelf}
                bookCategoryName = {bookCategoryName[1]}/>
          <Shelf bookCategory ={books.filter(book => book.shelf === 'read')}
                updateBookShelf = {updateBookShelf}
                bookCategoryName = {bookCategoryName[2]}/>

          </div>
      </div>

      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>

    </div>
    );
  }
}

ListBooks.propTypes = {
    books: PropTypes.array,
    updateBookShelf: PropTypes.func
}

export default ListBooks;


