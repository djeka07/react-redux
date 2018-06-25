import { createSelector } from 'reselect'
import { HOMENAME as NAME } from '../../types'

const homeState = state => state[NAME]

export default createSelector([
  homeState
], home => home)
