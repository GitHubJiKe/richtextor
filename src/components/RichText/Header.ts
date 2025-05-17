import BaseRichText from '.'

export default class Header extends BaseRichText {
  tagName = 'Header'
  levelVal = 1
  private _content!: string
  render = (content?: BaseRichText) => {
    const children = content?.render()
    const level = this.levelVal
    return `<h${level}>${children || this._content}</h${level}>`
  }

  constructor(val: number, content: string) {
    super()
    this.level = val
    this._content = content
  }

  set level(v: number) {
    this.levelVal = v
  }
}
