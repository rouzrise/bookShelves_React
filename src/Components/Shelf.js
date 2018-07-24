import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


class Shelf extends React.Component {

  render() {

    //DESTRUCTURING
    const { bookCategory, bookCategoryName, updateBookShelf } = this.props;
    return (

        <div className="bookshelf">
        <h2 className="bookshelf-title">{bookCategoryName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {
              bookCategory.length &&
               bookCategory.map((book) => (
                <li key = {book.id}>
                  <Book book = {book}
                        updateBookShelf = {updateBookShelf} />
                </li>
              ))
              }
          </ol>
        </div>
        </div>
    )
  }
}

Shelf.propTypes = {
    updateBookShelf: PropTypes.func,
    bookCategory: PropTypes.array,
    bookCategoryName: PropTypes.string
}

export default Shelf;





