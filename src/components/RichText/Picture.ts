import BaseRichText from '.'

export default class Picture extends BaseRichText {
  tagName = 'Picture'
  private _src: string
  private _alt: string
  private _link: string

  constructor(src: string, alt: string = '', link: string = '') {
    super()
    this._src = src
    this._alt = alt
    this._link = link
  }

  render = (content?: BaseRichText) => {
    const children = content?.render()
    if (this._link) {
      return `<a href="${
        this._link
      }" target="_blank"><img style="border-radius:1rem;border:0.01rem solid #eeeeee;" src="${
        this._src
      }" alt="${this._alt}">${children || ''}</img></a>`
    }

    return `<img style="border-radius:1rem;border:0.01rem solid #eeeeee;" src="${
      this._src
    }" alt="${this._alt}">${children || ''}</img>`
  }
}
