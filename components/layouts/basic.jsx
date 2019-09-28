/*  /components/layouts/basic.jsx  */

export default [
    {
      id: 'header',
      // or className alternatively
      cssClass: 'col-xs-12 fixed-on-small',
      element: 'header'
    },
    {
      id: 'sidebar',
      cssClass: 'col-xs-12 col-md-3',
      element: 'aside'
    },
    {
      id: 'main',
      cssClass: 'col-xs-12 col-md-9',
      element: 'article'
    },
    {
      id: 'footer',
      cssClass: 'col-xs-12',
      element: 'footer'
    },
  ]
  
// This layout would then result in HTML resembling the following on the webpage

{/* <header id="header" class="col-xs-12 fixed-on-small">
  // Header Features/Chains
</header>
<aside id="sidebar" class="col-xs-12 col-md-3">
  // Sidebar Features/Chains
</aside>
<article id="main" class="col-xs-12 col-md-9">
  // Main Features/Chains
</article>
<footer id="footer" class="col-xs-12">
  // Footer Features/Chains
</footer> */}