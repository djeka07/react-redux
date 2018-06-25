export default function prefixer(types, prefix) {
  return Object.keys(types).reduce((result, key) => {
    result[key] = `${prefix}/${key}` // eslint-disable-line no-param-reassign
    return result;
  }, {})
}
