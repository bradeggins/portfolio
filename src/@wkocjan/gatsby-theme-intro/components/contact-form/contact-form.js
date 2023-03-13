import React from "react";
import { ProfileType, string } from "@wkocjan/gatsby-theme-intro/src/types";
import "@wkocjan/gatsby-theme-intro/src/components/contact-form/contact-form";

const ContactForm = ({ budget }) => {
  const CONTACT_DETAILS = [
    { email: "brad.eggins@gmail.com" },
    { tel: "+642041248834" },
  ];
  return (
    <>
      <h1
        className="font-header font-semibold text-front text-sm uppercase mt-12 mb-3"
        id="contact"
      >
        Get in touch with me
      </h1>

      <ul className="flex-col mt-2">

        {
          CONTACT_DETAILS.map(item => {
          const contactType = Object.keys(item)[0]
          const contactValue = item[contactType]
          return (

          <li className="inline-block md:block mb-1 mr-1 md:mr-0">
            <span className="inline-block subpixel-antialiased bg-lead px-3 py-1 font-header font-light text-xl md:text-2xl text-lead-text">
              <a href={contactType === 'tel' ? `tel:${contactValue}` : `mailto:${contactValue}`}>{contactValue}</a>
            </span>
          </li>
          )

          })
        }
      </ul>
    </>
  );
};

ContactForm.propTypes = {
  budget: ProfileType.budget,
  formspreeEndpoint: string.isRequired,
};

export default ContactForm;
