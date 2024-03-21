"use client";

import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

export const Banner: React.FC = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[25px] font-bold leading-[0.8] lg:text-[50px]"
            >
              AIDYS <span>PUSHKUNOV</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px]  font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a </span>
              <TypeAnimation
                sequence={["Front-end", 2000, "Developer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Welcome to my portfolio, here you will learn more about me as a
              developer. Here you can get acquainted with my projects that I
              worked on.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
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
            </motion.div>
            <motion.div
              variants={fadeIn("right", 1.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/AidysPushkunov" target="_blank">
                <FaGithub />
              </a>
              <a href="https://t.me/AidysPushkunov" target="_blank">
                <FaTelegram />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <Image
              src="/assets/avatar.svg"
              width={500}
              height={500}
              alt="Logotype"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
