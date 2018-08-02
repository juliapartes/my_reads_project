import React, { Component } from 'react';
import BookShelf from './BookShelf.js'
import { Link } from 'react-router-dom';

/*The Main Page component*/

class MainPage extends Component {

	render() {
		const { books, shelfChanger } = this.props;

		return (
		   <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
              	<BookShelf 
              	  title="Currently Reading"
		          books={books}
		          shelfChanger={shelfChanger}
		          shelf="currentlyReading"
              	/>
              	<BookShelf
              	  title="Want To Read"
		          books={books}
		          shelfChanger={shelfChanger}
		          shelf="wantToRead"

              	/>
              	<BookShelf
                  title="Read"
		          books={books}
		          shelfChanger={shelfChanger}
		          shelf="read"
              	/>
              </div>

            </div>

            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
		);
	}
}

export default MainPage;