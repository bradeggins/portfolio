module.exports = {
  siteMetadata: {
    description: "Personal portfolio of Brad Eggins",
    locale: "en",
    title: "Full stack developer - Christchurch",
    formspreeEndpoint: "",
    showThemeLogo: false
  },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          theme: "blue",
        },
      },
    ],
  }