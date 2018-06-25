import prefixer from './prefixer';

const prefix = '@@homeTypes';

const types = {
  FETCH_HOME_REQUEST: null,
  FETCH_HOME_SUCCESS: null,
  FETCH_HOME_FAILURE: null
};

export const name = 'HOME'
export default prefixer(types, prefix)
