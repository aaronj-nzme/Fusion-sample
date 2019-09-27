/*  /content/schemas/movies.js  */

/*
 Sample response data from https://www.omdbapi.com/?apikey=<apiKey>&s=Rocky&page=1

{
  "Search": [
    {
      "Title":"Rocky",
      "Year":"1976",
      "imdbID":"tt0075148",
      "Type":"movie",
      "Poster":"https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg"
    },
    ...
  ],
  "totalResults":"198",
  "Response":"True"
}
*/

// define a const named schema and set it to a string literal containing our GraphQL schema 
const schema = `
  type Movie {
    Title: String!
    Year: Int
    imdbID: String
    Poster: String
  }

  type Query {
    totalResults: Int
    Search: [Movie]!
  }
`
// The totalResults property is an integer, so we assign it an Int type.
// The Search field is defined as a List (denoted by the square brackets) of Movie objects, and we mark it as a non-nullable field denoted by the <code>!</code> at the end.
// In the Movie type, we list the Title, Year, imdbId and Poster fields, as well as their types and modifiers. We don't care about the Type field in the JSON, so we leave it out.

export default schema