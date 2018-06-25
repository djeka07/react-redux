import { HOMETYPE as TYPE, HOMENAME as NAME } from '../../types'
import HomeModel from '../../models/homeModel'
import { getInitialState } from '../../../utilities/global'

const initialState = getInitialState(NAME, new HomeModel())

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPE.FETCH_HOME_SUCCESS:
      return {
        ...state,
        ...new HomeModel(action.data)
      }

    default: return state;
  }
}
