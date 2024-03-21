"use client";
import React, { useState } from "react";

import { BiHomeAlt, BiUser } from "react-icons/bi";
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquareText,
} from "react-icons/bs";

import { Link } from "react-scroll";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export const Nav: React.FC = () => {
  const [location, setLocation] = useState("");
  const params = useParams();

  useEffect(() => {
    setLocation(window.location.hash);
  }, [params]);

  return (
    <nav className={"fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50"}>
      <div className="container mx-auto">
        <div className=" w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-between text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className={
              location == "#home"
                ? "active cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                : "cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            }
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className={
              location == "#about"
                ? "active cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                : "cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            }
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            className={
              location == "#services"
                ? "active cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                : "cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            }
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className={
              location == "#work"
                ? "active cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                : "cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            }
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className={
              location == "#contact"
                ? "active cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                : "cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            }
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};
