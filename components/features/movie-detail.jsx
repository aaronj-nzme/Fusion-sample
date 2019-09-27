/*  /components/features/movies/movie-detail.jsx  */

import React, { Component } from 'react'

class MovieDetail extends Component {
  render () {

    const { globalContent, outputType } = this.props

    // Chcek if the output type is amp
    if (outputType === 'amp') {
      return (
        <a href="/link-to-webpage-that-does-something">Click Me!</a>
      )
    }

    return (
      <div className='movie-detail col-sm-12 col-md-8'>
        <h1>Jurassic Park</h1>
        <p><strong>Director:</strong> Steven Spielberg</p>
        <p><strong>Actors:</strong> Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough</p>
        <p><strong>Plot:</strong> Lorem ipsum</p>
        <p><strong>Rated:</strong> PG-13</p>
        <p><strong>Writer:</strong> Michael Crichton (novel), Michael Crichton (screenplay), David Koepp (screenplay)</p>
        <p><strong>Year:</strong> 1993</p>
        <img src='https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg' alt={`Poster for Jurassic Park`} />
      </div>
    )
  }
}

// Notice that the value set for MovieDetail.label is the name of the Feature displayed in the Page Editor.
MovieDetail.label = 'Movie Detail'
// The label allows you to display this Feature in the PageBuilder Editor with a more human-friendly name. You could also set the value of label to be an Object that maps i18n locale codes to their translations:
// MovieDetail.label = {
//     en: 'Movie Detail',
//     es: 'Los detalles de la pelicula'
// }

// mark a Feature to be rendered on the server only
// MovieDetail.static = True

export default MovieDetail