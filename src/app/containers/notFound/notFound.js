import React, { Component } from 'react'
import renderMeta from '../../utilities/render'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        {renderMeta(null, '404', 'Sidan hittades tyvärr inte')}
        Route not found
      </div>
    )
  }
}