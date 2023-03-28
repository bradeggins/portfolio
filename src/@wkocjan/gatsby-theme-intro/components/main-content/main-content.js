import React from "react";
import About from "@wkocjan/gatsby-theme-intro/src/components/about/about";
import ContactForm from "../contact-form/contact-form";
import Projects from "@wkocjan/gatsby-theme-intro/src/components/projects/projects";
import Skills from "@wkocjan/gatsby-theme-intro/src/components/skills/skills";
import Summary from "../summary/summary";
import Tools from "../tools/tools";
import WorkHistory from "@wkocjan/gatsby-theme-intro/src/components/work-history/work-history";
import UnderConstruction from "../under-construction/under-construction";

const MainContent = ({ formspreeEndpoint, history, projects, profile }) => {
  const isUnderConstruction = process.env.GATSBY_UNDER_CONSTRUCTION;

  if (isUnderConstruction === 'true') {
    return (
      <main className="h-screen lg:w-2/3 lg:pl-8 xl:pl-12">
        <UnderConstruction />
      </main>
    );
  } else {
    return (
      <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
        <Summary profile={profile} />

        <div className="flex flex-wrap">
          <div className="md:w-3/4 pb-12 md:pr-8 lg:pr-12 xl:pr-20">
            {profile.skills && <Skills skills={profile.skills} />}
          </div>
          <div className="md:w-1/4 pb-12">
            {profile.tools && <Tools tools={profile.tools} />}
          </div>
        </div>

        {profile.about && <About about={profile.about} />}
        <Projects projects={projects} />
        <WorkHistory history={history} />
        <ContactForm
          formspreeEndpoint={formspreeEndpoint}
          budget={profile.budget}
        />
      </main>
    );
  }
};

export default MainContent;
