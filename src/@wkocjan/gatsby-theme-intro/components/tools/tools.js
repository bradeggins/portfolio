import {
  FaPlus,
  FaMinus,
} from "@wkocjan/gatsby-theme-intro/node_modules/react-icons/fa";
import { ProfileType } from "@wkocjan/gatsby-theme-intro/src/types";
import React, { useState } from "react";

const Tools = ({ tools }) => {
  const MAX_DISPLAY_TOOLS = 4;
  const [toggleMoreSkills, setToggleMoreSkills] = useState(false);

  return (
    <>
      <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
        Other skills
      </h5>
      <ul className="flex-col mt-2">
        {tools.map(
          (tool, i) =>
            (toggleMoreSkills || i < MAX_DISPLAY_TOOLS) && (
              <li
                className="inline-block md:block mb-1 mr-1 md:mr-0"
                key={tool}
              >
                <span className="inline-block subpixel-antialiased bg-lead px-3 py-1 font-header font-light text-xl md:text-2xl text-lead-text">
                  {tool}
                </span>
              </li>
            )
        )}
      </ul>
      <button
        className="flex w-14 h-14 mt-2 font-header font-semibold mx-1 px-2 border-2 border-solid border-front border-lead rounded-full text-lead justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150"
        onClick={() => setToggleMoreSkills(!toggleMoreSkills)}
      >
        {toggleMoreSkills ? (
          <>
            <FaMinus className="inline-block h-6 w-6 lg:hidden" />
            <span className="hidden lg:block">- Show less</span>
          </>
        ) : (
          <>
          <FaPlus className="inline-block h-6 w-6 lg:hidden" />
          <span className="hidden lg:block">+ Show more</span>
          
          </>
        )}
      </button>
    </>
  );
};

Tools.propTypes = {
  tools: ProfileType.tools,
};

export default Tools;
