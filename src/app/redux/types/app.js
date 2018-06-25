import prefixer from './prefixer';

const prefix = '@@appTypes';


const types = {
  FETCH_APP_SETTINGS_REQUEST: null,
  FETCH_APP_SETTINGS_SUCCESS: null,
  FETCH_APP_SETTINGS_FAILURE: null
};

export const name = 'APP'
export default prefixer(types, prefix);
