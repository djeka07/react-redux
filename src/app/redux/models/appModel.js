export default class AppModel {
  constructor(props) {
    const newProps = Object.assign({
      language: 'sv'
    }, props)

    this.language = newProps.language
  }
}
