/*    /components/output-types/default.jsx    */

import React from 'react'

export default (props) => {
  return (
    <html>
      <head>
        {/*
          <props.MetaValue name='title' /> gets a meta value by name (in this case, the page title) that was set in the Admin and prints it. 
          Here, we're just using plain JS to fallback to a Default Title if the metaValue doesn't exist.
        */}
        <title>{props.metaValue('title') || 'Default Title'}</title>
        {/* renders <meta> tags for any meta info provided to us by the Admin. */}
        <props.MetaTags />
        {/*  
          includes the client side React library, as well as the component specific script for our single page app to render itself and handle events. 
          Without this line, our code won't work client side! 
        */}
        <props.Libs />
        {/* 
          renders <link> tags for stylesheets that are generated based on any CSS files imported into the components being used on this page. 
          We could have alternatively inlined our CSS for platforms like AMP that require it.
        */}
        <props.CssLinks />
        {/* 
          function that wraps our local resources with a version number, 
          so static resources included with different deployment versions don't collide. 
        */}
        <link rel='icon' type='image/x-icon' href={props.deployment(`${props.contextPath}/resources/img/favicon.ico`)} />
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' />

        {/*  Adding a link to our new CSS file  */}
        <link rel='stylesheet' href={`${props.contextPath}/resources/css/main.css`} />
      </head>
      <body>
        <h1>Welcome to NZME!</h1>
        <div id='fusion-app' className='col-12'>
          {/* 
            React standard prop, but for our purposes it will include all the other components (layouts, chains, and features) 
            that were configured in the Admin to exist on the page. 
            Without it, none of the content on our page gets displayed.
          */}
          {props.children}
        </div>
        {/* bootstraps data from the server that will hydrate our React components. */}
        <props.Fusion />
      </body>
    </html>
  )
}