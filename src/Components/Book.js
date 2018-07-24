import React from 'react'
import Rating from './Rating'
import PropTypes from 'prop-types';

const Book = ({book, updateBookShelf}) => {
  
        let encodedURI = encodeURI(book.title)
        let bookCover = `http://via.placeholder.com/128x193?text=${encodedURI}`

        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" 
                     style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : bookCover})`}}></div>
                <div className={`book-shelf-changer${book.shelf}`}>
                    <select value={book.shelf || 'none'} 
                            onChange={(e) => updateBookShelf(book, e)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select> 
                </div>
                </div>
                <Rating rating={book.rating}/>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.toString() : ''}</div>
            </div>
        )
}

Book.propTypes = {
    book: PropTypes.object,
    updateBookShelf: PropTypes.func
}

export default Book
