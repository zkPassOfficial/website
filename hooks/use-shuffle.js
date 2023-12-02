import { useEffect, useState } from 'react'
import { shuffle } from 'txt-shuffle'

export function useShuffle({ text, duration = 0.5 }) {
  const [shuffledText, setShuffledText] = useState('')
  const handleShuffle = () => {
    shuffle({
      text: text,
      duration,
      onUpdate: (output) => {
        setShuffledText(output)
      },
    })
  }
  useEffect(() => {
    if (!text) return
    handleShuffle(text)
  }, [text])

  return {
    shuffledText,
    handleShuffle,
  }
}
