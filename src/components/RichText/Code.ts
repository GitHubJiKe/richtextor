import BaseRichText from '.'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
export default class Code extends BaseRichText {
  tagName = 'Code'
  private _language: string
  private _content: string

  constructor(language: string = '', content: string = '') {
    super()
    this._language = language
    this._content = content

    // this.highlight().then(() => {
    //   console.log('done')
    // })
  }

  async highlight() {
    const lanModule = await import(
      `highlight.js/lib/languages/${this._language}`
    )
    hljs.registerLanguage(this._language, lanModule)
  }

  render = (content?: BaseRichText) => {
    const children = content?.render()
    const codeContent = children || this._content
    setTimeout(() => {
      hljs.highlightAll()
    }, 1000)
    return `<pre><code class="language-${this._language}">${codeContent}</code></pre>`
  }
}
