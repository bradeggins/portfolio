import React from "react";
import {
  FaEnvelope,
  FaFileDownload,
} from "@wkocjan/gatsby-theme-intro/node_modules/react-icons/fa";
import { ProfileType } from "@wkocjan/gatsby-theme-intro/src/types";

const Header = ({ initials }) => (
  <header className="flex justify-between p-4 lg:px-8">
    <span className="inline-flex w-14 h-14 lg:mt-4 font-header font-bold text-xl justify-center items-center text-center text-front border-2 border-solid border-front rounded-full">
      {initials}
    </span>
    <span className="flex">
      <a
        className="flex w-14 h-14 font-header font-semibold mx-1 px-2 bg-lead rounded-full text-lead-text justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150"
        href="#contact"
      >
        <FaEnvelope className="inline-block h-6 w-6 lg:hidden" />
        <span className="hidden lg:block">Contact me</span>
      </a>
      <a
        className="flex w-14 h-14 font-header font-semibold mx-1 px-2 border-2 border-solid border-front border-lead rounded-full text-lead justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFileDownload className="inline-block h-6 w-6 lg:hidden" />
        <span className="hidden lg:block">View my resume</span>
      </a>
    </span>
  </header>
);

Header.propTypes = {
  initials: ProfileType.initials,
};

export default Header;
