'use client'

import React, { useState, useEffect } from 'react'

interface AnimatedTextProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
  className?: string
}

export function AnimatedText({ texts, typingSpeed = 100, deletingSpeed = 50, delayBetweenTexts = 1000, className = '' }: AnimatedTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState(texts[0] ?? '')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const animateText = () => {
      const fullText = texts[currentTextIndex]
      
      if (!isDeleting && currentText !== fullText) {
        setCurrentText(fullText.slice(0, currentText.length + 1))
        timeout = setTimeout(animateText, typingSpeed)
      } else if (isDeleting && currentText !== '') {
        setCurrentText(currentText.slice(0, -1))
        timeout = setTimeout(animateText, deletingSpeed)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        timeout = setTimeout(animateText, delayBetweenTexts)
      } else {
        setIsDeleting(true)
        timeout = setTimeout(animateText, delayBetweenTexts)
      }
    }

    timeout = setTimeout(animateText, delayBetweenTexts)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <span className={`inline-block w-full ${className}`}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}
