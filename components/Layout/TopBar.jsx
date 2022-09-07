import { useRef } from "react"
import { motion } from "framer-motion"
import Logo from "../Icon/Logo"
import { Sling as Hamburger } from "hamburger-react"

export const Topbar = ({ toggle, toggled }) => {
    return (
        <div className="z-[999] fixed top-0 left-0 w-full">
            <motion.div
                initial={{ filter: "blur(6px)" }}
                animate={{ filter: "blur(0px)", transition: { duration: 2 } }}
                className="container mx-auto relative z-50 w-full flex justify-between items-center py-2"
            >
                <div className="z-[998] w-28">
                    <Logo className={toggled ? "fill-black" : "fill-white"} />
                </div>
                <div className="z-[998] cursor-none">
                    <Hamburger size={45} toggle={toggle} toggled={toggled} color={toggled ? "#000" : "#FFF"} />
                </div>
            </motion.div>
        </div>
    )
}
