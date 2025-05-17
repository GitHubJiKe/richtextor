import BaseRichText from '.'

export default class Link extends BaseRichText {
  _text = ''
  _url = ''
  tagName = 'Link'
  constructor(text: string, url: string) {
    super()
    this._text = text
    this._url = url
  }

  setText(v: string) {
    this._text = v
  }

  setUrl(u: string) {
    this._url = u
  }

  render = (content?: BaseRichText) => {
    const children = content?.render()
    return `<a style="display:inline-block;margin:0 0.3rem;" target="_blank" href="${
      this._url
    }">${children || this._text}</a>`
  }
}
