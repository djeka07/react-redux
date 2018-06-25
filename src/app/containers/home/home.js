import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import renderMeta from '../../utilities/render'
import fetchHomeData from '../../redux/actions/home'
import homeSelector from '../../redux/selectors/home/homeSelectors'
import styles from './home.scss'

const mapStateToProps = (state) => (homeSelector(state))
const mapDispatchToProps = {
  fetch: fetchHomeData
}

class Home extends Component {
  componentDidMount() {
    if (!this.props.metaTitle) this.props.fetch()
  }

  render() {
    const { metaTitle, metaDescription, title, teaserText } = this.props;
    if (!this.props.metaTitle) return 'Loading async data...'

    return (
      <div className={styles.home}>
        {renderMeta(null, metaTitle, metaDescription)}
        <h1>{title}</h1>
        <p>{teaserText}</p>
      </div>
    )
  }
}

Home.propTypes = {
  metaTitle: PropTypes.string,
  metaDescription: PropTypes.string,
  title: PropTypes.string,
  teaserText: PropTypes.string,
  fetch: PropTypes.func.isRequired
}

Home.defaultProps = {
  metaTitle: null,
  metaDescription: null,
  title: null,
  teaserText: null,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
