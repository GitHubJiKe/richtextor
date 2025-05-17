import BaseRichText from '.'

export default class Paragraph extends BaseRichText {
  _contentList: (BaseRichText | string)[] = []
  tagName: string = 'Paragraph'
  constructor(contentList: (BaseRichText | string)[]) {
    super()

    this._contentList = contentList
  }

  render = (content?: BaseRichText) => {
    const children = content?.render()
    const backupText = this._contentList
      .map(item => {
        if (typeof item === 'string') {
          return item
        } else {
          return (item as BaseRichText).render()
        }
      })
      .join('')
    return `<p>
    ${children || backupText}
    </p>`
  }
}
