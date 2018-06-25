export default class HomeModel {
  constructor(props) {
    const newProps = Object.assign({
      metaTitle: null,
      metaDescription: null,
      title: null,
      teaserText: null
    }, props)

    this.metaTitle = newProps.metaTitle
    this.metaDescription = newProps.metaDescription
    this.title = newProps.title
    this.teaserText = newProps.teaserText
  }
}
