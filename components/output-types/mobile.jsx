/*  /components/output-types/mobile.jsx  */
import PropTypes from 'prop-types'
import OutputType from './default.jsx'

 OutputType.displayPropTypes = {
  hideOnMobile: PropTypes.bool.tag({
    /*
      pass an object containing a name property as the argument,
      which is the human-readable version of the key; 
      this will be the label that editors see in PageBuilder.
    */
    name: 'Hide on Mobile?'
  })
}

 export default OutputType 