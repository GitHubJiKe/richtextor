import { useEffect, useRef } from 'react'
import './App.css'
import RichTextViewer from './components/RichTextViewer'
import Header from './components/RichText/Header'
import Link from './components/RichText/Link'
import Paragraph from './components/RichText/Paragraph'
import Picture from './components/RichText/Picture'
import Code from './components/RichText/Code'

function App() {
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (domRef.current) {
      const viewer = new RichTextViewer(domRef.current)

      viewer.contentList.push(new Header(1, 'Hello World'))
      // viewer.contentList.push(new Header(3, 'Hello World'))
      // viewer.contentList.push(new Header(4, 'Hello World'))
      // viewer.contentList.push(new Header(5, 'Hello World'))
      // viewer.contentList.push(new Header(6, 'Hello World'))
      viewer.contentList.push(new Paragraph(["欢迎使用", new Link('Baidu', 'https://www.baidu.com'), "搜索引擎,如下图所示，你点击图片试试"]))
      viewer.contentList.push(new Picture('https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png', "baidu", "https://www.baidu.com"))
      viewer.contentList.push(new Header(2, 'this is code'))
      viewer.contentList.push(new Code('javascript', 'console.log("Hello World")'))
      viewer.render()
    }
  }, [domRef.current])
  return (
    <div>
      <div ref={domRef}></div>
    </div>
  )
}

export default App
