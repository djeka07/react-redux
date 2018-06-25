export function getInitialState(name, defaultState = {}) {
  const globalprop = globalProp('__INITIAL_STATE__', defaultState)
  return globalprop[name] || defaultState
}

export default function globalProp(prop, defaultProp = false) {
  const globalObject = typeof window !== 'undefined' && window || global // eslint-disable-line

  return globalObject[prop] || defaultProp
}
