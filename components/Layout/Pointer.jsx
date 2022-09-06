import { motion, useMotionValue, useSpring, useTransform, useVelocity } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export const Pointer = () => {
    const [isMobile, setIsMobile] = useState(false)
    const pointerRef = useRef(null)
    const x = useSpring(0, { damping: 50, stiffness: 900 })
    const y = useSpring(0, { damping: 50, stiffness: 900 })

    useEffect(() => {
        addEventListener("mousemove", (e) => {
            x.set(e.clientX)
            y.set(e.clientY)
        })
    }, [x, y])

    useEffect(() => {
        window.matchMedia("(max-width: 640px)").matches && setIsMobile(true)
        window.addEventListener("resize", () => {
            !window.matchMedia("(max-width: 640px)").matches && setIsMobile(false)
        })
    }, [])

    return isMobile ? null : (
        <motion.div
            style={{ x, y, translateX: "-50%", translateY: "-50%" }}
            ref={pointerRef}
            className="absolute top-0 left-0 z-[999] w-10 h-10 flex justify-center items-center pointer-events-none rounded-full border border-white "
        >
            <div className="w-2 h-2 bg-black rounded-full"></div>
        </motion.div>
    )
}
