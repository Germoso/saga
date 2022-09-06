import { motion, useMotionValue, useTransform } from "framer-motion"
import dynamic from "next/dynamic"
import { useContext, useEffect, useRef } from "react"
import { scrollBarContext } from "../../../pages/_app"

export const Toolbox = ({ speed = 1 }) => {
    return (
        <div className={`w-screen whitespace-nowrap text-white text-4xl sm:text-8xl font-extrabold uppercase`}>
            <motion.div className={`w-[200%] overflow-hidden`}>
                <span>
                    Ecomerce strategy ui/ux Desing Ecomerce strategy ui/ux Desing Ecomerce strategy ui/ux Desing
                </span>
                <span>
                    Ecomerce strategy ui/ux Desing Ecomerce strategy ui/ux Desing Ecomerce strategy ui/ux Desing
                </span>
            </motion.div>
        </div>
    )
}
