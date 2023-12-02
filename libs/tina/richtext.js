import NextImage from 'next/image'
import { useEffect, useRef } from 'react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { shuffle } from 'txt-shuffle'
import s from './richtext.module.scss'

export const RichText = ({ content, components = {}, scramble }) => {
  return (
    <TinaMarkdown
      content={content}
      components={{
        h1: RenderH1,
        h2: RenderH2,
        h3: RenderH3,
        h4: RenderH4,
        h5: RenderH5,
        h6: RenderH6,
        p: (props) => <RenderParagraph {...props} scramble={scramble} />,
        img: RenderImage,
        ...components,
      }}
    />
  )
}

const RenderH1 = ({ children }) => {
  return <h1 className="h1">{children}</h1>
}

const RenderH2 = ({ children }) => {
  return <h2 className="h2">{children}</h2>
}

const RenderH3 = ({ children }) => {
  return <h3 className="h3">{children}</h3>
}

const RenderH4 = ({ children }) => {
  return <h4 className="h4">{children}</h4>
}

const RenderH5 = ({ children }) => {
  return <h5 className="h5">{children}</h5>
}

const RenderH6 = ({ children }) => {
  return <h6 className="h6">{children}</h6>
}

const RenderParagraph = ({ children, scramble }) => {
  const textRef = useRef(null)

  useEffect(() => {
    if (scramble && textRef.current) {
      Array.from(textRef.current.childNodes).forEach((node) => {
        if (node.nodeType === 3) {
          // Node is a text node
          const wrapper = document.createElement('span')
          wrapper.textContent = node.textContent
          textRef.current.replaceChild(wrapper, node)

          shuffle({
            text: wrapper.textContent,
            duration: 1.15,
            stayFrames: 25,
            onUpdate: (output) => {
              wrapper.textContent = output
            },
          })
        }
      })
    }
  }, [scramble])

  if (children.props.content[0].type === 'img') {
    return <div className={s.image}>{children}</div>
  }

  return (
    <p ref={textRef} className="p">
      {children}
    </p>
  )
}

const RenderImage = ({ url, caption = '' }) => {
  return <NextImage src={url} alt={caption} fill />
}
