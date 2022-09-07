import { motion, useMotionValue, useTransform, useAnimationControls } from "framer-motion"
import dynamic from "next/dynamic"
import { useContext, useEffect, useRef, useState } from "react"
import { mainContext } from "../../../context/mainContext"

const Marquee = ({ text, speed = 1, children }) => {
    const [content, setContent] = useState("")
    const textRef = useRef(null)

    const { scrollContext } = useContext(mainContext)
    const windowClientRect = useRef(0)
    const [scrollYValue, setScrollYValue] = useState(0)
    const xSpring = useMotionValue(0)
    const x = useTransform(xSpring, [0, windowClientRect.current.height], ["0%", `-${100 * speed}%`])
    const resetXTransfrom = useAnimationControls()

    useEffect(() => {
        if (!textRef.current) return
        const textWidth = textRef.current.getBoundingClientRect().width
        windowClientRect.current = document.documentElement.getBoundingClientRect()
        if (textWidth < windowClientRect.current.width) {
            setContent((prevContent) => prevContent.concat(" ", text))
        }
    }, [text, content])

    const containerRef = useRef(null)

    const addScrollListener = () => {
        if (!scrollContext) return
        scrollContext.on("scroll", (e) => {
            setScrollYValue(e.scroll.y)
            if (
                Math.abs(containerRef.current.getBoundingClientRect().x) ===
                textRef.current.getBoundingClientRect().width
            ) {
                resetXTransfrom.start({ x: 0 })
            }
        })
    }

    useEffect(() => {
        xSpring.set(scrollYValue)
    }, [scrollYValue, xSpring])

    return (
        <motion.div
            onViewportEnter={addScrollListener}
            className="w-full text-white font-extrabold text-5xl sm:text-6xl lg:text-8xl uppercase"
        >
            <motion.div
                ref={containerRef}
                className="w-fit whitespace-nowrap"
                animate={resetXTransfrom}
                style={{ x }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <motion.div className="inline-block w-fit">
                    <span ref={textRef}>{content}</span>
                </motion.div>
                <div className="inline-block w-fit absolute">
                    <span>{content}</span>
                </div>
            </motion.div>
            {children}
        </motion.div>
    )
}

export default dynamic(() => Promise.resolve(Marquee), { ssr: false })
