import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI.js'
import Book from './Book.js';
import { Link } from 'react-router-dom';

/*The Search Page component*/

class SearchPage extends Component {
	state = {
		query: '',
		searcheResults: []
	}

	updateQuery = (query) => {
		this.setState({ query })
		this.updateSearcheResults(query);
	}

	updateSearcheResults = (query) => {
		if(query) {
		BooksAPI.search(query).then((searcheResults) => {
			if(searcheResults.error) {
				this.setState({ searcheResults: [] });
			} else {
				this.setState({ searcheResults });
			}
		})
		} else {
			this.setState({ searcheResults: [] });
		}
	}

	render() {
		return (
			<div className="search-books">
            <div className="search-books-bar">

              <Link 
              to='/'
              className="close-search" >Close</Link>

              <div className="search-books-input-wrapper">

                <input 
                	type="text" 
                	placeholder="Search by title or author"
                	value={this.state.query}
                	onChange={(event) => this.updateQuery(event.target.value)}
                />

              </div>
            </div>

            <div className="search-books-results">
              <ol className="books-grid">
              	{
              		this.state.searcheResults.map(searcheResult => {
              		let shelf = 'none';

              		this.props.books.map(book => (
              			book.id === searcheResult.id ? shelf = book.shelf : ''
              			));

              		return (
              		<li key={searcheResult.id}>
              			<Book 
              				book={searcheResult}
              				shelfChanger={this.props.shelfChanger}
              				shelf={shelf}
              			/>
              		</li> 
              		);
              		})
              	}
              </ol>
            </div>
          </div>
		);
	}
}

export default SearchPage;