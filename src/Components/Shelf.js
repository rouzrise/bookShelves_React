import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


const Shelf = ({ bookCategory, bookCategoryName, updateBookShelf }) => {
    
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

Shelf.propTypes = {
    updateBookShelf: PropTypes.func,
    bookCategory: PropTypes.array,
    bookCategoryName: PropTypes.string
}

export default Shelf;





