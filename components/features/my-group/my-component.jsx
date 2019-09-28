/*  /components/features/my-group/my-component.jsx  */

import React, { Component } from 'react'
import Consumer from 'fusion:consumer'
import getProperties from 'fusion:properties'
import { Button } from 'antd'

/*
  able to use our site properties in a component by using the getProperties method provided to us by fusion:properties.
*/
@Consumer
class MyComponent extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const siteVars = getProperties(this.props.arcSite)
    console.log(siteVars)

    return (
      <div>
        {siteVars.siteName && <a className="btn btn-info">{siteVars.siteName}</a>}
        {siteVars.twitter && <a href={`https://twitter.com/${siteVars.twitter}`}>Twitter</a>}
        {siteVars.contactEmail && <a href={`mailto:${siteVars.contactEmail}`}>Contact</a>}
      </div>
    )
  }
}

export default MyComponent