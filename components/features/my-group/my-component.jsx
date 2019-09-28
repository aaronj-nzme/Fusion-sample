/*  /components/features/my-group/my-component.jsx  */

import React, { Component } from 'react'
import Consumer from 'fusion:consumer'
import getProperties from 'fusion:properties'

/*
  able to use our site properties in a component by using the getProperties method provided to us by fusion:properties.
*/
@Consumer
class MyComponent extends Component {
  render() {
    const siteVars = getProperties(props.arcSite)

    return (
      <div>
        {siteVars.twitter && <a href={`https://twitter.com/${siteVars.twitter}`}>Twitter</a>}
        {siteVars.contactEmail && <a href={`mailto:${siteVars.contactEmail}`}>Contact</a>}
      </div>
    )
  }
}

export default MyComponent