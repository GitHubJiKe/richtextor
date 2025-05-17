import BaseRichText from '.'
import hljs from 'highlight.js'
export default class Code extends BaseRichText {
  tagName = 'Code'
  private _language: string
  private _content: string

  constructor(language: string = '', content: string = '') {
    super()
    this._language = language
    this._content = content
  }

  render = (content?: BaseRichText) => {
    const children = content?.render()
    const codeContent = children || this._content
    setTimeout(() => {
      hljs.highlightAll()
    }, 0)
    return `<pre data-lang="${this._language}"><code class="language-${this._language}">${codeContent}</code></pre>`
  }
}
