import BaseRichText from '.'

export default class Reference extends BaseRichText {
  tagName = 'Reference'
  private _author: string
  private _source: string
  private _content: string

  constructor(author: string = '', content = '', source: string = '') {
    super()
    this._author = author
    this._source = source
    this._content = content
  }

  render = (content?: BaseRichText) => {
    const children = content?.render()
    const citation =
      this._author || this._source
        ? `<cite>${
            this._author ? `${this._author}${this._source ? ', ' : ''}` : ''
          }${this._source}</cite>`
        : ''

    return `<blockquote>
    ${citation}
    <div>${children || this._content}</p>
    </blockquote>`
  }
}
