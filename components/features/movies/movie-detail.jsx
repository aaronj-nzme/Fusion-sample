/*  /components/features/movies/movie-detail.jsx  */

// ==========================================
// !!!!!!!!!!   Important  !!!!!!!!!!!!!!!!!
// ==========================================
// Please set up resolver first - https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/using-consumer-function.md#setting-up-a-resolver

// importing the Consumer object from fusion:consumer at the top of the file
import Consumer from 'fusion:consumer'
import React, { Component } from 'react'

// added the Consumer decorator so we can use this.props.globalContent
@Consumer
class MovieDetail extends Component {
  constructor (props) {
    super(props)
    this.state = { isPlotShown: false }
    // Let's bind the togglePlot function so that a new function doesn't get created with each render
    this.togglePlot = this.togglePlot.bind(this)
  }

  togglePlot () {
    this.setState(({ isPlotShown }) => ({ isPlotShown: !isPlotShown }))
  }

  render () {

    const { globalContent, outputType } = this.props
    const { isPlotShown } = this.state

    {/* Here, we extract the data we want from `this.props.globalContent`, which we "short circuit" default to an empty object, just in case it doesn't exist */}
    const { Actors, Director, Plot, Poster, Rated, Title, Writer, Year } = this.props.globalContent || {}

    const plotButton = (
      <button onClick={this.togglePlot}>
        {isPlotShown ? 'Hide Plot' : 'Show Plot'}
      </button>
    )

    // Chcek if the output type is amp
    if (outputType === 'amp') {
      return (
        <a href="/link-to-webpage-that-does-something">Click Me!</a>
      )
    }

    {/* Replace the static values with their dynamic equivalents, first checking if each necessary value exists */}
    return (
      <div className='movie-detail col-sm-12 col-md-8'>
        {Title && <h1>{Title}</h1>}
        {Director && <p><strong>Director:</strong> {Director}</p>}
        {Actors && <p><strong>Actors:</strong> {Actors}</p>}
        {Plot && <p><strong>Plot:</strong> {isPlotShown && Plot} {plotButton}</p>}
        {Rated && <p><strong>Rated:</strong> {Rated}</p>}
        {Writer && <p><strong>Writer:</strong> {Writer}</p>}
        {Year && <p><strong>Year:</strong> {Year}</p>}
        {Poster && Title && <img src={Poster} alt={`Poster for ${Title}`} />}
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