import React from "react"
import { ProfileType, string } from "@wkocjan/gatsby-theme-intro/src/types"
import "@wkocjan/gatsby-theme-intro/src/components/contact-form/contact-form"

const ContactForm = ({ budget }) => {

  return (
    <>
      <h5
        className="font-header font-semibold text-front text-sm uppercase mt-12 mb-3"
        id="contact"
      >
        Contact
      </h5>
      Phone: +64 204 124 8834
      Email: brad.eggins@gmail.com

     
    </>
  )
}

ContactForm.propTypes = {
  budget: ProfileType.budget,
  formspreeEndpoint: string.isRequired,
}

export default ContactForm
