import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './app.scss'


const mapStateToProps = state => ({ data: state.data })

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.topBar}>
          <Link className={styles.link} to="/">Home</Link>
          <Link className={styles.link} to="/sdhd">Om oss</Link>
        </div>
        {this.props.children}
        <div className={styles.footer} />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default connect(mapStateToProps)(App)
