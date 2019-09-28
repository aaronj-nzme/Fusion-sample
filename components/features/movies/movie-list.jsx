/*  /components/features/movies/movie-list.jsx  */

import Consumer from 'fusion:consumer'
import React, { Fragment, Component } from 'react'

@Consumer
class MovieList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: {
        pages: []
      },
      page: 0
    }
    this.fetch = this.fetch.bind(this)
    this.fetch();
  }

  fetch () {
    const { page } = this.state;

    // Increment the page at each call
    this.state.page += 1;

    // Utilizing Fusion's fetchContent method to fetch some content and then set some state. 
    // The function takes in one object variable key we call contentConfigMap, 
    // with the key that you would like to use to retrieve in the state.
    this.fetchContent({
        movies: {
          // The name of the content source
          source: 'movie-search', 
          // Object that contains the values we actually want to query on - 
          // in this case, a movieQuery param searching for movies with the word 'Jurassic' in them 
          // this object will be the only argument passed to the resolve method in our content source
          query: { 
            movieQuery: 'Jurassic',
            page: page + 1
          }, 
          // A string containing a GraphQL query object, 
          // which will filter the results of our JSON down to just the data we need for this component 
          filter: '{ totalResults Search { Title Year Poster } }',
          // destructure the result of the query to cleanly insert them into the state.
          transform (data) {
            // Check if data is being returned
            if(data && data.Search) {
              // Add the results to the paginated list of movies
              this.state.movies.pages[page] = data.Search
              return this.state.movies
            }

            // Otherwise just keep the current list of movies
            else{
              return this.state.movies;
            }
          }
        }
    })
  }

  render () {
    // Concatenate the lists of the movies and filter duplicates - this would ensure that
    // a multiple clicks on the 'More' button wouldn't cause issues with incomplete and out-of-order fetches from
    // network issues
    const movies = [].concat(...this.state.movies.pages).filter(movie => movie);
    
    return (
      <Fragment>
        <h2>Movies</h2>
        <div>
          {movies && movies.map((movie, idx) =>
            <div key={`movie-${idx}`}>
              <h4>{movie.Title}</h4>
              <p><strong>Year:</strong> {movie.Year}</p>
              <img src={movie.Poster} />
            </div>
          )}
          <button onClick={ this.fetch }>More</button>
        </div>
      </Fragment>
    )
  }
}

export default MovieList