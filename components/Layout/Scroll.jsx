import locomotiveScroll from "locomotive-scroll"
import { useEffect, useRef } from "react"

const Scroll = ({ setScroll }) => {
    const scroll = useRef(null)
    useEffect(() => {
        if (!scroll.current) {
            scroll.current = new locomotiveScroll({
                el: document.querySelector("[data-scroll-container]"),
                smooth: true,
                lerp: 0.05,
                mobile: {
                    smooth: true,
                },
                tablet: {
                    smooth: true,
                    breakpoint: 0,
                },
            })
            setScroll(scroll.current)
        }
    }, [setScroll])

    return null
}

export default Scroll
