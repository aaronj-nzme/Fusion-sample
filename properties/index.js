/*  /properties/index.js  */

/*
  Site properties have "global" values that will exist until they are overriden by more specific "site" values - this way, 
  if a "site" value does not exist for a given piece of data, it can fall back to the "global" value.
  Global values should be defined in /properties/index.js

*/
export default {
  contactEmail: 'contact@nzme.com',
}