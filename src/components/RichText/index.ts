import type { CSSProperties } from 'react'

export default abstract class BaseRichText {
  tagName!: string
  style!: CSSProperties
  abstract render: (content?: BaseRichText) => string
}
