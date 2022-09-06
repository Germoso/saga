/* eslint-disable @next/next/no-img-element */
import { motion, useAnimationControls } from "framer-motion"
import Marquee from "../components/pages/index/Marquee"
import Layout from "../components/Layout"
import { ModelsFigure } from "../components/pages/index/ModelsFigure"
import Instagram from "../components/Icon/Instagram"
import Linkedin from "../components/Icon/Linkedin"
import Logo from "../components/Icon/Logo"

export default function Home() {
    return (
        <Layout>
            <header data-scroll-section className="h-[70vh] flex items-center px-5 sm:px-0 ">
                <motion.h1
                    data-scroll
                    data-scroll-speed="-4"
                    initial={{ opacity: 0.1, y: 100, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1 } }}
                    className="relative text-4xl font-bold text-white sm:text-5xl lg:text-7xl"
                >
                    We transform online shops into digital brand stores.
                </motion.h1>
            </header>
            <main data-scroll-section>
                <video className="w-screen" loop autoPlay="autoplay" muted>
                    <source
                        src="https://uploads-ssl.webflow.com/60a639e9d097e60fe037d6b1/60a639e9d097e63e9a37d6ee_Showreel-2021-short-transcode.mp4"
                        type="video/webm"
                    />
                </video>
                <motion.section
                    data-scroll
                    data-scroll-speed="-1"
                    data-scroll-direction="horizontal"
                    initial={{ opacity: 0.2, y: 100, filter: "blur(2px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    className="px-5 sm:px-0 h-[80vh] lg:h-screen flex flex-col justify-center text-3xl text-white font-bold sm:text-4xl lg:text-5xl"
                >
                    <p className="">
                        SAGA is an expert in branded eCommerce and digital storytelling. We create customized online
                        shops, digital products and services that combine user centricity with unique brand identities.
                    </p>
                    <span className="text-pink-300">We hate standards and love uniqueness.</span>
                </motion.section>

                <section className="relative flex flex-col sm:flex-row">
                    <ModelsFigure
                        figcaption="Reinventing a brand digitally."
                        title="Maier Sports"
                        img={
                            "https://uploads-ssl.webflow.com/60a639e9d097e60fe037d6b1/62cd35f85c9f0ef95e873395_maier_main-p-800.jpeg"
                        }
                    />
                    <ModelsFigure
                        figcaption="A shop based on inspiration,  guidance and personality."
                        title="Hallhuber - eCommerce"
                        img={
                            "https://uploads-ssl.webflow.com/60a639e9d097e60fe037d6b1/60a639e9d097e66bc337d6ed_original-p-800.jpeg"
                        }
                    />
                </section>

                <section
                    data-scroll
                    data-scroll-speed="-3"
                    // data-scroll-position="bottom"
                    data-scroll-offset="-100%"
                    className="h-screen flex flex-col gap-3 justify-center "
                >
                    <h4 className="px-5 sm:px-0 text-2xl font-bold">Our Tollbox.</h4>
                    <motion.div
                        initial={{ visibility: "hidden" }}
                        whileInView={{ visibility: "visible" }}
                        className="flex flex-col gap-10"
                    >
                        <Marquee text={"Ecomerce Strategy ui/ux desing consumer insights"}></Marquee>
                        <Marquee speed={0.5} text={"Ecomerce Strategy ui/ux desing consumer insights"}></Marquee>
                    </motion.div>
                </section>

                <section className="px-5 sm:px-0 h-screen ">
                    <motion.div
                        initial={{ opacity: 0.2, y: 50, filter: "blur(2px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                        className="justify-center flex flex-col gap-3 "
                    >
                        <h4 className="text-2xl font-bold">Brands who trust us</h4>
                        <div className="w-40"></div>
                        <div className="grid grid-cols-3 justify-items-center items-center gap-10">
                            <img
                                className="w-full sm:w-60"
                                src="https://uploads-ssl.webflow.com/60a639e9d097e60fe037d6b1/60a639e9d097e6123d37d6d3_hallhuber.svg"
                                alt=""
                            />

                            <img
                                className="w-full sm:w-60"
                                src="https://uploads-ssl.webflow.com/60a639e9d097e60fe037d6b1/60a639e9d097e6762d37d6d2_bofner.svg"
                                alt=""
                            />
                            <img
                                className="w-full sm:w-60"
                                src="https://uploads-ssl.webflow.com/60a639e9d097e60fe037d6b1/60a639e9d097e67e1e37d6ce_mammut.svg"
                                alt=""
                            />
                            <img
                                className="w-full sm:w-60"
                                src="https://uploads-ssl.webflow.com/60a639e9d097e60fe037d6b1/60a639e9d097e67fd937d6cc_orto.svg"
                                alt=""
                            />
                            <img
                                className="w-full sm:w-60"
                                src="https://uploads-ssl.webflow.com/60a639e9d097e60fe037d6b1/60a639e9d097e6513537d6cf_cyb.svg"
                                alt=""
                            />
                            <img
                                className="w-full sm:w-60"
                                src="https://uploads-ssl.webflow.com/60a639e9d097e60fe037d6b1/60a639e9d097e68ea937d6cd_hubtech.svg"
                                alt=""
                            />
                            <img
                                className="w-full sm:w-60"
                                src="https://uploads-ssl.webflow.com/60a639e9d097e60fe037d6b1/60a639e9d097e63f7a37d6ea_Element%201.svg"
                                alt=""
                            />
                            <img
                                className="w-full sm:w-60"
                                src="https://uploads-ssl.webflow.com/60a639e9d097e60fe037d6b1/60a639e9d097e6d80037d6c9_k%C3%A4fer.svg"
                                alt=""
                            />
                            <img
                                className="w-full sm:w-60"
                                src="https://uploads-ssl.webflow.com/60a639e9d097e60fe037d6b1/60a639e9d097e6e71137d6c6_bestsecret.svg"
                                alt=""
                            />
                        </div>
                    </motion.div>
                </section>

                <motion.section className="px-5 sm:px-0 h-screen ">
                    <motion.div
                        initial={{ opacity: 0.2, y: 50, filter: "blur(2px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                        className="justify-center flex flex-col gap-10"
                    >
                        <div className="text-2xl sm:text-4xl font-extrabold uppercase ">
                            <h4>PARTNERING WITH FORWARD THINKING BRANDS.</h4>
                            <span>GET IN TOUCH.</span>
                        </div>
                        <div className="w-full flex flex-col sm:flex-row justify-between gap-10">
                            <div className="flex flex-col gap-1">
                                <h5 className="text-xl font-bold">Based in Munich</h5>
                                <p className="text-sm">Zenettiplatz 1 / 80337 Munich</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h5 className="text-xl font-bold">Drop us a line</h5>
                                <p className="text-sm">info@saga-digital.com</p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div className="w-7">
                                    <Instagram fill="#FFF" />
                                </div>
                                <div className="w-5">
                                    <Linkedin fill="#FFF" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>
            </main>
            <footer data-scroll-section className="relative z-30 py-20   text-gray-300 font-light text-xs lg:text-base">
                <motion.div
                    initial={{ opacity: 0, filter: "blur(2px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0)" }}
                    className="flex flex-col gap-3 items-center"
                >
                    <div data-scroll data-scroll-speed="-8" className="w-full">
                        <Logo className={"fill-logoPink w-full"} />
                    </div>
                    <div className="w-full flex gap-5 lg:justify-between">
                        <div className="flex gap-2">
                            <span>Impressum</span>
                            <span>Datenschutz</span>
                        </div>
                        <div>Copyright 2021 Saga Digital GmbH</div>
                    </div>
                </motion.div>
            </footer>
        </Layout>
    )
}
