import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import config from '../../../configs'

const Meta = ({ metaTitle, metaDescription, metaImage, metaVideo }) => {
  function renderMeta() {
    let meta = []

    if (metaImage) {
      meta = [{ property: 'og:image', content: `${metaImage}` }]
    }
    if (metaVideo) {
      meta = [...meta, { property: 'og:video', content: `${metaVideo}` }]
    }

    meta = [
      ...meta,
      ...config.app.meta,
      { property: 'og:site_name', content: `${config.app.title}` },
      { property: 'og:title', content: `${metaTitle} - ${config.app.title}` },
      { property: 'og:description', content: `${metaDescription}` },
      { property: 'description', content: `${metaDescription}` }]

    if (!config.isProduction) {
      meta = [
        ...meta,
        { property: 'robots', content: 'noindex' },
        { property: 'googlebot', content: 'noindex' }
      ]
    }

    return meta
  }

  return (
    <Helmet
      title={`${metaTitle} - ${config.app.title}`}
      titleTemplate={`${metaTitle} - ${config.app.title}`}
      meta={renderMeta()}
    />
  )
}

Meta.propTypes = {
  metaTitle: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
  metaImage: PropTypes.string,
  metaVideo: PropTypes.string
}

Meta.defaultProps = {
  metaImage: null,
  metaVideo: null
}

export default Meta
