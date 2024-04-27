"use client";

import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const services = [
  {
    name: "Frontend development",
    description: `Develop web applications using Next.js, TypeScript, TailwindCSS, React.js, ReactKonva...`,
    link: "Learn more",
  },
  {
    name: "Backend development",
    description: `I can develop a simple server-side application using Node.js, Nest.js, Express.js, Socket.io...`,
    link: "Learn more",
  },
  {
    name: "Additionally",
    description: `I like developing applications, understanding and finding solutions to complex problems. `,
    link: "Learn more",
  },
];

export const Services: React.FC = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 bg-contain"
          >
            <h2 className="h2 text-accent">What I do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              {/* I am junior Front-end developer. */}
            </h3>
            {/* <a href="https://github.com/AidysPushkunov" target="_blank"><button className="btn btn-sm">See my work</button></a> */}
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex justify-center"
                    key={index}
                  >
                    <div className="max-w-[475px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
