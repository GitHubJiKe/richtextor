import type BaseRichText from '../RichText'

export default class RichTextViewer {
  contentList: BaseRichText[] = []
  private _dom!: HTMLElement
  constructor(dom: HTMLElement) {
    this._dom = dom

    this.setViewerStyle()
  }

  setViewerStyle() {
    this._dom.style.cssText = `border:0.1rem solid #eeeeee;border-radius:1rem;padding:2rem;width:100%;`
  }

  render() {
    const content = this.contentList.map(item => item.render()).join('')
    this._dom.innerHTML = content
  }
}
