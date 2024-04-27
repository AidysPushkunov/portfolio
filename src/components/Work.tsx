"use client";
import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import { Link } from "react-scroll";

export const Work: React.FC = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-10">
                {" "}
                Here you can check out my latest projects. To get acquainted
                with all projects, visit my{" "}
                <a href="https://github.com/AidysPushkunov">GitHub</a>.
              </p>
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-sm">View all projects</button>
              </Link>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <Image
                className="group-hover:scale-125 transition-all duration-500"
                src="/assets/portfolio-img1.png"
                width={800}
                height={800}
                alt="Logotype"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Frontend/Backend app</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Altai Shatra</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 flex flex-col gap-y-20"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <Image
                className="group-hover:scale-125 transition-all duration-500"
                src="/assets/portfolio-img2.png"
                width={800}
                height={800}
                alt="Logotype"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Frontend Landing</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Portfolio</span>
              </div>
            </div>

   
          </motion.div>
        </div>
      </div>
    </section>
  );
};
