/*    /content/sources/movie-find.js    */

// Detail - https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/defining-content-source.md#defining-a-content-source-in-javascript

// we have access to the fusion:environment in content sources, which gives us decrypted access to "secret" environment variables.
import { OMDB_API_KEY } from 'fusion:environment'

// The resolve property is a function whose output is a URL which returns the JSON we want. 
// It accepts a single argument we've named query here (but you could call it anything). 
// The query object contains the values of the parameters we need to make a request - in this case, we only need the movieTitle param. 
// These values are either set in the PageBuilder Admin (for "global" content) and retried by resolvers, or if you're fetching your own content you will provide the values when you make the fetch call.
const resolve = (query) => {
  const requestUri = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&plot=full`

  // if a movieTitle property exists in the query object that was passed to us, we want to use that param to find our movie.
  if (query.hasOwnProperty('movieTitle')) return `${requestUri}&t=${query.movieTitle}`

  // we will throw an error since we don't have the data we need to make our request.
  throw new Error('movie-find content source requires a movieTitle')
}

export default {
  resolve,
  params: {
    movieTitle: 'text'
  }
}

// fetch property(required, unless using the resolve property - see movie-find-fetch.js)