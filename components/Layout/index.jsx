import { motion, MotionConfig, useAnimation } from "framer-motion"
import dynamic from "next/dynamic"
import { useContext, useEffect, useState } from "react"
import { Menu } from "./Menu"
import { Topbar } from "./TopBar"
import { mainContext } from "../../context/mainContext"
import { Pointer } from "./Pointer"

const Scroll = dynamic(() => import("./Scroll"), { ssr: false })

const Layout = ({ children }) => {
    const [scrollContext, setScrollContext] = useState(null)
    const [device, setDevice] = useState("")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const openMenuAnimationControl = useAnimation()
    const openMenuAnimationVariants = {
        openDesktop: { y: 300, x: 500, overflow: "hidden" },
        closeDesktop: { y: 0, x: 0, overflow: "visible" },
        openMobile: { opacity: 0, zIndex: -1 },
        closeMobile: { opacity: 1, zIndex: 1 },
    }

    useEffect(() => {
        if (window.matchMedia("(max-width: 640px)").matches) setDevice("mobile")
        else setDevice("desktop")
        window.addEventListener("resize", () => {
            if (window.matchMedia("(max-width: 640px)").matches) setDevice("mobile")
            else setDevice("desktop")
        })
    }, [])

    useEffect(() => {
        if (device === "mobile")
            isMenuOpen ? openMenuAnimationControl.start("openMobile") : openMenuAnimationControl.start("closeMobile")
        if (device === "desktop")
            if (isMenuOpen) {
                scrollContext && scrollContext.stop()
                openMenuAnimationControl.start("openDesktop")
            } else {
                scrollContext && scrollContext.start()
                openMenuAnimationControl.start("closeDesktop")
            }
    }, [isMenuOpen, openMenuAnimationControl, device, scrollContext])

    return (
        <>
            <mainContext.Provider value={{ scrollContext }}>
                <MotionConfig transition={{ duration: 0.5 }}>
                    <motion.div
                        layout
                        data-scroll-container
                        animate={openMenuAnimationControl}
                        variants={openMenuAnimationVariants}
                        transition={{ duration: 1 }}
                        className="relative z-10 bg-background"
                    >
                        <div className="container mx-auto text-white">{children}</div>
                    </motion.div>
                    <Topbar toggle={setIsMenuOpen} toggled={isMenuOpen} />
                    <Menu />
                    <Scroll setScroll={setScrollContext} />
                    <Pointer />
                </MotionConfig>
            </mainContext.Provider>
        </>
    )
}

export default Layout
