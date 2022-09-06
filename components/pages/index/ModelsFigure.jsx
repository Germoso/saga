/* eslint-disable @next/next/no-img-element */
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState, useContext, useRef } from "react"
import { mainContext } from "../../../context/mainContext"

export const ModelsFigure = ({ img, title, figcaption }) => {
    const figureRef = useRef(null)
    const [figureOffsetTop, setFigureOffsetTop] = useState(0)
    const [figureHeight, setFigureHeight] = useState(0)
    const { scrollContext } = useContext(mainContext)
    const scaleValue = useMotionValue(0)
    const scale = useTransform(scaleValue, [figureOffsetTop, figureHeight * 2 + figureOffsetTop], [1.3, 1])

    const setUpdateYScrollValue = () => {
        const figureRefBounding = figureRef.current.getBoundingClientRect()
        setFigureOffsetTop(figureRefBounding.top)
        setFigureHeight(figureRefBounding.height)
        scrollContext &&
            scrollContext.on("scroll", (e) => {
                scaleValue.set(e.scroll.y)
            })
    }

    const removeUpdateYScrollValue = () => {
        if (!scrollContext) return
        scrollContext.start()
        scale.set(1)
    }

    return (
        <motion.figure
            ref={figureRef}
            className="w-full h-screen"
            initial={{ opacity: 0.2, y: 100, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
        >
            <div className="w-full aspect-square overflow-hidden">
                <motion.img
                    onViewportEnter={setUpdateYScrollValue}
                    onViewportLeave={removeUpdateYScrollValue}
                    style={{ scale }}
                    transition={{ duration: 2 }}
                    initial={{
                        scale: 1.3,
                    }}
                    viewport={{ once: true }}
                    className="w-full h-full object-cover"
                    src={img}
                    alt=""
                />
            </div>
            <div className="p-5 flex flex-col gap-2 text-white">
                <h4 className="text-3xl font-bold sm:text-4xl">{title}</h4>
                <figcaption className="sm:text-xl">{figcaption}</figcaption>
            </div>
        </motion.figure>
    )
}
