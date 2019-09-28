/*  /components/features/movies/movie-detail.jsx  */

// ==========================================
// !!!!!!!!!!   Important  !!!!!!!!!!!!!!!!!
// ==========================================
// Please set up resolver first - https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/using-consumer-function.md#setting-up-a-resolver

// importing the Consumer object from fusion:consumer at the top of the file
import PropTypes from 'prop-types'
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
    const { isPlotShown } = this.state
    // Create a common const 'newPlotShown'
    const newPlotShown = !isPlotShown
    this.setState({ isPlotShown: newPlotShown })

    // Dispatch an event called  'moviePlotToggled' whose value is the new state of the plot's visiblity
    this.dispatchEvent('moviePlotToggled', newPlotShown)
  }

  render () {

    const { globalContent, outputType } = this.props
    const { isPlotShown } = this.state

    {/* Here, we extract the data we want from `this.props.globalContent`, which we "short circuit" default to an empty object, just in case it doesn't exist */}
    const { Actors, Director, Plot, Poster, Rated, Title, Writer, Year } = this.props.globalContent || {}

    // We can extract our custom field values here, and even set default values if desired...
    const { moviePrefix = 'Movie', showExtendedInfo = false } = this.props.customFields

    const plotButton = (
      <button onClick={this.togglePlot} className="btn btn-primary">
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
      <div className='movie-detail col-sm-12 col-md-8 card'>
        {Poster && Title && <img src={Poster} alt={`Poster for ${Title}`} className="card-img-top" />}
        {/* We use the `moviePrefix` value before the Title */}
        {/* Invoking the `editableField` method with `moviePrefix` as the custom field it is tied to */}
        <div className="card-body">
          <h2 className="card-title"><span {...this.props.editableField('moviePrefix')}>{moviePrefix}:</span> {Title}</h2>
          {/* we can use our boolean value `showExtendedInfo` to determine if certain data gets displayed or not */}
          {Director && <p className="card-text"><strong>Director:</strong> {Director}</p>}
          {Actors && <p className="card-text"><strong>Actors:</strong> {Actors}</p>}
          {Plot && <p className="card-text"><strong>Plot:</strong> {isPlotShown && Plot} {plotButton}</p>}
          {showExtendedInfo &&
            <div>
              {Rated && <p className="card-text"><strong>Rated:</strong> {Rated}</p>}
              {Writer && <p className="card-text"><strong>Writer:</strong> {Writer}</p>}
              {Year && <p className="card-text"><strong>Year:</strong> {Year}</p>}
            </div>
          }
        </div>
        
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

MovieDetail.propTypes = {
  customFields: PropTypes.shape({
    /*
      defined a required moviePrefix custom field that should contain some text to prefix our movie title, 
      an optional showExtendedInfo field that is a boolean determining whether to show certain data in this view.
    */
    moviePrefix: PropTypes.string.isRequired,
    showExtendedInfo: PropTypes.bool
  })
}


export default MovieDetail