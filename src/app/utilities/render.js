import React from 'react'
import Meta from '../components/meta/meta'

export default (topMedia, metaTitle, metaDescription) => {
  if (topMedia) {
    if (topMedia.type === 'video') {
      return (<Meta
        metaVideo={topMedia.src}
        metaTitle={metaTitle}
        metaDescription={metaDescription}
      />)
    }

    return (<Meta
      metaImage={topMedia.src}
      metaTitle={metaTitle}
      metaDescription={metaDescription}
    />)
  }

  return (<Meta
    metaTitle={metaTitle}
    metaDescription={metaDescription}
  />)
}
