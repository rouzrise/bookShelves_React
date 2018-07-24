import React from 'react'
import './App.css'
import ListBooks from './Components/ListBooks';
import Search from './Components/Search';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';


class BooksApp extends React.Component {
  state = {
    books: [],
    query: '',
    showingBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    } )
  }

  updateBookShelf = (book, e) => {
    const shelf = e.target.value
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf
        // this.setState({
        //   showingBooks: this.state.books.filter(b => b.id !== book.id).concat([book])
        // })
        BooksAPI.getAll().then((books) => {
          this.setState({books: books})
        } )
      })
    }
  } 


  setShelf = (books) => {
    books.map(book => (this.state.books.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
  }

   updateQuery = (query) => {
    this.setState({query: query}) //this is done so that everything you print in searchbox could be reflected on the page
    
      if (query.trim() === '') {
          this.setState({showingBooks: []})
          console.log("print some possible words in query - 'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'")
      }

      else {
        BooksAPI.search(query).then(response => {
        if (response.error) {
          this.setState({showingBooks: []})
                          // automatically making query empty is not ok here as soon as it can confuse user
                          // query: ''}) 
          console.log("Error:", response.error, ". If error you see is 'empty query' it means you are searching for invalid words. Please try these ones - 'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'")

        }
        else {
          response.map(b => b.shelf='none')
          this.setShelf(response)
          this.setState({showingBooks: response})
        }
      })
    }
   }


  render() {

    //DESTRUCTURING
    const { query, showingBooks, books} = this.state;

    return (
      <div className="app">

      <Route exact path='/search' render={() => (
      <Search query={query} 
              updateQuery={this.updateQuery} 
              updateBookShelf={this.updateBookShelf} 
              showingBooks={showingBooks}
              />
      )} />

      <Route exact path='/' render= {() => (
            <ListBooks books={books} 
                       updateBookShelf={this.updateBookShelf}/>
      )} />

      </div>
    )
  }
}

export default BooksApp
