import React from 'react'
import Book from './Book'
import {Link} from 'react-router-dom';
import * as BooksAPI from './../BooksAPI';
import PropTypes from 'prop-types';

class Search extends React.Component {

  state = {
    query: '',
    showingBooks: []
  }

  setShelf = (books) => {
    books.map(book => (this.props.books.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
  }

   updateQuery = (query) => {
    this.setState({query: query}) //this is done so that everything you print in searchbox could be reflected on the page
    
      if (query.trim() === '') {
          this.setState({showingBooks: []})
          console.log(this.state.showingBooks, "print some possible words in query - 'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'")
      }

      else {
        BooksAPI.search(query).then(response => {
        if (response.error) {
          this.setState({showingBooks: []})
                          // automatically making query empty is not ok here as soon as it can confuse user
                          // query: ''}) 
          console.log(this.state.showingBooks, "Error:", response.error, ". If error you see is 'empty query' it means you are searching for invalid words. Please try these ones - 'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'")

        }
        else {
          //No need to do line below as soon as 'none' is automatically set for the book with no book.shelf in Book.js
          // response.map(b => b.shelf='none')
          this.setShelf(response)
          this.setState({showingBooks: response})
          console.log(this.state.showingBooks, 'Hurrah')
        }
      })
    }
   }

  render() {

    //DESTRUCTURING
    const {updateBookShelf } = this.props;
    const {query, showingBooks} = this.state;

    return (
          <div className="search-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            
            <div className="search-books-bar">
              <Link className="close-search" to='/bookShelves_React'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(e) => this.updateQuery(e.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  showingBooks.map((book) => 
                  (
                    <li key={book.id}>
                      <Book book={book} updateBookShelf={updateBookShelf} />
                  </li> 
                  ))
              
                }
              </ol>
            </div>
          </div>
    )
}
}

Book.propTypes = {
  updateBookShelf: PropTypes.func
}

export default Search
