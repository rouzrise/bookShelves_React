import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


class Shelf extends React.Component {

  render() {

    //DESTRUCTURING
    const { bookCategory, bookCategoryName, updateBookShelf } = this.props;

    // const currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
    // const wantToRead = books.filter(book => book.shelf === 'wantToRead')
    // const read = books.filter(book => book.shelf === 'read')

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
              {/* {console.log(bookCategory)} */}
          </ol>
        </div>
        </div>
    )
  }
}

// Shelf.propTypes = {
//     books: PropTypes.array,
//     updateBookShelf: PropTypes.func
// }

export default Shelf;





