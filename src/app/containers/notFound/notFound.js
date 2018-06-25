import React, { Component } from 'react'
import { connect } from 'react-redux';
import renderMeta from '../../utilities/render'

class NotFound extends Component {
  render() {
    return (
      <div>
        {renderMeta(null, '404', 'Sidan hittades tyvärr inte')}
        Route not found
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ data: state.notFound })
export default connect(mapStateToProps)(NotFound)
