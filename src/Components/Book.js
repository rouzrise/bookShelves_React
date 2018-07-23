import React from 'react'
import Rating from './Rating'


class Book extends React.Component {

    

    
    render () {

         //DESTRUCTURING
        const { book, onUpdateBookShelf } = this.props;

        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`}}></div>
                <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(e) => onUpdateBookShelf(book, e)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select> 
                </div>
                </div>
                <Rating />
                <div className="book-title">{book.title ? book.title : ''}</div>
                <div className="book-authors">{book.authors ? book.authors.toString() : ''}</div>
            </div>
        )
    }
}

export default Book
