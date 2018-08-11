import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import PropTypes from 'prop-types';


class ListBooks extends React.Component {

  render() {

    //DESTRUCTURING
    const { books, updateBookShelf } = this.props;

    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
          <Shelf bookCategory ={books.filter(book => book.shelf === 'currentlyReading')}
                updateBookShelf = {updateBookShelf}
                bookCategoryName = {'Currently Reading'}/>
          <Shelf bookCategory ={books.filter(book => book.shelf === 'wantToRead')}
                updateBookShelf = {updateBookShelf}
                bookCategoryName = {'Want to read'}/>
          <Shelf bookCategory ={books.filter(book => book.shelf === 'read')}
                updateBookShelf = {updateBookShelf}
                bookCategoryName = {'Read'}/>

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


