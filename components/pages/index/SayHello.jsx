import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import dynamic from "next/dynamic"

const SayHello = ({ text }) => {
    const containerRef = useRef(null)
    const [containerWidth, setContainerWidth] = useState(0)
    const [containerHeight, setContainerHeight] = useState(0)
    const xSpring = useSpring(0, { damping: 50, stiffness: 1000 })
    const ySpring = useSpring(0, { damping: 50, stiffness: 1000 })
    const x = useTransform(xSpring, [0, containerWidth], [(containerWidth / 8) * -1, containerWidth / 8])
    const y = useTransform(ySpring, [0, containerHeight], [(containerHeight / 8) * -1, containerHeight / 8])
    const rotate = useMotionValue(20)

    useEffect(() => {
        const containerClientRect = containerRef.current.getBoundingClientRect()
        console.log(containerClientRect)
        setContainerWidth(containerClientRect.width)
        setContainerHeight(containerClientRect.height)
        xSpring.set(containerWidth / 2)
        ySpring.set(containerHeight / 2)
    }, [containerWidth, xSpring, ySpring, containerHeight])

    useEffect(() => {
        containerRef.current.addEventListener("mouseover", () => {
            containerRef.current.addEventListener("mousemove", (e) => {
                xSpring.set(e.offsetX)
                ySpring.set(e.offsetY)
            })
            containerRef.current.addEventListener("mouseleave", () => {
                xSpring.set(containerWidth / 2)
                ySpring.set(containerHeight / 2)
                containerRef.current.removeEventListener("mouseover", () => {})
            })
        })
    }, [xSpring, ySpring, containerHeight, containerWidth])

    return (
        <a href="https://github.com/germoso" target="_blank" rel="noreferrer">
            <div
                ref={containerRef}
                className="w-64 h-64 border-4 border-logoPink rounded-full flex justify-center items-center"
            >
                <motion.div
                    style={{ rotate, x, y }}
                    className="pointer-events-none text-2xl uppercase font-bold text-logoPink"
                >
                    {text}
                </motion.div>
            </div>
        </a>
    )
}

export default dynamic(() => Promise.resolve(SayHello), { ssr: false })
