import React from "react";

import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <header className="py-8" id="header">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="https://github.com/AidysPushkunov" target="_blanck">
            <Image
              alt="Logotype"
              src="/assets/logo.svg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
              priority
            />
          </a>

          <a href="https://t.me/AidysPushkunov" target="_blanck">
            <button className="btn btn-sm">Work with me</button>
          </a>
        </div>
      </div>
    </header>
  );
};
