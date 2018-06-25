// import path from 'path'
import Express from 'express'
import handleRender from './render/handleRender'
import config from '../configs'

// this is a very simple express app designed only for the purpose of this repo
const app = Express()
const { port } = config

// server static content
app.use('/dist', Express.static('dist'))

// register route handler
app.use(handleRender)

// listen out for incoming requests
app.listen(port, () => {
  console.log('app now listening on port', port)
})
