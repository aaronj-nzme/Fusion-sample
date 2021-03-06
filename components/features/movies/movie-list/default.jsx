/*  /components/features/movies/movie-list/default.jsx  */

// import the style here...
// Our style should now be applied, just as it was in the first example - except in this case,
// this CSS won't be included on any page that doesn't contain this Feature
//  reducing our payload size and keeping our code modular.
import './style.scss'

// We have to import the `PropTypes` module so we can use it later
import PropTypes from 'prop-types'
import Consumer from 'fusion:consumer'
import React, { Fragment, Component } from 'react'

// We import our shuffle method here...
import shuffle from 'lodash'

@Consumer
class MovieList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: {
        pages: []
      },
      page: 1,
      showList: true
    }
    // this.fetch = this.fetch.bind(this)
    // this.fetch();
  }

  // Adding our eventListener inside `componentDidMount` ensures it only happens client-side
  componentDidMount () {
    // Define an event handler that sets the `showList` property to the opposite of the `plotShown` value we receive
    const msgHandler = (plotShown) => {
      this.setState({ showList: !plotShown })
      // Remove the `msgHandler` event handler function (which is the parent function of this block) as a subscriber from the 'moviePlotToggled' event
      this.removeEventListener('moviePlotToggled', msgHandler)
    }
    // Trigger the event handler when the `moviePlotToggled` event is triggered
    this.addEventListener('moviePlotToggled', msgHandler)
    this.fetch();
  }


  fetch () {
    // We're destructuring the `contentService` and `contentConfigValues` keys out of the `movieListConfig` prop inside `this.props.customFields`...
    // contentService that we extracted from this.props.customFields.movieListConfig.
    const { contentService, contentConfigValues } = this.props.customFields.movieListConfig;
    const { page } = this.state;

    // Increment the page at each call
    this.state.page += 1;

    // Utilizing Fusion's fetchContent method to fetch some content and then set some state. 
    // The function takes in one object variable key we call contentConfigMap, 
    // with the key that you would like to use to retrieve in the state.
    // ...then we can use these values to replace our hardcoded content source name with `contentService` and our query object with `contentConfigValues` (merged with the `page` param)
    this.fetchContent({
        movies: {
          // The name of the content source
          source: contentService,
          // Object that contains the values we actually want to query on - 
          // merges the contentConfigValues object with the page param
          query: Object.assign(contentConfigValues, { page: page + 1}),
          // A string containing a GraphQL query object, 
          // which will filter the results of our JSON down to just the data we need for this component 
          filter: '{ totalResults Search { Title Year Poster } }',
          // destructure the result of the query to cleanly insert them into the state.
          transform: (data) => {
            // Check if data is being returned
            if(data && data.Search) {
              // Add the results to the paginated list of movies
              // ...then we can use it here to shuffle new movies fetched from our content source!
              this.state.movies.pages[page] = shuffle(data.Search);
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

    /*
      In Fusion, there are two ways to ensure that code only gets run on the client side: use a conditional to check for the window object
      or to put client-side code inside the componentDidMount React lifecycle method. 
      This method will get triggered once your component gets mounted on the page client-side, but does not get executed server-side.
    */
    //  if (typeof window === 'undefined') {
    //    return (
    //      <div>Only available for client-side rendering</div>
    //    )
    //  }

    const { hideOnMobile } = this.props.displayProperties || {}
    // Before anything else, if hideOnMobile is true, we return null so nothing else gets rendered
    if (hideOnMobile) {
      return (
        <div>You are on the mobile site</div>
      )
    }

    const { showList } = this.state
    // Use the `showList` state to determine whether to show the movie list or not
    return showList ? (
      <Fragment>
        <h2>Movies</h2>
        <div>
          {movies && movies.map((movie, idx) =>
            <div key={`movie-${idx}`}>
              <h4>{movie.Title}</h4>
              <p><strong>Year:</strong> {movie.Year}</p>
              <img src={movie.Poster}  className='image-sm' />
            </div>
          )}
          <button onClick={ this.fetch }>More</button>
        </div>
      </Fragment>
    ) : (<div>List Hiden</div>)
  }
}

MovieList.propTypes = {
  customFields: PropTypes.shape({
    // We're using the Fusion-specific PropType `contentConfig` and passing it the name(s) of the GraphQL schemas this component will work with
    movieListConfig: PropTypes.contentConfig('movies')
  })
}

export default MovieList