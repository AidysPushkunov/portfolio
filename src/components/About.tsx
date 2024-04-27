"use client";

import React from "react";
import { Link } from "react-scroll";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I am Junior Front-end developer. I'm just starting my career in
              IT.
            </h3>
            <p className="mb-6">
              I like to develop applications of varying complexity and I do
              everything to improve my competence in this area. At the moment, I
              am focused specifically on front-end development because I like it
              and because you can immediately see the result of your work.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Month of <br />
                  commercial experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Statisfied <br />
                  Client
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className="btn btn-lg flex items-center cursor-pointer"
              >
                Contact me
              </Link>
              <Link
                to="work"
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-gradient btn-link cursor-pointer"
              >
                My Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
