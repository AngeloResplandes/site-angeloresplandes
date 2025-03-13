"use client";

import "@/assets/css/globals.css"

import { useEffect, useState } from "react";

type TypingTextProps = {
    text: string
}

const TypingText: React.FC<TypingTextProps> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState<string>("")
    const [index, setIndex] = useState<number>(0)
    const [showCursor, setShowCursor] = useState<boolean>(true)

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index])
                setIndex((prevIndex) => prevIndex + 1)
            }, 150)
            return () => clearTimeout(timeout)
        } else {
            const cursorInterval = setInterval(() => {
                setShowCursor((prev) => !prev)
            }, 500)
            return () => clearInterval(cursorInterval)
        }
    }, [index, text])

    return (
        <h1 className="text-xl font-mono font-medium flex items-center">
            {displayedText}
            <span className={`inline-block w-2 h-6 ml-1 color-bar
                ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}></span>
        </h1>
    )
}

const TextAnimated: React.FC = () => {
    return (
        <div className="flex h-full justify-center items-center">
            <TypingText text="Hello world!" />
        </div>
    )
}

export default TextAnimated
