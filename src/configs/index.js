
const sharedConfig = {
  disableSsr: false
}

if (process.env.NODE_ENV === 'production') {
  module.exports = Object.assign({}, sharedConfig, require('./config.prod')) // eslint-disable-line global-require
} else {
  module.exports = Object.assign({}, sharedConfig, require('./config.dev')) // eslint-disable-line global-require
}
