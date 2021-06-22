const { urlMap } = require('./urls')

const linkResolver = ({ node, key, value }) => (doc) => {
  // Set the homepage to be the index
  if (doc.uid === 'homepage') {
    return '/'
  }

  // Pretty URLs for known types
  if (urlMap[doc.type]) {
    return [
      urlMap[doc.type],
      doc.uid
    ].join('')
  }

  // Fallback for other types, in case new custom types get created
  return `/doc/${doc.id}`
}

module.exports = linkResolver
