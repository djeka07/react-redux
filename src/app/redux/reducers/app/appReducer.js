import { APPTYPE as TYPE, APPNAME as NAME } from '../../types'
import AppModel from '../../models/appModel'
import { getInitialState } from '../../../utilities/global'

const initialState = getInitialState(NAME, new AppModel())

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPE.FETCH_APP_SETTINGS_SUCCESS:
      return new AppModel(action.data);
    default: return state;
  }
}

