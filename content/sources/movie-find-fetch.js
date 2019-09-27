// Detail - https://nzme.arcpublishing.com/alc/fusion/documentation/recipes/defining-content-source.md#defining-a-content-source-in-javascript

// import request from 'request-promise-native'
// import { CONTENT_BASE } from 'fusion:environment'
// import collectionFeed from './collection-feed'

// const options = {
//   gzip: true,
//   json: true
// }

// // Add other required fields here which are not present above
// const includedFields = [
//   'additional_properties',
//   'content_elements',
//   'first_publish_date',
//   'slug',
//   'source'
// ].join()

// const fetch = (query) => {
//   return request({
//     uri: `${CONTENT_BASE}${collectionFeed.resolve(query)}`,
//     ...options
//   }).then((collectionResp) => {
//     const collectionResult = collectionFeed.transform(collectionResp, query)
//     const {
//       content_elements: contentElements = []
//     } = collectionResult
//     const ids = contentElements.map(({ _id }) => _id).join()
//     const {
//       website
//     } = query

//     return request({
//       uri: `${CONTENT_BASE}/content/v4/ids?website=${website}&ids=${ids}&included_fields=${includedFields}`,
//       ...options
//     }).then((idsResp) => {
//       const {
//         content_elements: stories = []
//       } = idsResp

//       if (stories.length) {
//         collectionResult.content_elements = collectionResult.content_elements.map((collectionStory) => {
//           return {
//             ...stories.find(({ _id }) => _id === collectionStory._id),
//             ...collectionStory
//           }
//         })
//       }

//       return collectionResult
//     })
//   })
// }

// export default {
//   fetch,
//   // optional
//   // schemaName is a string that identifies the name of a GraphQL schema. This schema defines the shape of the JSON returned from the URL we produced in the resolve function.
//   // schemaName: collectionFeed.schemaName,
//   ttl: collectionFeed.ttl,
//   // required
//   // will contain a list of parameter names and data types that this content source needs to make a request.
//   params: collectionFeed.params,
//   // optional
//   transform: (data) => {
//     return Object.assign(
//       data,
//       { numPlotWords: data.Plot ? data.Plot.split(' ').length : 0 }
//     )
//   }
// }